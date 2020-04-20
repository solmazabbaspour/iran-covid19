/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael >=2.0.0
 *
 * Map of middle_east_final
 *
 * @author Nilou Houshmand
 */

(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('jquery-mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";

    $.extend(true, Mapael,
        {
            maps :  {
                middle_east : {
                    width : 97.54007,
                    height : 85.992401,
                    getCoords : function (lat, lon) {
                        // todo
                        return {"x" : lon, "y" : lat};
                    },
                    'elems': {
                        "یمن" : "m 74.13,73.32 c -0.82,-0.03 -0.36,-1.69 -1.18,-1.78 0.37,-0.57 -0.99,-2.35 -1.23,-2.97 l -0.95,-2.16 c -2.42,0.47 -4.86,0.98 -7.24,1.29 -1.99,0.6 -2.99,1.57 -3.44,2.63 -0.42,0.61 -0.64,2.15 -1.63,2.09 -0.68,-0.04 -0.6,-1.04 -1.26,-0.96 -0.82,0.1 -1.49,0.08 -2.33,-0.03 -0.47,-0.07 -0.96,-0.39 -1.42,-0.39 -0.51,0 -1.02,0.05 -1.53,0.1 -0.63,0.06 -1.15,0.33 -1.8,0.3 -0.36,-0.02 -0.49,-0.41 -0.85,-0.45 -0.35,-0.04 -0.62,0.19 -0.76,0.48 -0.16,0.32 -0.21,0.7 -0.15,1.04 0.04,0.22 0.36,0.45 0.18,0.68 -0.16,0.22 -0.3,0.44 -0.46,0.67 -0.09,0.12 -0.2,0.22 -0.34,0.29 -0.33,0.16 -0.16,0.28 -0.09,0.63 0.11,0.56 -0.11,0.81 -0.21,1.32 -0.09,0.47 0.31,0.88 0.26,1.34 -0.09,-0.08 -0.58,-0.09 -0.5,0.09 -0.02,-0.04 0.49,0.24 0.49,0.24 0.27,0.29 0.37,0.58 0.47,0.95 0.18,0.73 0.2,1.55 0.43,2.26 0.1,0.29 0.34,0.51 0.45,0.8 0.14,0.34 0.01,0.72 0,1.07 -0.01,0.7 0.84,1.28 0.61,1.99 0.31,0.02 0.52,-0.15 0.84,-0.02 0.34,0.13 0.57,0.24 0.94,0.17 0.77,-0.15 1.11,-0.67 1.91,-0.26 -0.04,-0.21 0.19,-0.43 0.27,-0.12 0.13,-0.14 0.21,-0.31 0.32,-0.47 0.17,-0.25 0.44,-0.25 0.67,-0.41 0.5,-0.37 0.56,-0.75 1.25,-0.91 0.65,-0.15 1.33,-0.17 1.99,-0.11 0.39,0.03 1.04,-0.4 1.43,-0.51 0.58,-0.16 0.87,-0.65 1.38,-0.93 0.16,-0.09 0.38,-0.28 0.55,-0.33 0.19,0.01 0.37,0.05 0.54,0.13 0.19,0.01 0.38,-0.01 0.56,-0.07 1.23,-0.19 1.51,-1.45 2.62,-1.98 0.52,-0.25 0.97,-0.31 1.52,-0.41 0.68,-0.12 1.24,-0.56 1.91,-0.72 0.46,-0.11 0.93,-0.19 1.38,-0.35 0.45,-0.16 0.61,-0.51 0.99,-0.7 0.32,-0.16 1,-0.14 1.09,-0.56 0.11,-0.49 -0.23,-0.93 -0.05,-1.43 0.36,-1 1.61,-0.96 2.37,-1.51 m 2.13,12.62 c 0.57,-0.13 1.57,-0.07 1.86,-0.7 -0.34,-0.2 -0.8,-0.51 -1.22,-0.42 -0.2,0.04 -0.37,0.17 -0.59,0.15 -0.23,-0.02 -0.42,-0.22 -0.66,-0.17 -0.26,0.05 -0.49,0.54 -0.27,0.72 0.22,0.19 0.59,0.37 0.89,0.41",
                        "اردن" : "m 25.73,36.73 c -0.05,-0.81 0.28,-1.57 0.29,-2.37 0.01,-0.92 0.43,-1.6 0.54,-2.48 0.05,-0.36 -0.06,-0.74 -0.03,-1.11 0.03,-0.35 0.15,-0.69 0.16,-1.04 0.03,-0.72 -0.07,-1.57 -0.1,-2.3 -0.02,-0.61 0.76,-0.42 1.11,-0.18 0.59,0.4 1.12,1 1.91,0.85 0.79,-0.15 1.52,-0.89 2.18,-1.32 0.84,-0.55 1.68,-1.15 2.56,-1.64 0.27,0.85 0.63,1.68 0.93,2.52 -0.3,0.03 -0.11,0.44 0.09,0.49 0.31,0.08 0.7,0.03 0.2,0.54 -1.57,0.94 -3.14,1.44 -5.02,1.9 l 2.81,2.89 c -0.25,0.12 -0.92,0.11 -1.1,0.33 -0.21,0.26 0.03,0.77 -0.19,1.03 -0.37,0.43 -1.31,0.06 -1.79,0.51 -0.55,0.51 -0.73,1.48 -1.51,1.78 -0.71,0.27 -2.31,-0.24 -3.03,-0.42",
                        "امارات متحده عربی" : "m 68.6,51.4 c 0.17,-0.11 0.23,-0.04 0.19,0.19 0.08,-0.07 0.16,-0.15 0.24,-0.22 0.16,0.23 0.02,0.56 0.2,0.77 0.17,0.21 0.57,0.16 0.81,0.14 0.31,-0.02 0.56,-0.07 0.8,-0.27 0.11,-0.09 0.23,-0.37 0.38,-0.4 0.16,-0.03 0.55,0.2 0.74,0.2 0.32,0.01 0.63,0.04 0.95,0.03 0.86,-0.03 1.46,0.36 2.3,-0.14 -0.08,-0.12 -0.16,-0.23 -0.24,-0.34 0.27,-0.1 0.23,0.22 0.44,0.19 0.31,-0.03 0.56,-0.39 0.69,-0.63 0.34,-0.65 0.38,-1.03 0.97,-1.51 0.58,-0.47 0.81,-1.33 1.36,-1.77 0.6,-0.49 0.97,-0.62 1.14,-1.42 0.44,0.02 0.25,0.65 0.25,0.91 0.01,0.5 0.56,0.25 0.62,0.8 0.07,0.56 0.45,1.28 0.01,1.71 -0.95,0.92 -0.64,0.28 -0.79,-0.12 -0.14,-0.38 -0.44,0.32 -0.4,0.56 0.03,0.18 -0.05,0.18 -0.02,0.37 0.03,0.21 0.17,0.51 0.17,0.75 0.01,0.67 0.69,0.37 0.42,0.82 -0.22,0.36 -0.94,0.04 -1.22,0.37 0.64,0.35 -0.31,1.99 -0.43,3 0.04,0.66 -0.3,0.81 -0.89,0.68 -0.72,-0.17 -1.47,-0.23 -2.2,-0.34 -0.77,-0.11 -1.53,-0.22 -2.3,-0.32 -0.57,-0.07 -1.24,0.04 -1.62,-0.45 -0.38,-0.5 -0.75,-1.01 -1.16,-1.5 -0.28,-0.34 -0.57,-0.68 -0.86,-1.02 -0.29,-0.34 -0.33,-0.7 -0.55,-1.06",
                        "ترکیه" : "M 4.14,0.09 C 3.97,0.09 3.8,0.17 3.57,0.24 3.43,0.28 2.58,0.52 2.6,0.61 2.64,0.91 1.68,1.03 2.46,1.28 2.68,1.35 2.76,1.55 2.8,1.75 2.89,2.08 3,2.09 2.68,2.23 2.08,2.49 2.41,2.81 2.29,3.23 2.22,3.5 1.87,3.84 1.61,3.96 1.85,4.91 2.93,3.86 3.41,4.25 3.71,4.49 2.81,4.76 2.73,4.79 2.26,4.95 2.05,5.44 2.18,5.91 2.58,5.76 2.93,5.02 3.3,4.75 3.74,4.44 4.25,4.33 4.62,3.93 4.86,3.68 4.99,3.32 5.33,3.22 5.61,3.14 5.87,3.35 6.11,3.23 6.31,3.13 6.45,2.96 6.69,2.98 7.18,3.01 7.87,3.46 8.34,3.29 8.59,3.2 8.93,2.62 8.53,2.5 7.49,2.2 6.72,1.84 6.06,1.01 5.89,0.79 6.26,0.72 6.01,0.52 5.87,0.4 5.65,0.38 5.47,0.4 5.09,0.43 4.92,0.65 4.61,0.31 4.45,0.13 4.3,0.08 4.14,0.09 Z M 22.56,0.15 c -0.04,-0 -0.09,3.58e-4 -0.14,0.01 -0.19,0.05 -0.25,0.28 -0.44,0.34 -0.42,0.12 -0.86,-0.05 -1.29,-0.05 -1.04,0 -1.83,-0.15 -2.86,0.13 C 16.85,0.84 16.15,1.29 15.28,1.79 14.98,1.96 14.39,2.1 14.23,2.43 14.08,2.73 14.02,2.93 13.64,2.97 12.79,3.05 12.12,2.61 11.3,2.78 10.68,2.91 10.07,2.64 9.46,2.58 8.91,2.53 8.39,2.96 8.9,3.48 9.36,3.94 10.15,3.72 10.7,3.99 10.06,4.13 8.65,3.84 8.34,4.61 8.58,4.8 8.88,4.61 9.11,4.83 8.63,5.23 7.81,4.91 7.24,4.96 7.05,4.97 6.32,5.09 6.18,4.89 6.18,4.78 6.24,4.7 6.36,4.66 6.11,4.6 5.85,4.59 5.6,4.68 6.37,5.14 5.16,5.23 4.79,5.01 4.53,4.86 4.4,4.7 4.1,4.9 3.86,5.07 3.53,4.85 3.28,4.97 2.8,5.21 2.65,5.87 2.18,6.04 2,6.11 1.97,7.34 1.93,7.59 2.63,7.81 3.29,7.1 3.99,7.44 3.79,7.71 3.54,7.92 3.33,8.16 3.65,8.44 3.89,8.5 3.85,8.94 3.81,9.38 4.22,8.98 4.36,9.37 4.06,9.43 3.92,9.73 3.67,9.87 3.96,10.23 4.16,10.46 4.65,10.52 4.41,11.06 3.57,10.4 3.62,10.93 3.38,10.73 3.43,10.32 3.28,10.07 3.21,9.95 2.81,9.78 2.79,10.02 c -0.03,0.3 0.61,1.05 -0.12,0.88 0.01,0.18 0.74,0.71 0.84,0.51 0.23,-0.45 0.39,-0.09 0.54,0.17 0.15,0.25 0.76,0.08 0.98,0.41 0.3,0.46 -0.1,0.64 -0.45,0.83 0.5,-0.02 0.46,1.37 1,0.7 -0.1,0.48 0.11,0.05 0.29,0.36 0.08,0.13 0.09,0.33 0.02,0.46 -0.08,0.17 -1.14,-0.17 -0.58,0.47 0.37,-0.37 1.92,-0.34 2.37,-0.14 -0.14,0.16 -0.37,0.25 -0.48,0.45 -0.15,0.28 -0.11,0.18 -0.48,0.18 -0.37,-0.01 -0.84,0.01 -1.1,0.31 0.32,0.09 1.49,-0.16 1.74,-0.36 -0,0.19 -0.12,0.34 -0.32,0.38 0.19,0.04 0.25,0.14 0.17,0.31 0.23,-0.17 0.92,-0.63 0.98,-0.91 0.08,0.39 0.74,0.47 1.01,0.7 0.08,-0.49 0.71,-0.09 0.44,0.29 0.35,0.02 0.36,0.54 0.61,0.7 0.33,0.21 0.95,0.47 1.35,0.4 0.35,-0.06 0.72,-0.47 1.07,-0.42 0.14,0.02 0.33,0.31 0.48,0.15 0.27,-0.29 0.2,-0.95 0.2,-1.31 0,-0.63 0.82,-0.47 1.23,-0.4 0.77,0.13 1.47,0.52 2.17,0.85 0.63,0.3 0.87,1.03 1.54,1.32 0.43,0.19 0.96,0.22 1.4,0 0.24,-0.12 0.98,-0.3 1.24,-0.2 0.3,0.11 0.42,-0.23 0.6,-0.42 0.07,0.08 0.15,0.16 0.22,0.24 0.48,-0.6 1.01,-2.08 2.03,-1.57 0.43,0.21 0.86,0.49 1.34,0.57 0.39,0.07 0.92,-0.45 0.4,-0.39 0.31,-0.23 0.57,-0.18 0.82,-0.5 0.18,-0.23 0.45,-0.02 0.58,0.15 0.32,0.42 0.11,0.62 -0.22,0.9 -0.32,0.27 -0.65,0.49 -0.34,0.87 0.17,0.2 0.46,0.55 0.25,0.82 0.22,0.05 0.4,0.19 0.59,0.31 0.08,-0.26 0.4,-0.31 0.49,-0.55 0.07,-0.2 -0.07,-0.42 -0.03,-0.62 0.24,0.06 0.49,-0.01 0.73,-0.02 -0.23,-0.44 -0.41,-0.81 -0.33,-1.33 0.08,-0.53 0.67,-0.41 0.95,-0.08 0.55,0.67 1.94,-0.05 2.58,-0.35 0.6,-0.28 0.9,-0.08 1.39,0.28 0.44,0.33 1.4,0.2 1.93,0.17 1.32,-0.09 2.46,-1.38 3.76,-1.21 0.73,0.09 1.33,0.1 2.05,-0.13 0.28,-0.09 0.92,-0.69 1.06,-0.19 0.16,0.57 0.62,0.23 0.85,-0.16 0.19,-0.32 0.42,-0.22 0.79,-0.22 0.52,-0.01 0.89,0.15 1.38,0.3 0.3,0.09 0.67,0.14 0.92,-0.08 0.14,-0.12 0.4,-0.13 0.55,-0.03 0.31,0.2 -0.04,0.75 0.39,0.89 0.33,0.11 0.56,-0.87 1.13,-0.48 -0.07,-0.15 0.04,-0.42 -0.09,-0.54 -0.12,-0.1 -0.43,-0.18 -0.47,-0.35 -0.09,-0.34 -0.03,-0.68 -0.32,-0.94 -0.29,-0.26 -0.85,-0.18 -0.72,-0.71 0.07,-0.27 0.19,-0.65 0.4,-0.85 -0.62,-0.21 -0.45,-0.9 -0.63,-1.37 -0.13,-0.32 -0.28,-0.5 -0.37,-0.85 -0.06,-0.21 -0.34,-0.64 -0.49,-0.8 0.19,-0.07 0.81,0.05 0.88,-0.18 0.06,-0.18 0.01,-0.36 0.05,-0.54 0.12,-0.58 0.56,-0.23 0.86,0 C 46.68,6.68 45.93,5.99 45.4,5.97 44.77,5.94 44.47,6.01 43.87,5.72 44.24,5.47 43.54,4.92 43.8,4.55 44.06,4.17 43.69,3.81 43.22,3.44 43.08,3.32 43.01,2.9 42.92,2.76 42.76,2.54 42.39,2.8 42.3,2.53 42.41,2.37 42.36,2.28 42.17,2.26 42.05,2.17 41.93,2.08 41.82,1.98 c -0.16,-0.13 -0.35,-0.27 -0.57,-0.23 0.22,-0.47 -0.48,-0.21 -0.62,0.1 -0.12,0.26 -0.67,0.04 -0.86,0 -0.13,-0.03 -0.27,-0.06 -0.4,-0.08 -0.21,-0.04 -0.19,0.2 -0.37,0.19 C 38.71,1.96 38.45,1.58 38.16,1.81 37.45,2.37 36.69,2.8 35.86,3.19 35.17,3.5 34.67,3.34 34,3.11 33.52,2.94 33.24,3 32.74,3.05 32.15,3.11 31.55,3.5 30.97,3.45 30.55,3.4 29.95,3.41 29.64,3.08 29.26,2.67 29.21,3.23 28.94,3.1 28.44,2.85 27.9,2.79 27.46,2.44 27.09,2.16 26.73,2.08 26.39,2.44 26.14,2.71 25.49,1.91 25.41,1.68 25.35,1.5 24.94,0.75 24.87,1.37 c 0,-0.42 -0.25,-0.09 -0.55,-0.05 -0.27,0.04 -0.54,-0.03 -0.8,-0.11 -0.34,-0.1 -0.88,-0.6 -0.56,-0.97 -0.14,-0.01 -0.26,-0.08 -0.4,-0.09 z",
                        "عراق" : "m 34.35,25.15 c 1.48,-0.71 2.79,-1.41 4.11,-2.3 0.42,-0.28 0.87,-0.63 1.11,-0.99 0.46,-0.69 0.09,-1.61 0.19,-1.87 0.01,-1.08 0.31,-1.21 0.24,-1.73 -0.07,-0.58 -0.91,-1.6 -0.26,-2.09 0.37,-0.28 0.83,-0.27 1.21,-0.59 0.32,-0.26 1.19,-0.95 0.93,-1.23 -0.12,-0.13 0.12,0.01 0.29,-0.04 0.29,-0.09 0.39,-0.35 0.51,-0.58 0.12,-0.22 1.42,-0.02 1.7,0.09 0.22,0.08 0.45,0.16 0.69,0.21 0.39,0.08 0.5,-0.17 0.84,-0.23 0.85,-0.16 0.27,0.94 0.75,0.9 0.35,-0.03 0.49,-0.55 0.88,-0.54 0.49,0.02 0.47,0.84 0.69,1.12 0.1,0.13 0.24,0.11 0.32,0.28 0.1,0.21 -0.03,0.5 0.14,0.67 0.37,0.36 1.19,0.71 0.86,1.33 0.55,-0.12 0.78,0.37 1.03,0.46 0.47,0.18 0.48,-0.19 1.5,0.07 -0.09,0.37 -0.53,0.29 -0.69,0.58 -0.27,0.49 0.49,0.85 0.54,1.3 0.06,0.59 -0.67,-0.06 -0.65,0.54 0.01,0.27 -0.29,0.22 -0.36,0.48 -0.09,0.29 0.06,0.5 0.11,0.76 -0.18,-0 -0.36,-0.05 -0.51,-0.14 -0.04,0.24 -0.21,0.43 -0.02,0.63 0.21,0.22 0.37,0.31 0.25,0.67 -0.11,0.34 -0.42,0.42 -0.12,0.68 0.26,0.23 0.48,0.5 0.77,0.69 0.29,0.19 1.79,1.45 0.93,1.68 0.33,0.08 0.25,0.46 0.52,0.4 0.39,-0.09 0.62,0.16 0.93,0.33 0.58,0.32 0.95,1.05 1.75,1.11 0.38,0.03 1.08,1.25 1.42,1.54 0.51,0.44 0.2,0.9 0.07,1.5 -0.06,0.29 -0.05,1.11 0.39,1.14 0.15,0.01 0.41,-0.02 0.53,0.13 0.16,0.19 0.15,0.58 0.12,0.82 -0.08,0.52 0.2,0.68 0.8,1.1 0.3,0.21 0.23,0.87 0.66,0.98 -0.22,0.02 -1.54,-0.17 -1.57,-0.4 0.18,0.42 -0.57,0.08 -0.87,0.07 -0.43,-0.02 -0.98,0.08 -1.17,0.48 -0.42,0.87 -0.34,2.6 -1.76,2.45 l -3.58,-0.4 c -1.2,-0.17 -1.24,-0.79 -2.34,-1.46 -3.03,-2.19 -5.93,-4.8 -9.32,-6.26 -1.22,-0.52 -2.3,-0.48 -3.4,-0.72 0.69,-0.73 -0.14,-0.41 -0.35,-0.72 -0.05,-0.08 -0.09,-0.23 -0.05,-0.31 0.17,-0.19 0,-0.39 -0.11,-0.68 -0.24,-0.63 -0.47,-1.25 -0.67,-1.89",
                        "ایران" : "m 45.1,7.85 c 0.68,-0.23 0.92,0.26 0.91,-0.79 -0.01,-0.46 0.4,-0.29 0.69,-0.07 0.29,0.21 0.45,0.54 0.71,0.77 0.25,0.23 0.54,0.41 0.8,0.64 0.52,0.46 0.74,0.72 1.49,0.84 0.46,0.07 1.12,0.12 1.57,-0.01 0.25,-0.07 1.09,-0.79 1.18,-1.02 0.1,-0.26 0.47,-0.32 0.67,-0.49 0.24,-0.2 0.44,-0.44 0.7,-0.61 0.67,-0.46 1.28,0.24 1.69,0.72 -0.9,0.33 0.32,1.07 -0.18,1.19 -0.93,0.21 0.03,0.74 0.43,0.99 0.28,0.17 0.53,0.44 0.83,0.57 0.12,0.05 0.49,-0.02 0.53,0.06 0.37,0.74 0.32,1.97 1.16,2.4 0.71,0.37 1.56,0.2 2.29,0.5 0.47,0.2 0.63,0.71 1.01,1.01 0.42,0.33 1.04,0.56 1.53,0.77 0.91,0.4 2.14,0.68 3.12,0.39 1.18,-0.35 2.66,-0.91 3.91,-0.72 -0.25,0.09 -0.52,0.06 -0.78,0.1 0.18,0.13 0.88,0.39 0.98,0.03 0.09,-0.31 -0.41,-1.18 -0.51,-1.5 0.58,0.11 1.02,0.1 1.57,-0.12 0.63,-0.26 0.2,-0.49 0.48,-0.91 0.28,-0.42 0.94,-0.84 1.41,-1.02 0.69,-0.26 1.35,0.14 2.04,-0.01 -0.24,-0.38 0.28,-0.42 0.58,-0.44 0.38,-0.03 0.81,0.1 1.18,0.07 0.53,-0.05 0.53,0.01 0.79,0.48 0.25,0.45 0.93,0.44 1.39,0.52 0.51,0.09 0.86,0.59 1.4,0.63 0.6,0.05 1.07,-0.05 1.65,0.16 0.57,0.21 0.76,0.44 1.07,0.91 0.32,0.48 1.04,0.41 1.49,0.71 0.4,0.26 0.53,0.75 0.94,1 0.46,0.28 1.63,-0.25 1.99,0.12 0.3,0.32 0.36,1.2 0.42,1.54 0.07,0.39 -0.25,0.25 0.06,0.51 0.19,0.16 0.37,0.85 0.4,1.1 0.05,0.38 -0.31,0.65 -0.24,1.06 0.1,0.56 0.29,1.76 -0.56,1.85 0.08,0.11 0.37,0.34 0.34,0.48 -0.04,0.22 -0.56,0.29 -0.66,0.58 -0.18,0.52 0.13,1.75 0.78,1.79 0.83,0.06 0.08,0.7 -0.05,1.11 -0.18,0.6 0.69,1.94 0.86,2.61 0.2,0.76 0.13,1.51 0.67,2.09 0.43,0.46 1.36,0.22 1.91,0.49 0.58,0.29 0.54,1.16 0.4,1.65 -0.15,0.5 -0.62,0.91 -0.87,1.35 -0.21,0.37 -0.75,1.21 -0.96,1.36 0.27,0.27 0.49,0.47 0.62,0.59 1.23,1.07 1.65,2.64 2.64,3.17 0.3,0.16 0.6,0.26 0.91,0.41 0.29,0.14 0.64,0.39 0.97,0.41 0.46,0.03 0.61,1.58 0.63,1.98 0.07,1.4 0.33,1.02 1.14,1.02 0.39,0 0.17,1 0.14,1.4 -0.06,0.8 -2.67,0.07 -2.25,1.14 -0.25,-0.05 -0.68,0.1 -0.82,0.29 -0.45,0.62 -0.39,1.64 -0.43,2.46 -0.01,0.23 0.07,0.71 -0.34,0.57 0.19,0.63 -1.21,0.07 -1.43,-2.65e-4 -0.25,-0.08 -0.82,-0.02 -0.88,-0.36 -0.09,-0.47 -0.65,-0.19 -0.4,0.03 -0.11,0.02 -1.35,-0.02 -1.46,-0.1 -0.4,-0.31 -1.17,-0.27 -1.62,-0.13 -0.38,0.11 -0.65,-0.09 -0.94,-0.29 -0.39,-0.27 -0.71,-0.11 -1.13,-0.22 -0.33,-0.09 -0.62,0.18 -0.96,0.04 -0.31,-0.13 -0.38,-0.56 -0.73,-0.17 0.09,-0.47 -0.93,-0.33 -1.22,-0.6 -0.6,-0.55 -0.77,-1.77 -0.91,-2.52 -0.17,-0.95 -1.04,-1.47 -2,-1.4 -0.43,0.03 -0.74,0.39 -1.15,0.5 -0.34,0.1 -0.77,0.16 -0.57,0.55 0.12,0.25 -0.75,0.14 -0.81,0.15 -0.44,0.1 -0.61,0.55 -0.98,0.73 -0.63,0.31 -1.21,-0.53 -1.81,-0.53 -0.75,0 -1.17,0.14 -1.63,-0.53 -0.23,-0.34 -0.75,-0.45 -1.1,-0.64 -0.46,-0.25 -0.9,-0.52 -1.38,-0.73 0.46,-0.43 -0.66,-0.83 -0.92,-0.94 -0.24,-0.11 -0.45,-0.31 -0.7,-0.37 -0.35,-0.08 -0.83,0.05 -1.12,-0.16 -0.65,-0.48 -0.81,-0.92 -1.24,-1.59 -0.2,-0.32 -0.07,-0.75 -0.39,-1.01 -0.22,-0.17 -0.57,-0.27 -0.57,-0.61 0.4,0.04 0.34,-0.31 0.04,-0.37 -0.2,-0.04 -0.7,-0.01 -0.5,-0.35 0.26,-0.45 -0.51,-0.95 -0.75,-1.18 -0.4,-0.4 -0.7,-0.83 -0.9,-1.35 -0.35,-0.89 -1.06,0.67 -1.45,0.14 -0.26,-0.36 -0.65,-0.1 -0.82,-0.44 -0.08,-0.16 -0.59,-0.25 -0.74,-0.49 0.25,-0.02 0.51,0.08 0.76,0 -0.08,-0.33 -0.48,-0.42 -0.76,-0.26 0.06,0.07 0.13,0.15 0.2,0.22 -0.73,-0.09 0.46,1.54 -0.81,1.03 0.09,0.25 -0.13,0.32 -0.33,0.23 -0.27,-0.12 -0.29,-0.43 -0.38,-0.67 -0.2,-0.49 -0.91,-0.54 -0.99,-1.15 -0.05,-0.39 0.13,-1.16 -0.43,-1.15 -0.88,0.03 -0.61,-1.16 -0.49,-1.75 0.16,-0.78 -0.23,-0.93 -0.7,-1.48 -0.47,-0.56 -0.38,-0.88 -1.15,-1.02 -0.59,-0.11 -0.97,-0.73 -1.44,-1.04 -0.25,-0.17 -0.55,-0.39 -0.88,-0.36 -0.54,0.04 -0.22,-0.26 -0.62,-0.41 0.87,-0.26 -0.84,-1.59 -1.12,-1.82 -0.2,-0.17 -0.38,-0.37 -0.58,-0.55 -0.29,-0.26 -0.02,-0.32 0.1,-0.65 0.11,-0.3 0.05,-0.44 -0.2,-0.63 -0.25,-0.19 -0.05,-0.47 -0.01,-0.7 0.16,0.1 0.33,0.14 0.51,0.14 -0.04,-0.21 -0.15,-0.41 -0.17,-0.63 -0.04,-0.37 0.38,-0.31 0.41,-0.59 0.04,-0.41 0.06,-0.29 0.41,-0.29 0.33,0 0.29,-0.29 0.18,-0.47 -0.18,-0.31 -0.63,-0.6 -0.51,-1.02 0.1,-0.35 0.65,-0.26 0.74,-0.66 -0.24,0.07 -0.41,-0.11 -0.64,-0.08 -0.28,0.03 -0.58,0.16 -0.86,0.01 -0.41,-0.22 -0.48,-0.55 -1.03,-0.43 0.37,-0.85 -1.02,-1.09 -0.97,-1.66 0.03,-0.33 0.01,-0.45 -0.31,-0.58 -0.08,-0.03 -0.58,-1.1 -0.54,-1.24 0.12,-0.51 -0.22,-0.31 -0.48,-0.65 -0.25,-0.34 -0.13,-0.92 -0.41,-1.04 -0.15,-0.06 -0.73,-0.24 -0.71,-0.47 0.03,-0.34 0.2,-0.81 0.46,-1.06 -0.73,-0.15 -0.4,-1.1 -0.72,-1.46 -0.18,-0.2 -0.12,-0.39 -0.24,-0.62 -0.06,-0.13 -0.36,-0.67 -0.53,-0.94",
                        "سوریه" : "m 26.54,25.44 c 0.21,-0.27 0.62,-0.82 1,-0.89 -0.58,-0.53 0.25,-0.86 0.73,-0.72 -0.43,-0.51 0.21,-0.57 0.36,-1.06 0.08,-0.27 -0.26,-0.81 -0.57,-0.87 -0.36,-0.07 0.32,-0.57 -0.23,-0.42 -0.93,0.26 -1,-0.33 -1.04,-0.8 -0.04,-0.43 0.24,-1.21 -0.15,-1.52 -0.31,-0.25 -0.07,-0.92 -0.08,-1.29 -0.01,-0.28 0.52,0.16 0.62,0.21 0.01,0.04 0.13,-0.25 0.35,-0.38 0.28,-0.16 0.09,-0.53 0.14,-0.79 0.24,0.06 0.49,-0.01 0.73,-0.02 -0.19,-0.39 -0.32,-0.49 -0.37,-0.95 -0.02,-0.17 -0,-0.65 0.24,-0.71 0.18,-0.04 0.36,-0.05 0.51,0.03 0.39,0.2 0.47,0.54 0.87,0.48 0.49,-0.08 0.81,-0.13 1.28,-0.33 0.48,-0.2 0.83,-0.49 1.37,-0.41 0.4,0.06 0.63,0.33 0.97,0.49 0.38,0.18 1.13,0.1 1.55,0.07 1.06,-0.09 1.82,-0.68 2.77,-1.06 0.97,-0.38 2.03,0.15 3.02,-0.24 0.51,-0.2 1.25,-0.96 1.33,0.23 0.02,0.28 -0.67,0.84 -0.87,1.03 -0.36,0.35 -0.76,0.33 -1.17,0.56 -0.87,0.5 0.04,1.59 0.11,2.19 0.04,0.35 -0.18,0.79 -0.2,1.16 -0.04,0.55 0,1.43 -0,1.97 -0.01,1.26 -5.43,3.68 -8.18,5.53 -0.75,0.5 -1.96,1.71 -2.94,1.04 -0.35,-0.24 -0.61,-0.43 -0.98,-0.68 -0.63,-0.43 -0.92,-0.11 -1.03,-0.12 -0.02,-0.08 0.23,-1.57 -0.14,-1.73",
                        "عمان" : "m 70.75,66.35 c 3.58,-0.81 5.82,-1.65 7.44,-2.52 0.66,-1.24 -0.05,0.71 0.27,-0.67 0.26,-1.13 0.44,-2.26 0.7,-3.33 0.18,-0.74 0.6,-1.68 0.17,-2.39 -0.32,-0.51 -0.96,-0.95 -1.16,-1.51 -0.25,-0.71 1.11,-3.14 0.44,-3.53 0.3,-0.35 0.89,-0.05 1.15,-0.38 0.29,-0.37 -0.17,-0.25 -0.27,-0.43 -0.25,-0.5 -0.45,-1.58 -0.11,-2.09 0.16,-0.23 0.48,0.13 0.43,0.31 -0.16,0.58 0.44,-0.05 0.53,-0.14 0.29,-0.27 0.29,-0.23 0.47,0.16 0.3,0.64 0.7,1.24 1.18,1.77 0.76,0.83 1.83,1.13 2.91,1.34 0.51,0.1 0.94,0.3 1.45,0.35 0.69,0.08 1.07,0.9 1.46,1.36 0.32,0.37 0.54,0.82 0.85,1.17 0.33,0.37 0.51,0.39 0.94,0.56 1.02,0.4 -0.13,1.83 -0.34,2.42 -0.39,1.11 -1.6,1.69 -1.93,2.89 -0.08,0.28 -0.18,1.1 -0.64,0.96 -0.36,-0.11 -0.29,-0.78 -0.75,-0.5 -0.55,0.33 -0.52,1.5 -0.66,1.98 -0.19,0.63 0.02,1.12 0.19,1.73 0.14,0.5 0.23,0.88 -0.39,0.89 -0.99,0.03 -2.09,0.32 -2.33,1.37 -0.1,0.41 -0.17,0.87 -0.44,1.22 -0.33,0.43 -0.98,0.41 -1.5,0.45 -0.63,0.05 -0.88,0.15 -1.25,0.63 -0.36,0.47 -0.13,0.56 -0.16,1.1 -0.02,0.43 -0.47,0.74 -0.82,0.91 -0.17,0.08 -0.34,0.19 -0.51,0.05 -0.3,-0.23 -0.55,-0.17 -0.92,-0.17 -1.07,0 -2.01,1.02 -3.1,0.99 -0.7,-0.02 -0.39,-1.7 -1.14,-1.79 0.32,-0.33 -0.46,-1.48 -0.62,-1.76 -0.55,-1 -1.21,-2.34 -1.57,-3.42",
                        "مصر" : "m 0.22,34.88 c -0.48,-0.76 0.51,-1.56 0.39,-2.34 -0.13,-0.84 -0.91,-1.42 0.32,-2.42 0.03,0.61 0.75,0.39 1.13,0.28 0.69,-0.2 1.25,0.02 1.93,0.09 0.75,0.07 1.46,0.24 2.19,0.43 0.31,0.08 0.35,0.41 0.66,0.5 0.28,0.08 0.49,0.05 0.76,0.02 0.18,-0.02 0.27,0.26 0.48,0.3 0.23,0.05 0.46,0.05 0.69,0.07 0.74,0.07 1.23,0.52 1.92,0.64 0.67,0.11 1.31,-0.33 1.78,-0.73 0.25,-0.21 0.48,-0.43 0.71,-0.66 0.19,0.15 0.34,0.3 0.59,0.26 -0.14,-0.07 -0.11,-0.11 -0.3,-0.1 0.24,-0.13 0.48,-0.35 0.54,-0.62 0.42,0.24 0.81,-0.19 1.22,-0.19 -0.28,0.13 -0.55,0.28 -0.76,0.5 0.07,-0.04 1.76,-0.54 0.96,-0.6 0.6,-0.19 0.98,0.48 1.56,0.4 0.27,-0.04 0.53,-0.3 0.82,-0.2 0.27,0.09 0.4,0.48 0.64,0.62 -0.24,-0.17 -0.49,-0.53 -0.81,-0.55 0.09,0.25 -0.26,0.72 0.16,0.82 0.45,0.11 0.24,0.21 0.53,0.48 0,-0.1 0.8,-0.43 0.22,-0.7 0.62,0.14 0.82,0.7 1.55,0.64 0.23,-0.02 0.93,-0.45 0.8,0.06 0.45,-0.28 0.95,-0.12 1.43,-0.26 0.42,-0.13 0.85,-0.29 1.19,-0.58 l 2.07,5.35 c -0.52,0.65 -0.41,1.86 -0.74,2.63 -0.19,0.45 -0.19,0.73 -0.18,1.21 0,0.41 -0.52,0.8 -0.39,1.2 -0.25,-0.23 -0.59,-0.33 -0.87,-0.52 -0.35,-0.24 -0.6,-0.6 -0.84,-0.94 -0.31,-0.43 -1.21,-0.72 -1.07,-1.37 0.13,-0.66 -0.51,-1.11 -0.85,-1.58 -0.46,-0.64 -0.78,-1.38 -0.97,-2.15 -0.31,0.32 -0.63,1.03 -0.31,1.4 0.55,0.63 0.49,1.41 0.95,2.06 0.4,0.57 0.8,1.26 1.3,1.74 0.22,0.21 0.47,0.4 0.67,0.63 0.1,0.12 0.54,0.82 0.02,0.44 0.42,0.32 0.07,0.73 0.34,1 0.36,0.36 0.55,0.73 0.74,1.18 0.09,0.22 0.24,0.41 0.38,0.61 0.1,0.15 -0.1,0.35 -0.11,0.49 -0.01,0.2 0.32,0.49 0.41,0.66 0.21,0.39 0.43,0.77 0.64,1.16 0.69,1.28 1.38,2.55 2.03,3.85 0.25,0.51 0.63,0.88 0.95,1.33 0.3,0.43 0.82,0.56 1.09,0.99 -0.26,0.01 -0.52,-0.03 -0.76,-0.14 -0.17,0.7 -0.09,1.76 0.27,2.17 0.35,0.39 -0.45,1.18 -0.94,1.2 -0.24,0.01 -0.33,-0.16 -0.57,0.11 -0.19,0.21 -0.29,0.57 -0.38,0.84 -0.1,0.31 -0.25,0.58 -0.6,0.66 -0.28,0.06 -0.79,0.01 -0.94,0.33 -0.27,0.58 -0.11,1.26 -0.94,1.19 -0.97,-0.08 -1.47,-0.85 -1.98,-0.83 -1.69,0.07 -2.66,0.22 -3.98,10e-4 0.04,-0.13 0.19,-0.41 0.1,-0.54 -0.24,-0.34 -0.42,0.28 -0.5,0.39 -0.32,0.45 -1.9,0.18 -2.41,0.18 L 1.47,57.95 0.99,39.88 C 0.94,39.03 0.96,38.15 0.84,37.31 0.74,36.59 0.55,35.52 0.22,34.88",
                        "عربستان سعودی" : "m 47.57,74.11 c 0.03,-0.3 -0.16,-1.02 -0.43,-1.19 -0.14,-0.09 -0.83,-1.5 -0.79,-0.82 -0.06,-1.22 -0.93,-1.53 -1.61,-2.36 -0.26,-0.31 -0.63,-0.76 -0.75,-1.15 -0.16,-0.49 -0.44,-0.63 -0.7,-1.04 -0.15,-0.24 -0.02,-0.44 -0.2,-0.68 -0.12,-0.17 -0.33,-0.72 -0.41,-0.94 -0.08,-0.21 -0.12,-0.42 -0.22,-0.62 -0.09,-0.18 -0.28,-0.21 -0.37,-0.37 -0.09,-0.15 -0,-0.36 -0.12,-0.5 -0.12,-0.14 -0.32,-0.16 -0.45,-0.28 -0.33,-0.3 -0.72,-0.61 -1.01,-0.95 -0.36,-0.41 -0.77,-0.24 -1.17,-0.53 -0.67,-0.48 -1.11,-1.38 -1.53,-2.06 -0.24,-0.4 -0.17,-0.63 -0.19,-1.05 -0.02,-0.46 -0.36,-0.83 -0.39,-1.3 -0.05,-0.61 0.21,-1.21 0.09,-1.81 -0.06,-0.27 -0.21,-0.51 -0.36,-0.74 -0.08,-0.12 -0.56,-0.73 -0.02,-0.31 -0.12,-0.3 -0.39,-0.31 -0.46,-0.64 -0.06,-0.3 -0.21,-0.62 -0.33,-0.91 -0.33,-0.78 -0.97,-1.31 -1.57,-1.87 -0.44,-0.41 -0.87,-0.47 -1.41,-0.62 -0.23,-0.06 -0.34,-0.49 -0.4,-0.67 -0.14,-0.39 -0.42,-0.66 -0.67,-0.98 0.86,-0.31 -0.34,-1.69 -0.62,-2.03 -0.19,-0.23 -0.72,-0.64 -0.7,-0.93 0.04,-0.51 -0.63,-0.81 -0.86,-1.27 -0.69,-1.4 -1.77,-2.56 -2.53,-3.93 -0.23,-0.42 -0.49,-1.06 -1,-1.2 -0.23,-0.06 -1.14,-0.21 -1.16,0.21 -0.31,-0.27 0.19,-0.99 0.27,-1.28 0.18,-0.6 0.04,-1.23 0.14,-1.84 0.13,-0.77 0.01,-0.29 0.12,-0.75 0.59,0.17 2.2,0.6 2.78,0.47 1.16,-0.25 1.14,-1.9 2.23,-2.07 0.41,-0.06 1.41,0.04 1.37,-0.5 -0.1,-1.23 0.45,-0.86 1.21,-1.12 -0.99,-0.93 -1.94,-1.91 -2.85,-2.92 1.77,-0.36 2.94,-0.75 5.02,-1.84 0.88,0.17 2.45,0.26 3.42,0.7 3.25,1.48 5.92,3.73 8.74,5.84 0.6,0.45 1.18,0.89 1.74,1.38 0.63,0.56 1.08,0.53 1.91,0.61 0.96,0.09 1.98,0.23 2.95,0.31 0.35,0.03 0.53,-0.14 0.91,-0.06 0.52,0.11 1.06,0.17 1.59,0.22 0.56,0.05 0.6,0.69 0.78,1.09 0.26,0.6 1.16,0.22 1.66,0.27 0.52,0.05 0.59,0.32 0.76,0.74 0.19,0.46 1.11,1.04 0.96,1.55 -0.05,-0.08 -0.11,-0.15 -0.17,-0.22 -0.16,0.37 0.22,0.32 0.17,0.65 0.01,0.01 1.58,0.15 0.98,0.6 0.23,0.07 0.72,1.23 0.95,0.58 -0.16,0.58 1.26,1.23 1.59,1.58 -0.17,-0.05 -0.31,-0.16 -0.39,-0.31 0.01,0.64 0.4,0.65 0.54,1.16 0.08,0.3 0.05,0.93 -0.4,0.54 0.04,0.34 -0.07,0.41 0.24,0.47 0.05,0.01 0.46,0.89 0.49,0.99 -0.09,-0.08 -0.18,-0.16 -0.27,-0.24 0.27,0.39 0.75,0.61 0.97,1.04 0.22,0.44 0.28,0.84 0.54,1.26 0.2,0.33 0.49,0.89 0.91,0.99 0.19,0.05 0.88,-0.13 0.78,0.24 0.07,-0.19 0.24,-0.26 0.42,-0.14 -0.23,0.28 -0.44,1.04 0.34,0.84 -0.05,0.01 0.4,0.88 0.44,0.94 0.9,1.01 2.12,2.78 2.6,2.97 2.98,0.33 4.36,0.49 5.98,0.84 0.21,-0.05 0.4,-0.17 0.46,-0.31 0.36,0.82 1.18,1.25 1.32,1.78 0.12,0.48 0.09,0.8 -0.04,1.3 -0.43,1.66 -0.67,4.64 -1.29,4.97 -4.25,2.25 -9.57,3.03 -14.61,3.85 -0.65,0.23 -1.28,0.52 -1.88,0.86 -0.9,0.51 -1.77,2.04 -2.06,2.96 -0.13,0.42 -0.64,0.89 -1.12,0.89 -0.5,0 -0.59,-0.79 -0.99,-0.92 -0.46,-0.15 -0.8,0.08 -1.19,0.03 -0.61,-0.07 -1.43,0.02 -1.99,-0.26 -0.66,-0.33 -1.15,-0.18 -1.89,-0.18 -0.64,10e-4 -1.32,0.39 -1.96,0.38 -0.79,-0.01 -0.91,-0.6 -1.32,-0.5 -0.55,0.14 -0.7,0.86 -0.73,1.31 -0.03,0.45 0.54,0.7 0.06,1.03 -0.09,0.06 -0.19,0.69 -0.88,0.92 -0,-0.06 0.04,-0.08 0.03,-0.13",
                        "اسراییل" : "m 23.65,31.39 c 0.12,-0.16 0.76,-0.92 0.47,-1.1 0.51,-0.83 0.63,-1.79 0.81,-2.71 0.06,-0.28 0.06,-0.75 0.3,-0.96 0.18,-0.15 -0.09,-0.48 0.07,-0.65 0.15,-0.16 0.5,0 0.67,0.02 0.4,0.05 0.35,-0.36 0.47,-0.6 0.59,0.03 0.15,2.23 0.2,2.87 -0.07,-0.26 -0.49,-0.6 -0.8,-0.68 -0.38,-0.1 -0.49,0.37 -0.57,0.65 -0.08,0.32 -0.26,1.46 0.21,1.4 0.99,-0.13 -0.42,0.53 -0.23,1.23 0.11,0.39 1.13,-0.36 1.34,-0.36 -0.05,0.35 -0.03,0.57 -0.02,1.13 0.01,0.5 -0.19,1.15 -0.34,1.58 -0.29,0.85 -0.08,2.31 -0.67,3.15 l -1.91,-4.97",
                        "لبنان" : "m 25.29,25.96 c 0.54,-0.62 0.52,-1.73 0.98,-2.43 0.23,-0.34 -0.04,-0.81 0.22,-1.14 0.2,-0.26 0.76,-0.54 0.58,-0.94 0.21,0.04 0.53,0.13 0.73,0.01 0.46,-0.27 0.14,0.24 0.2,0.4 -0.01,-0.02 0.3,0.09 0.34,0.13 0.23,0.22 0.1,0.17 0.28,0.49 0.38,0.67 -0.82,0.78 -0.35,1.35 -0.49,-0.14 -1.31,0.19 -0.73,0.72 -0.22,0.05 -0.95,0.75 -0.98,0.96 -0.05,-0.03 -0.09,-0.07 -0.12,-0.12 -0.08,0.16 -0.09,0.34 -0.17,0.5 -0.18,0.34 -0.71,-0.13 -0.98,0.08",
                        "کویت" : "m 54.77,37.47 c 1.09,-0.39 0.58,-2.56 1.72,-2.76 0.44,-0.08 1.07,-0.12 1.64,0.35 0.15,0.12 0.53,0.9 0.38,1.09 -0.32,-0.45 -0.78,0.31 -0.96,0.53 0.5,-0.06 1.05,0.12 1.17,0.65 0.15,0.64 0.65,1.21 0.87,1.86 -0.42,-0.24 -1.47,0.16 -1.88,-0.12 -0.32,-0.22 -0.36,-0.7 -0.49,-1.03 -0.17,-0.44 -1.8,-0.32 -2.46,-0.56",
                        "قطر" : "m 66.32,48.5 c -0.01,-0.13 -0.21,-0.93 0.17,-0.55 -0.02,-0.13 -0.11,-0.85 0.13,-0.24 0.02,-0.61 0.24,-2.2 1.09,-1.32 0.21,0.22 0.62,0.38 0.62,0.72 0,0.24 -0.12,0.4 -0.18,0.62 -0.05,0.19 0.07,0.44 0.09,0.63 0.02,0.19 0.23,0.19 0.28,0.36 0.09,0.27 0.02,0.51 -0.09,0.76 -0.19,0.43 -0.13,0.75 -0.61,0.89 -0.4,0.12 -0.76,0.43 -1.03,-0.15 -0.24,-0.53 -0.35,-1.16 -0.47,-1.72",
                        "قبرس" : "m 17.97,20.46 c -0.03,-0.09 -0.07,-0.18 -0.1,-0.26 0.33,0.32 0.83,-0.29 1.21,-0.27 0.59,0.04 0.15,-0.54 0.69,-0.53 0.59,0.01 1.11,0.12 1.69,-0.04 0.66,-0.17 1.25,-0.85 1.94,-0.85 -0.44,0.27 -0.83,0.9 -1.32,1.05 -0.53,0.16 0,0.66 0.21,0.89 -0.23,0.03 -0.74,-0.02 -0.92,0.14 -0.19,0.17 -0.26,0.41 -0.53,0.5 -0.23,0.08 -1.15,0.17 -1.01,0.58 -0.77,-0.38 -1.52,-0.27 -1.88,-1.22",
                        "غزه" : "m 23.5,31.06 c 0.24,-0.23 0.46,-0.48 0.61,-0.77 0.29,0.18 -0.33,0.96 -0.47,1.1 -0.06,-0.1 -0.11,-0.22 -0.15,-0.33",
                        "فلستین" : "m 25.17,28.56 c 0.12,-0.29 0.17,-1.09 0.67,-0.99 0.17,0.03 0.68,0.32 0.74,0.49 0.18,0.48 0.14,1.15 0.12,1.67 -0.01,0.36 -0.02,0.74 -0.21,0.83 l -0.71,0.33 c -0.34,0.16 -0.68,0.17 -0.53,-0.35 0.04,-0.14 0.54,-0.86 0.61,-0.84 -0.15,-0.05 -0.53,0.09 -0.62,-0.16 -0.16,-0.45 0,-0.79 -0.06,-0.97",
                        "بحرین" : "m 65.34,45.93 c 0.08,0.16 0.11,0.33 0.1,0.5 -0.05,0.23 0.24,0.4 0.29,0.6 0.1,-0.25 0.11,-1.63 -0.39,-1.1"
                    }
                }
            }
        }
    );

    return Mapael;

}));
