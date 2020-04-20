{# D, table, newcases, np, pd, days, digits, jdate_updated, jdate_since #}
{% set COL_REGION = COL_REGION or 'Country/Region' %}
{% set KPI_CASE = KPI_CASE or 'خاورمیانه' %}
{% set KPIS_INFO = KPIS_INFO or [{'title': 'چین', 'prefix': 'China'}, {'title': 'اروپا', 'prefix': 'EU'}, {'title': 'آمریکا', 'prefix': 'US'}] %}
{% set LEGEND_DOMAIN = LEGEND_DOMAIN or [10, 100, 1000, np.inf] %}
{% set WIDTH_REGION, WIDTH_STRIP = 120, 140 %}
{% set STRIP_WIDTH = (WIDTH_REGION // newcases.shape[1] + 1) %}
{% set LEGEND_RANGE = ['rgba(255, 152, 0, 0.1)', 'rgba(255, 152, 0, 0.4)', 'rgba(255, 152, 0, 0.7)', 'rgba(255, 152, 0, 1)'] %}
{% set TOPLINKS = TOPLINKS or [
  {'title': 'کل دنیا', 'href': '../covid-overview/'}, {'title': 'خاورمیانه', 'href': '../covid-middle-east-overview/'}] %}
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
{% elif KPI_CASE ==  'خاورمیانه' %}
در <b>{{ lastdays }} روز گذشته</b>, <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['Cases (+)'])) }}</b> مورد جدید کرونا در خاورمیانه گزارش شده است.
  <b> در ایران </b> تعداد <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['Iran Cases (+)'])) }}</b> مورد جدید در {{ lastdays }} روز گذشته گزارش شده است.
  <b>در ترکیه </b> تعداد <b class="color-neg">{{ digits.en_to_fa('{0:,.0f}'.format(D['Turkey Cases (+)'])) }}</b> مورد جدید در {{ lastdays }} روز گذشته گزارش شده است.
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

 <script type="text/javascript">
     $(function () {
         $(".mapcontainer").mapael({
             map: {
                 name: "middle_east",
                 defaultArea: {
                     attrs: {
                         stroke: "#fff",
                         "stroke-width": 0.1

                     }
                 }
             },
             /* attrs will be applied to legend AND map elements whereas legendSpecificAttrs will onlybe applied to legend elements */
             legend: {
                 area: {
                     title: "موارد کرونا در خاورمیانه",
                     slices: [
                         {
                             max: 1000,
                             attrs: {
                                 fill: "#d5e5ff"
                             },
                             legendSpecificAttrs: {
                                 stroke: '#505050',
                                 "stroke-width": 2,
                                 width: 50,
                                 height: 50
                             },
                             label: "کمتر از ۱۰۰۰ مورد تایید شده"
                         },
                         {
                             min: 1000,
                             max: 10000,
                             attrs: {
                                 fill: "#87aade"
                             },
                             legendSpecificAttrs: {
                                 stroke: '#505050',
                                 "stroke-width": 2,
                                 width: 50,
                                 height: 50
                             },
                             label: "بین ۱۰۰۰ تا ۱۰۰۰۰ مورد تایید شده"
                         },
                         {
                             min: 10000,
                             max: 50000,
                             attrs: {
                                 fill: "#3777c8"
                             },
                             legendSpecificAttrs: {
                                 stroke: '#505050',
                                 "stroke-width": 2,
                                 width: 50,
                                 height: 50
                             },
                             label: "بین ۱۰۰۰۰ تا ۵۰۰۰۰ مورد تایید شده"
                         },
                         {
                             min: 50000,
                             attrs: {
                                 fill: "#214478"
                             },
                             legendSpecificAttrs: {
                                 stroke: '#505050',
                                 "stroke-width": 2,
                                 width: 50,
                                 height: 50
                             },
                             label: "بیشر از ۵۰۰۰۰ مورد تایید شده"
                         }
                     ]
                 }
             },

             areas: {
                {% for index, row in table.iterrows() %}
                  {% if row[COL_REGION] != 'ایران' %}
                   "{{row[COL_REGION]}}": {
                       "value": "{{ row['Cases'] }}",
                       "attrs": {
                           "href": "#"
                       },
                       "tooltip": {
                           "content": "<span style=\"font-weight:bold;\">{{row[COL_REGION]}}<\/span><br \/> تعداد موارد : {{ digits.en_to_fa('{0:,.0f}'.format(row['Cases'])) }} <br \/> مرگ : {{ digits.en_to_fa('{0:,.0f}'.format(row['Deaths'])) }}"
                       }
                   },
                   {% endif %}
                 {% endfor %}
                 "ایران": {
                     "value": "{{ D['Iran Cases'] }}",
                     "attrs": {
                         "href": "#"
                     },
                     "tooltip": {
                         "content": "<span style=\"font-weight:bold;\">ایران<\/span><br \/> تعداد موارد : {{ digits.en_to_fa('{0:,.0f}'.format(D['Iran Cases'])) }} <br \/> مرگ : {{ digits.en_to_fa('{0:,.0f}'.format(D['Iran Deaths'])) }}"
                     }
                 }

             }
         });
     });
 </script>
 <p class="text-right text-uppercase fs9">بروزرسانی شده در <b>{{ jdate_updated }}</b></p>
 <div class="row mapcontainer">
   <div class="column right">
     <div class="map">
         <span>Alternative content for the map</span>
     </div>
   </div>
   <div class="column left">
     <div class="areaLegend">
         <span>موارد کرونا در خاورمیانه</span>
     </div>

   </div>

 </div>
