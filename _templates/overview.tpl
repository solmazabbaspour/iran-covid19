{# D, table, newcases, np, pd, days, digits, jdate_updated, jdate_since #}
{% set COL_REGION = COL_REGION or 'Country/Region' %}
{% set KPI_CASE = KPI_CASE or 'دنیا' %}
{% set KPIS_INFO = KPIS_INFO or [{'title': 'چین', 'prefix': 'China'}, {'title': 'اروپا', 'prefix': 'EU'}, {'title': 'آمریکا', 'prefix': 'US'}] %}
{% set LEGEND_DOMAIN = LEGEND_DOMAIN or [10, 100, 1000, np.inf] %}
{% set WIDTH_REGION, WIDTH_STRIP = 120, 140 %}
{% set STRIP_WIDTH = (WIDTH_REGION // newcases.shape[1] + 1) %}
{% set LEGEND_RANGE = ['rgba(255, 152, 0, 0.1)', 'rgba(255, 152, 0, 0.4)', 'rgba(255, 152, 0, 0.7)', 'rgba(255, 152, 0, 1)'] %}
{% set TOPLINKS = TOPLINKS or [
  {'title': 'کل دنیا', 'href': '../covid-overview/'}, {'title': 'US', 'href': '../covid-overview-us/'},
  {'title': 'Europe', 'href': '../covid-overview-europe/'}] %}
{% set lastdays = days %}
{% set jdate_updated = jdate_updated %}
{% set jdate_since = jdate_since %}


{% macro kpi(title, name, number, growth, growcls='') -%}
  <div class="kpi">
    <div class=" kname">{{ title }}</div>
    <div class="num">{{ digits.en_to_fa('{0:,.0f}'.format(number)) }}</div>
    <div class="grow color-neg{{ growcls }}">(<b>{{ digits.en_to_fa('{0:+,.0f}'.format(growth)) }}</b>)</div>
  </div>
{%- endmacro %}

{% macro kpiblocksm(prefix='', title=KPI_CASE) -%}
  <div class="kpi-sm">
    <div class="kpi-hed">{{ title }}</div>
    <div class="d-flex kpi-box">
      <span class="cases">{{ kpi(title='کل موارد', name='Cases', number=D[prefix + ' Cases'], growth=D[prefix + ' Cases (+)']) }}</span>
      <span class="cases">{{ kpi(title='مرگ', name='Deaths', number=D[prefix + ' Deaths'], growth=D[prefix + ' Deaths (+)']) }} </span>

    </div>
  </div>
{%- endmacro %}

{% macro toplinks() -%}
<div class="text-center toplinksgithub">
  {% for link in TOPLINKS %}<a href="{{ link['href'] }}">{{ link['title'] }}</a>{% endfor %}
</div>
{%- endmacro %}

{% macro narrative() -%}
{% if KPI_CASE == 'دنیا' %}
  در <b>{{ lastdays }} روز گذشته</b>, <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['Cases (+)'])) }}</b> مورد جدید کرونا در دنیا گزارش شده است.
  از این تعداد <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['EU Cases (+)'])) }}</b> ({{ digits.en_to_fa("{0:.0%}".format(D['EU Cases (+)'] / D['Cases (+)'])) }}) مورد مربوط به  <b>اروپا</b> بوده است.
  <b> در ایران </b> تعداد <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['Iran Cases (+)'])) }}</b> مورد جدید در {{ lastdays }} روز گذشته گزارش شده است.
{% elif KPI_CASE == 'US' %}
    در <b>{{ lastdays }} روز گذشته</b></b>, <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['Cases (+)'])) }}</b> new Coronavirus cases have been reported in the US.
  Of which <b class="color-neg">{{  digits.en_to_fa('{0:,.0f}'.format(D['NY Cases (+)'])) }}</b> ({{ digits.en_to_fa( "{0:.0%}".format(D['NY Cases (+)'] / D['Cases (+)'])) }}) are from <b>New York</b> State.
  <b>Washington</b> has reported <b class="color-neg">{{ '{0:,.0f}'.format(D['WA Cases (+)']) }}</b> new cases in the last {{ lastdays }} days.
{% elif KPI_CASE == 'Europe' %}
    در <b>{{ lastdays }} روز گذشته</b>/b>, <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['Cases (+)'])) }}</b>   مورد جدید در اروپا گزارش شده است.
  که تعداد <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['IT Cases (+)'])) }}</b> ({{ digits.en_to_fa("{0:.0%}".format(D['IT Cases (+)'] / D['Cases (+)'])) }}) مورد مربوط به <b>ایتالیا</b>.
  <b>اسپانیا</b> تعداد <b class="color-neg">{{ '{0:,.0f}'.format(D['SP Cases (+)']) }}</b> مورد جدید در {{ lastdays }} روز گذشته گزارش داده است.
{% elif KPI_CASE == 'Asia' %}
  در <b>{{ lastdays }} روز گذشته</b></b>, <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['Cases (+)'])) }}</b> مورد جدید در آسیا گزارش شده است
  تعداد <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['CN Cases (+)'])) }}</b> ({{ digits.en_to_fa("{0:.0%}".format(D['CN Cases (+)'] / D['Cases (+)'])) }}) مورد مربوط به <b>چین</b>.
  <b>ایران</b> تعداد <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['IN Cases (+)'])) }}</b> مورد جدید در {{ lastdays }} رور گذشته گزارش داده است.
{% else %}
  ''
{% endif %}
{%- endmacro %}