<div class="overview">
    <!-- {{ toplinks() }} -->
  <p class="text-right text-uppercase fs9">بروزرسانی شده در <b>{{ jdate_updated }}</b> ( +تغییرات نسبت به {{ lastdays }} روز پیش)</p>
    <p class="text-center narrative">{{ narrative() }}</p>

  <div class="item">
    <div class="d-flex kpi-hed text-center">{{ KPI_CASE }}</div>
    <div class="d-flex kpi-box">
      <span class="cases">{{ kpi(title='تعداد مبتلایان', name='Confirmed Cases', number=D['Cases'], growth=D['Cases (+)']) }}</span>
      <span class="cases">{{ kpi(title='مرگ', name='Deaths', number=D['Deaths'], growth=D['Deaths (+)']) }}</span>
    </div>
  </div>
  <div>
    <div class="d-flex kpi-hed text-center">ایران</div>
    <div class="d-flex kpi-box">
      <span class="cases">{{ kpi(title='تعداد مبتلایان', name='Cases', number=D['Iran Cases'], growth=D['Iran Cases (+)']) }}</span>
      <span class="cases">{{ kpi(title='مرگ', name='Deaths', number=D['Iran Deaths'], growth=D['Iran Deaths (+)']) }}</span>
    </div>
  </div>

  <table class="table" style="width:575px;">
   <thead>
     <tr>
       <th class="text-right" >کشور</th>
       <th class="text-left" > تعداد مبتلایان  </th>
       <th class="text-left" > تعداد مرگ </th>
       <th class="text-left" >درصد مرگ میر</th>
     </tr>
   </thead>
   <tbody>
     <tr style="font-size:9px;">
       <td></td>
       <td></td>
       <td></td>
       <td class="text-left change" style="font-size: 9px;">از (+جدبد) {{ jdate_since }}</td>
     </tr>
   {% for index, row in table.iterrows() %}
     <tr>
       <td class="mw"><b>{{ row[COL_REGION] }}</b></td>
       <td class="pl1">{{ digits.en_to_fa('{0:,.0f}'.format(row['Cases'])) }}<span class="change neg">(<b>{{ digits.en_to_fa('{0:+,.0f}'.format(row['Cases (+)'])) }}</b>)</span></td>
       <td class="pl1">{{ digits.en_to_fa('{0:,.0f}'.format(row['Deaths'])) }}<span class="change neg">(<b>{{ digits.en_to_fa('{0:+,.0f}'.format(row['Deaths (+)'])) }}</b>)</span></td>
       <td class="pl1">{{ row['Fatality Rate'] }}%</td>
     </tr>
   {% endfor %}
   </tbody>
 </table>

 </div>