{% macro plotstrip(arr) -%}
  <div class="d-flex" style="height:15px;">
    {% set colors = np.digitize(arr, LEGEND_DOMAIN) %}
    {% for i, v in enumerate(arr) %}
    <div style="width:{{ STRIP_WIDTH }}px;background:{{ LEGEND_RANGE[colors[i]] if (v) else '#eee' }};border-right:1px solid rgba(255,255,255,0.5);"></div>
    {% endfor %}
  </div>
{%- endmacro %}

{% macro legend() -%}
<svg width="100" height="20" viewBox="0,0,100,20" style="overflow: visible; display: block;">
  <g>
    {% for i, _ in enumerate(LEGEND_DOMAIN) %}
    <rect x="{{ 25 * i }}"  y="8" width="25" height="10" fill="{{ LEGEND_RANGE[i] }}"></rect>
    {% endfor %}
  </g>
  <g style="font-size:10px;text-anchor:middle;">
    {% for i, x in enumerate(LEGEND_DOMAIN[:-1], 1) %}
    <g transform="translate({{ 25 * i }}, 6)"><text>{{ x }}</text></g>
    {% endfor %}
    </g>
</svg>
{%- endmacro %}
<div class="overview">

  <p class="text-right text-uppercase fs9">بروزرسانی شده در <b>{{ jdate_updated }}</b> ( +تغییرات نسبت به {{ lastdays }} روز پیش)</p>
  <p class="text-center narrative">{{ narrative() }}</p>
  <!-- {{ toplinks() }} -->
  <div class="item">
    <div class="d-flex kpi-hed text-center">{{ KPI_CASE }}</div>
    <div class="d-flex kpi-box">
      <span class="cases">{{ kpi(title='کل موارد', name='Confirmed Cases', number=D['Cases'], growth=D['Cases (+)']) }}</span>
      <span class="cases">{{ kpi(title='مرگ', name='Deaths', number=D['Deaths'], growth=D['Deaths (+)']) }}</span>
    </div>
  </div>
  <div class="item">
    <div class="d-flex kpi-hed text-center">ایران</div>
    <div class="d-flex kpi-box">
      <span class="cases">{{ kpi(title='کل موارد', name='Cases', number=D['Iran Cases'], growth=D['Iran Cases (+)']) }}</span>
      <span class="cases">{{ kpi(title='مرگ', name='Deaths', number=D['Iran Deaths'], growth=D['Iran Deaths (+)']) }}</span>
    </div>
  </div>


  <div class="item overview" style="justify-content:space-between;">
    {% for kpi in KPIS_INFO %}
    {{ kpiblocksm(**kpi) }}
    {% endfor %}
  </div>
  <!-- <table class="table" style="width:575px;">
    <thead>
      <tr>
        <th class="text-right" style="width:{{ WIDTH_REGION }}px;"></th>
        <th class="text-left" style="width:{{ WIDTH_STRIP }}px;">{{ legend() }}</th>
        <th colspan="7"></th>
      </tr>
      <tr>
        <th class="text-right" style="width:{{ WIDTH_REGION }}px;">{{ {'Country/Region': 'Country', 'Province/State': 'State'}.get(COL_REGION, 'Location') }}</th>
        <th class="text-left" style="width:{{ WIDTH_STRIP }}px;">موارد جدید</th>
        <th class="text-left" colspan="2">تعداد مبتلایان</th>
        <th colspan="2">مرگ و میر</th>
        <th class="fs9" >نسبت مرگ</th>
      </tr>
    </thead>
    <tbody>
      <tr style="font-size:9px;">
        <td></td>
        <td style="display:flex;justify-content:space-between;">
          <div>{{ pd.to_datetime(newcases.columns[0]).strftime('%b. %d') }}</div>
          <div>{{ pd.to_datetime(newcases.columns[-1]).strftime('%b. %d') }}</div>
        </td>
        <td></td>
        <td colspan="4" class="text-left change" style="font-size: 9px;">(+ جدید) از {{ jdate_since }}</td>
        <td></td>
        <td></td>
      </tr>
    {% for index, row in table.iterrows() %}
      <tr>
        <td class="mw"><b>{{ row[COL_REGION] }}</b></td>
        <td style="vertical-align: middle;">{{ plotstrip(arr=newcases.loc[row[COL_REGION]].values) }}</td>
        <td class="pl1"><b>{{ '{0:,.0f}'.format(row['Cases']) }}</b></td>
        <td class="change neg">(<b>{{ '{0:+,.0f}'.format(row['Cases (+)']) }}</b>)</td>
        <td class="pl1">{{ '{0:,.0f}'.format(row['Deaths']) }}</td>
        <td class="change neg">(<b>{{ '{0:+,.0f}'.format(row['Deaths (+)']) }}</b>)</td>
        <td class="pl1">{{ row['Fatality Rate'] }}%</td>
      </tr>
    {% endfor %}
    </tbody>
  </table> -->
 </div>
