/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 220.0, "minX": 0.0, "maxY": 34595.0, "series": [{"data": [[0.0, 220.0], [0.1, 220.0], [0.2, 220.0], [0.3, 220.0], [0.4, 220.0], [0.5, 220.0], [0.6, 220.0], [0.7, 220.0], [0.8, 220.0], [0.9, 220.0], [1.0, 318.0], [1.1, 318.0], [1.2, 318.0], [1.3, 318.0], [1.4, 318.0], [1.5, 318.0], [1.6, 318.0], [1.7, 318.0], [1.8, 318.0], [1.9, 318.0], [2.0, 352.0], [2.1, 352.0], [2.2, 352.0], [2.3, 352.0], [2.4, 352.0], [2.5, 352.0], [2.6, 352.0], [2.7, 352.0], [2.8, 352.0], [2.9, 352.0], [3.0, 502.0], [3.1, 502.0], [3.2, 502.0], [3.3, 502.0], [3.4, 502.0], [3.5, 502.0], [3.6, 502.0], [3.7, 502.0], [3.8, 502.0], [3.9, 502.0], [4.0, 639.0], [4.1, 639.0], [4.2, 639.0], [4.3, 639.0], [4.4, 639.0], [4.5, 639.0], [4.6, 639.0], [4.7, 639.0], [4.8, 639.0], [4.9, 639.0], [5.0, 771.0], [5.1, 771.0], [5.2, 771.0], [5.3, 771.0], [5.4, 771.0], [5.5, 771.0], [5.6, 771.0], [5.7, 771.0], [5.8, 771.0], [5.9, 771.0], [6.0, 856.0], [6.1, 856.0], [6.2, 856.0], [6.3, 856.0], [6.4, 856.0], [6.5, 856.0], [6.6, 856.0], [6.7, 856.0], [6.8, 856.0], [6.9, 856.0], [7.0, 943.0], [7.1, 943.0], [7.2, 943.0], [7.3, 943.0], [7.4, 943.0], [7.5, 943.0], [7.6, 943.0], [7.7, 943.0], [7.8, 943.0], [7.9, 943.0], [8.0, 1060.0], [8.1, 1060.0], [8.2, 1060.0], [8.3, 1060.0], [8.4, 1060.0], [8.5, 1060.0], [8.6, 1060.0], [8.7, 1060.0], [8.8, 1060.0], [8.9, 1060.0], [9.0, 1067.0], [9.1, 1067.0], [9.2, 1067.0], [9.3, 1067.0], [9.4, 1067.0], [9.5, 1067.0], [9.6, 1067.0], [9.7, 1067.0], [9.8, 1067.0], [9.9, 1067.0], [10.0, 1225.0], [10.1, 1225.0], [10.2, 1225.0], [10.3, 1225.0], [10.4, 1225.0], [10.5, 1225.0], [10.6, 1225.0], [10.7, 1225.0], [10.8, 1225.0], [10.9, 1225.0], [11.0, 1227.0], [11.1, 1227.0], [11.2, 1227.0], [11.3, 1227.0], [11.4, 1227.0], [11.5, 1227.0], [11.6, 1227.0], [11.7, 1227.0], [11.8, 1227.0], [11.9, 1227.0], [12.0, 1320.0], [12.1, 1320.0], [12.2, 1320.0], [12.3, 1320.0], [12.4, 1320.0], [12.5, 1320.0], [12.6, 1320.0], [12.7, 1320.0], [12.8, 1320.0], [12.9, 1320.0], [13.0, 1442.0], [13.1, 1442.0], [13.2, 1442.0], [13.3, 1442.0], [13.4, 1442.0], [13.5, 1442.0], [13.6, 1442.0], [13.7, 1442.0], [13.8, 1442.0], [13.9, 1442.0], [14.0, 1545.0], [14.1, 1545.0], [14.2, 1545.0], [14.3, 1545.0], [14.4, 1545.0], [14.5, 1545.0], [14.6, 1545.0], [14.7, 1545.0], [14.8, 1545.0], [14.9, 1545.0], [15.0, 1611.0], [15.1, 1611.0], [15.2, 1611.0], [15.3, 1611.0], [15.4, 1611.0], [15.5, 1611.0], [15.6, 1611.0], [15.7, 1611.0], [15.8, 1611.0], [15.9, 1611.0], [16.0, 1674.0], [16.1, 1674.0], [16.2, 1674.0], [16.3, 1674.0], [16.4, 1674.0], [16.5, 1674.0], [16.6, 1674.0], [16.7, 1674.0], [16.8, 1674.0], [16.9, 1674.0], [17.0, 1678.0], [17.1, 1678.0], [17.2, 1678.0], [17.3, 1678.0], [17.4, 1678.0], [17.5, 1678.0], [17.6, 1678.0], [17.7, 1678.0], [17.8, 1678.0], [17.9, 1678.0], [18.0, 1683.0], [18.1, 1683.0], [18.2, 1683.0], [18.3, 1683.0], [18.4, 1683.0], [18.5, 1683.0], [18.6, 1683.0], [18.7, 1683.0], [18.8, 1683.0], [18.9, 1683.0], [19.0, 1700.0], [19.1, 1700.0], [19.2, 1700.0], [19.3, 1700.0], [19.4, 1700.0], [19.5, 1700.0], [19.6, 1700.0], [19.7, 1700.0], [19.8, 1700.0], [19.9, 1700.0], [20.0, 1719.0], [20.1, 1719.0], [20.2, 1719.0], [20.3, 1719.0], [20.4, 1719.0], [20.5, 1719.0], [20.6, 1719.0], [20.7, 1719.0], [20.8, 1719.0], [20.9, 1719.0], [21.0, 1726.0], [21.1, 1726.0], [21.2, 1726.0], [21.3, 1726.0], [21.4, 1726.0], [21.5, 1726.0], [21.6, 1726.0], [21.7, 1726.0], [21.8, 1726.0], [21.9, 1726.0], [22.0, 1728.0], [22.1, 1728.0], [22.2, 1728.0], [22.3, 1728.0], [22.4, 1728.0], [22.5, 1728.0], [22.6, 1728.0], [22.7, 1728.0], [22.8, 1728.0], [22.9, 1728.0], [23.0, 1748.0], [23.1, 1748.0], [23.2, 1748.0], [23.3, 1748.0], [23.4, 1748.0], [23.5, 1748.0], [23.6, 1748.0], [23.7, 1748.0], [23.8, 1748.0], [23.9, 1748.0], [24.0, 1772.0], [24.1, 1772.0], [24.2, 1772.0], [24.3, 1772.0], [24.4, 1772.0], [24.5, 1772.0], [24.6, 1772.0], [24.7, 1772.0], [24.8, 1772.0], [24.9, 1772.0], [25.0, 1774.0], [25.1, 1774.0], [25.2, 1774.0], [25.3, 1774.0], [25.4, 1774.0], [25.5, 1774.0], [25.6, 1774.0], [25.7, 1774.0], [25.8, 1774.0], [25.9, 1774.0], [26.0, 1775.0], [26.1, 1775.0], [26.2, 1775.0], [26.3, 1775.0], [26.4, 1775.0], [26.5, 1775.0], [26.6, 1775.0], [26.7, 1775.0], [26.8, 1775.0], [26.9, 1775.0], [27.0, 1776.0], [27.1, 1776.0], [27.2, 1776.0], [27.3, 1776.0], [27.4, 1776.0], [27.5, 1776.0], [27.6, 1776.0], [27.7, 1776.0], [27.8, 1776.0], [27.9, 1776.0], [28.0, 1782.0], [28.1, 1782.0], [28.2, 1782.0], [28.3, 1782.0], [28.4, 1782.0], [28.5, 1782.0], [28.6, 1782.0], [28.7, 1782.0], [28.8, 1782.0], [28.9, 1782.0], [29.0, 1808.0], [29.1, 1808.0], [29.2, 1808.0], [29.3, 1808.0], [29.4, 1808.0], [29.5, 1808.0], [29.6, 1808.0], [29.7, 1808.0], [29.8, 1808.0], [29.9, 1808.0], [30.0, 1821.0], [30.1, 1821.0], [30.2, 1821.0], [30.3, 1821.0], [30.4, 1821.0], [30.5, 1821.0], [30.6, 1821.0], [30.7, 1821.0], [30.8, 1821.0], [30.9, 1821.0], [31.0, 1826.0], [31.1, 1826.0], [31.2, 1826.0], [31.3, 1826.0], [31.4, 1826.0], [31.5, 1826.0], [31.6, 1826.0], [31.7, 1826.0], [31.8, 1826.0], [31.9, 1826.0], [32.0, 1835.0], [32.1, 1835.0], [32.2, 1835.0], [32.3, 1835.0], [32.4, 1835.0], [32.5, 1835.0], [32.6, 1835.0], [32.7, 1835.0], [32.8, 1835.0], [32.9, 1835.0], [33.0, 1841.0], [33.1, 1841.0], [33.2, 1841.0], [33.3, 1841.0], [33.4, 1841.0], [33.5, 1841.0], [33.6, 1841.0], [33.7, 1841.0], [33.8, 1841.0], [33.9, 1841.0], [34.0, 1854.0], [34.1, 1854.0], [34.2, 1854.0], [34.3, 1854.0], [34.4, 1854.0], [34.5, 1854.0], [34.6, 1854.0], [34.7, 1854.0], [34.8, 1854.0], [34.9, 1854.0], [35.0, 1879.0], [35.1, 1879.0], [35.2, 1879.0], [35.3, 1879.0], [35.4, 1879.0], [35.5, 1879.0], [35.6, 1879.0], [35.7, 1879.0], [35.8, 1879.0], [35.9, 1879.0], [36.0, 1880.0], [36.1, 1880.0], [36.2, 1880.0], [36.3, 1880.0], [36.4, 1880.0], [36.5, 1880.0], [36.6, 1880.0], [36.7, 1880.0], [36.8, 1880.0], [36.9, 1880.0], [37.0, 1891.0], [37.1, 1891.0], [37.2, 1891.0], [37.3, 1891.0], [37.4, 1891.0], [37.5, 1891.0], [37.6, 1891.0], [37.7, 1891.0], [37.8, 1891.0], [37.9, 1891.0], [38.0, 1898.0], [38.1, 1898.0], [38.2, 1898.0], [38.3, 1898.0], [38.4, 1898.0], [38.5, 1898.0], [38.6, 1898.0], [38.7, 1898.0], [38.8, 1898.0], [38.9, 1898.0], [39.0, 1900.0], [39.1, 1900.0], [39.2, 1900.0], [39.3, 1900.0], [39.4, 1900.0], [39.5, 1900.0], [39.6, 1900.0], [39.7, 1900.0], [39.8, 1900.0], [39.9, 1900.0], [40.0, 1904.0], [40.1, 1904.0], [40.2, 1904.0], [40.3, 1904.0], [40.4, 1904.0], [40.5, 1904.0], [40.6, 1904.0], [40.7, 1904.0], [40.8, 1904.0], [40.9, 1904.0], [41.0, 1908.0], [41.1, 1908.0], [41.2, 1908.0], [41.3, 1908.0], [41.4, 1908.0], [41.5, 1908.0], [41.6, 1908.0], [41.7, 1908.0], [41.8, 1908.0], [41.9, 1908.0], [42.0, 1915.0], [42.1, 1915.0], [42.2, 1915.0], [42.3, 1915.0], [42.4, 1915.0], [42.5, 1915.0], [42.6, 1915.0], [42.7, 1915.0], [42.8, 1915.0], [42.9, 1915.0], [43.0, 1930.0], [43.1, 1930.0], [43.2, 1930.0], [43.3, 1930.0], [43.4, 1930.0], [43.5, 1930.0], [43.6, 1930.0], [43.7, 1930.0], [43.8, 1930.0], [43.9, 1930.0], [44.0, 1941.0], [44.1, 1941.0], [44.2, 1941.0], [44.3, 1941.0], [44.4, 1941.0], [44.5, 1941.0], [44.6, 1941.0], [44.7, 1941.0], [44.8, 1941.0], [44.9, 1941.0], [45.0, 1949.0], [45.1, 1949.0], [45.2, 1949.0], [45.3, 1949.0], [45.4, 1949.0], [45.5, 1949.0], [45.6, 1949.0], [45.7, 1949.0], [45.8, 1949.0], [45.9, 1949.0], [46.0, 1961.0], [46.1, 1961.0], [46.2, 1961.0], [46.3, 1961.0], [46.4, 1961.0], [46.5, 1961.0], [46.6, 1961.0], [46.7, 1961.0], [46.8, 1961.0], [46.9, 1961.0], [47.0, 1985.0], [47.1, 1985.0], [47.2, 1985.0], [47.3, 1985.0], [47.4, 1985.0], [47.5, 1985.0], [47.6, 1985.0], [47.7, 1985.0], [47.8, 1985.0], [47.9, 1985.0], [48.0, 1991.0], [48.1, 1991.0], [48.2, 1991.0], [48.3, 1991.0], [48.4, 1991.0], [48.5, 1991.0], [48.6, 1991.0], [48.7, 1991.0], [48.8, 1991.0], [48.9, 1991.0], [49.0, 2001.0], [49.1, 2001.0], [49.2, 2001.0], [49.3, 2001.0], [49.4, 2001.0], [49.5, 2001.0], [49.6, 2001.0], [49.7, 2001.0], [49.8, 2001.0], [49.9, 2001.0], [50.0, 2024.0], [50.1, 2024.0], [50.2, 2024.0], [50.3, 2024.0], [50.4, 2024.0], [50.5, 2024.0], [50.6, 2024.0], [50.7, 2024.0], [50.8, 2024.0], [50.9, 2024.0], [51.0, 2040.0], [51.1, 2040.0], [51.2, 2040.0], [51.3, 2040.0], [51.4, 2040.0], [51.5, 2040.0], [51.6, 2040.0], [51.7, 2040.0], [51.8, 2040.0], [51.9, 2040.0], [52.0, 2045.0], [52.1, 2045.0], [52.2, 2045.0], [52.3, 2045.0], [52.4, 2045.0], [52.5, 2045.0], [52.6, 2045.0], [52.7, 2045.0], [52.8, 2045.0], [52.9, 2045.0], [53.0, 2058.0], [53.1, 2058.0], [53.2, 2058.0], [53.3, 2058.0], [53.4, 2058.0], [53.5, 2058.0], [53.6, 2058.0], [53.7, 2058.0], [53.8, 2058.0], [53.9, 2058.0], [54.0, 2063.0], [54.1, 2063.0], [54.2, 2063.0], [54.3, 2063.0], [54.4, 2063.0], [54.5, 2063.0], [54.6, 2063.0], [54.7, 2063.0], [54.8, 2063.0], [54.9, 2063.0], [55.0, 2071.0], [55.1, 2071.0], [55.2, 2071.0], [55.3, 2071.0], [55.4, 2071.0], [55.5, 2071.0], [55.6, 2071.0], [55.7, 2071.0], [55.8, 2071.0], [55.9, 2071.0], [56.0, 2073.0], [56.1, 2073.0], [56.2, 2073.0], [56.3, 2073.0], [56.4, 2073.0], [56.5, 2073.0], [56.6, 2073.0], [56.7, 2073.0], [56.8, 2073.0], [56.9, 2073.0], [57.0, 2088.0], [57.1, 2088.0], [57.2, 2088.0], [57.3, 2088.0], [57.4, 2088.0], [57.5, 2088.0], [57.6, 2088.0], [57.7, 2088.0], [57.8, 2088.0], [57.9, 2088.0], [58.0, 2092.0], [58.1, 2092.0], [58.2, 2092.0], [58.3, 2092.0], [58.4, 2092.0], [58.5, 2092.0], [58.6, 2092.0], [58.7, 2092.0], [58.8, 2092.0], [58.9, 2092.0], [59.0, 2098.0], [59.1, 2098.0], [59.2, 2098.0], [59.3, 2098.0], [59.4, 2098.0], [59.5, 2098.0], [59.6, 2098.0], [59.7, 2098.0], [59.8, 2098.0], [59.9, 2098.0], [60.0, 2107.0], [60.1, 2107.0], [60.2, 2107.0], [60.3, 2107.0], [60.4, 2107.0], [60.5, 2107.0], [60.6, 2107.0], [60.7, 2107.0], [60.8, 2107.0], [60.9, 2107.0], [61.0, 2108.0], [61.1, 2108.0], [61.2, 2108.0], [61.3, 2108.0], [61.4, 2108.0], [61.5, 2108.0], [61.6, 2108.0], [61.7, 2108.0], [61.8, 2108.0], [61.9, 2108.0], [62.0, 2110.0], [62.1, 2110.0], [62.2, 2110.0], [62.3, 2110.0], [62.4, 2110.0], [62.5, 2110.0], [62.6, 2110.0], [62.7, 2110.0], [62.8, 2110.0], [62.9, 2110.0], [63.0, 2115.0], [63.1, 2115.0], [63.2, 2115.0], [63.3, 2115.0], [63.4, 2115.0], [63.5, 2115.0], [63.6, 2115.0], [63.7, 2115.0], [63.8, 2115.0], [63.9, 2115.0], [64.0, 2119.0], [64.1, 2119.0], [64.2, 2119.0], [64.3, 2119.0], [64.4, 2119.0], [64.5, 2119.0], [64.6, 2119.0], [64.7, 2119.0], [64.8, 2119.0], [64.9, 2119.0], [65.0, 2133.0], [65.1, 2133.0], [65.2, 2133.0], [65.3, 2133.0], [65.4, 2133.0], [65.5, 2133.0], [65.6, 2133.0], [65.7, 2133.0], [65.8, 2133.0], [65.9, 2133.0], [66.0, 31529.0], [66.1, 31529.0], [66.2, 31529.0], [66.3, 31529.0], [66.4, 31529.0], [66.5, 31529.0], [66.6, 31529.0], [66.7, 31529.0], [66.8, 31529.0], [66.9, 31529.0], [67.0, 31541.0], [67.1, 31541.0], [67.2, 31541.0], [67.3, 31541.0], [67.4, 31541.0], [67.5, 31541.0], [67.6, 31541.0], [67.7, 31541.0], [67.8, 31541.0], [67.9, 31541.0], [68.0, 31542.0], [68.1, 31542.0], [68.2, 31542.0], [68.3, 31542.0], [68.4, 31542.0], [68.5, 31542.0], [68.6, 31542.0], [68.7, 31542.0], [68.8, 31542.0], [68.9, 31542.0], [69.0, 31558.0], [69.1, 31558.0], [69.2, 31558.0], [69.3, 31558.0], [69.4, 31558.0], [69.5, 31558.0], [69.6, 31558.0], [69.7, 31558.0], [69.8, 31558.0], [69.9, 31558.0], [70.0, 31573.0], [70.1, 31573.0], [70.2, 31573.0], [70.3, 31573.0], [70.4, 31573.0], [70.5, 31573.0], [70.6, 31573.0], [70.7, 31573.0], [70.8, 31573.0], [70.9, 31573.0], [71.0, 31585.0], [71.1, 31585.0], [71.2, 31585.0], [71.3, 31585.0], [71.4, 31585.0], [71.5, 31585.0], [71.6, 31585.0], [71.7, 31585.0], [71.8, 31585.0], [71.9, 31585.0], [72.0, 31589.0], [72.1, 31589.0], [72.2, 31589.0], [72.3, 31589.0], [72.4, 31589.0], [72.5, 31589.0], [72.6, 31589.0], [72.7, 31589.0], [72.8, 31589.0], [72.9, 31589.0], [73.0, 31590.0], [73.1, 31590.0], [73.2, 31590.0], [73.3, 31590.0], [73.4, 31590.0], [73.5, 31590.0], [73.6, 31590.0], [73.7, 31590.0], [73.8, 31590.0], [73.9, 31590.0], [74.0, 31591.0], [74.1, 31591.0], [74.2, 31591.0], [74.3, 31591.0], [74.4, 31591.0], [74.5, 31591.0], [74.6, 31591.0], [74.7, 31591.0], [74.8, 31591.0], [74.9, 31591.0], [75.0, 31592.0], [75.1, 31592.0], [75.2, 31592.0], [75.3, 31592.0], [75.4, 31592.0], [75.5, 31592.0], [75.6, 31592.0], [75.7, 31592.0], [75.8, 31592.0], [75.9, 31592.0], [76.0, 31599.0], [76.1, 31599.0], [76.2, 31599.0], [76.3, 31599.0], [76.4, 31599.0], [76.5, 31599.0], [76.6, 31599.0], [76.7, 31599.0], [76.8, 31599.0], [76.9, 31599.0], [77.0, 31607.0], [77.1, 31607.0], [77.2, 31607.0], [77.3, 31607.0], [77.4, 31607.0], [77.5, 31607.0], [77.6, 31607.0], [77.7, 31607.0], [77.8, 31607.0], [77.9, 31607.0], [78.0, 31622.0], [78.1, 31622.0], [78.2, 31622.0], [78.3, 31622.0], [78.4, 31622.0], [78.5, 31622.0], [78.6, 31622.0], [78.7, 31622.0], [78.8, 31622.0], [78.9, 31622.0], [79.0, 31634.0], [79.1, 31634.0], [79.2, 31634.0], [79.3, 31634.0], [79.4, 31634.0], [79.5, 31634.0], [79.6, 31634.0], [79.7, 31634.0], [79.8, 31634.0], [79.9, 31634.0], [80.0, 31648.0], [80.1, 31648.0], [80.2, 31648.0], [80.3, 31648.0], [80.4, 31648.0], [80.5, 31648.0], [80.6, 31648.0], [80.7, 31648.0], [80.8, 31648.0], [80.9, 31648.0], [81.0, 31663.0], [81.1, 31663.0], [81.2, 31663.0], [81.3, 31663.0], [81.4, 31663.0], [81.5, 31663.0], [81.6, 31663.0], [81.7, 31663.0], [81.8, 31663.0], [81.9, 31663.0], [82.0, 31672.0], [82.1, 31672.0], [82.2, 31672.0], [82.3, 31672.0], [82.4, 31672.0], [82.5, 31672.0], [82.6, 31672.0], [82.7, 31672.0], [82.8, 31672.0], [82.9, 31672.0], [83.0, 31676.0], [83.1, 31676.0], [83.2, 31676.0], [83.3, 31676.0], [83.4, 31676.0], [83.5, 31676.0], [83.6, 31676.0], [83.7, 31676.0], [83.8, 31676.0], [83.9, 31676.0], [84.0, 31694.0], [84.1, 31694.0], [84.2, 31694.0], [84.3, 31694.0], [84.4, 31694.0], [84.5, 31694.0], [84.6, 31694.0], [84.7, 31694.0], [84.8, 31694.0], [84.9, 31694.0], [85.0, 31723.0], [85.1, 31723.0], [85.2, 31723.0], [85.3, 31723.0], [85.4, 31723.0], [85.5, 31723.0], [85.6, 31723.0], [85.7, 31723.0], [85.8, 31723.0], [85.9, 31723.0], [86.0, 31850.0], [86.1, 31850.0], [86.2, 31850.0], [86.3, 31850.0], [86.4, 31850.0], [86.5, 31850.0], [86.6, 31850.0], [86.7, 31850.0], [86.8, 31850.0], [86.9, 31850.0], [87.0, 31892.0], [87.1, 31892.0], [87.2, 31892.0], [87.3, 31892.0], [87.4, 31892.0], [87.5, 31892.0], [87.6, 31892.0], [87.7, 31892.0], [87.8, 31892.0], [87.9, 31892.0], [88.0, 31943.0], [88.1, 31943.0], [88.2, 31943.0], [88.3, 31943.0], [88.4, 31943.0], [88.5, 31943.0], [88.6, 31943.0], [88.7, 31943.0], [88.8, 31943.0], [88.9, 31943.0], [89.0, 31965.0], [89.1, 31965.0], [89.2, 31965.0], [89.3, 31965.0], [89.4, 31965.0], [89.5, 31965.0], [89.6, 31965.0], [89.7, 31965.0], [89.8, 31965.0], [89.9, 31965.0], [90.0, 32004.0], [90.1, 32004.0], [90.2, 32004.0], [90.3, 32004.0], [90.4, 32004.0], [90.5, 32004.0], [90.6, 32004.0], [90.7, 32004.0], [90.8, 32004.0], [90.9, 32004.0], [91.0, 32130.0], [91.1, 32130.0], [91.2, 32130.0], [91.3, 32130.0], [91.4, 32130.0], [91.5, 32130.0], [91.6, 32130.0], [91.7, 32130.0], [91.8, 32130.0], [91.9, 32130.0], [92.0, 32607.0], [92.1, 32607.0], [92.2, 32607.0], [92.3, 32607.0], [92.4, 32607.0], [92.5, 32607.0], [92.6, 32607.0], [92.7, 32607.0], [92.8, 32607.0], [92.9, 32607.0], [93.0, 32729.0], [93.1, 32729.0], [93.2, 32729.0], [93.3, 32729.0], [93.4, 32729.0], [93.5, 32729.0], [93.6, 32729.0], [93.7, 32729.0], [93.8, 32729.0], [93.9, 32729.0], [94.0, 33386.0], [94.1, 33386.0], [94.2, 33386.0], [94.3, 33386.0], [94.4, 33386.0], [94.5, 33386.0], [94.6, 33386.0], [94.7, 33386.0], [94.8, 33386.0], [94.9, 33386.0], [95.0, 34004.0], [95.1, 34004.0], [95.2, 34004.0], [95.3, 34004.0], [95.4, 34004.0], [95.5, 34004.0], [95.6, 34004.0], [95.7, 34004.0], [95.8, 34004.0], [95.9, 34004.0], [96.0, 34138.0], [96.1, 34138.0], [96.2, 34138.0], [96.3, 34138.0], [96.4, 34138.0], [96.5, 34138.0], [96.6, 34138.0], [96.7, 34138.0], [96.8, 34138.0], [96.9, 34138.0], [97.0, 34224.0], [97.1, 34224.0], [97.2, 34224.0], [97.3, 34224.0], [97.4, 34224.0], [97.5, 34224.0], [97.6, 34224.0], [97.7, 34224.0], [97.8, 34224.0], [97.9, 34224.0], [98.0, 34428.0], [98.1, 34428.0], [98.2, 34428.0], [98.3, 34428.0], [98.4, 34428.0], [98.5, 34428.0], [98.6, 34428.0], [98.7, 34428.0], [98.8, 34428.0], [98.9, 34428.0], [99.0, 34595.0], [99.1, 34595.0], [99.2, 34595.0], [99.3, 34595.0], [99.4, 34595.0], [99.5, 34595.0], [99.6, 34595.0], [99.7, 34595.0], [99.8, 34595.0], [99.9, 34595.0]], "isOverall": false, "label": "BUYBOOKS", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 11.0, "series": [{"data": [[600.0, 1.0], [700.0, 1.0], [800.0, 1.0], [900.0, 1.0], [1000.0, 2.0], [1200.0, 2.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [1600.0, 4.0], [1700.0, 10.0], [1800.0, 10.0], [1900.0, 10.0], [31600.0, 8.0], [31500.0, 11.0], [31700.0, 1.0], [2000.0, 11.0], [32000.0, 1.0], [31800.0, 2.0], [31900.0, 2.0], [32100.0, 1.0], [32600.0, 1.0], [32700.0, 1.0], [2100.0, 6.0], [33300.0, 1.0], [34100.0, 1.0], [34000.0, 1.0], [34200.0, 1.0], [34400.0, 1.0], [34500.0, 1.0], [200.0, 1.0], [300.0, 2.0], [500.0, 1.0]], "isOverall": false, "label": "BUYBOOKS", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 34500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 52.0, "series": [{"data": [[0.0, 3.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 52.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 34.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 49.57000000000001, "minX": 1.59167544E12, "maxY": 49.57000000000001, "series": [{"data": [[1.59167544E12, 49.57000000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59167544E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 639.0, "minX": 1.0, "maxY": 34595.0, "series": [{"data": [[2.0, 34428.0], [3.0, 34224.0], [4.0, 34004.0], [5.0, 34138.0], [6.0, 33386.0], [7.0, 32729.0], [8.0, 32607.0], [9.0, 31965.0], [10.0, 32130.0], [11.0, 31590.0], [12.0, 31850.0], [13.0, 31943.0], [14.0, 31892.0], [15.0, 31723.0], [16.0, 31672.0], [18.0, 31535.0], [19.0, 31558.0], [21.0, 31794.5], [24.0, 31568.666666666668], [26.0, 31595.5], [28.0, 31611.5], [29.0, 31622.0], [31.0, 31627.5], [35.0, 1775.0], [34.0, 31677.666666666668], [37.0, 2133.0], [36.0, 2115.0], [39.0, 1728.0], [38.0, 2119.0], [41.0, 1797.5], [43.0, 2071.0], [42.0, 2045.0], [45.0, 2110.0], [44.0, 2073.0], [47.0, 2088.0], [46.0, 2107.0], [48.0, 2063.0], [51.0, 2108.0], [50.0, 1956.0], [52.0, 2098.0], [55.0, 1084.5], [54.0, 2046.5], [57.0, 1966.0], [59.0, 1909.5], [60.0, 1908.0], [62.0, 1400.3333333333333], [63.0, 1900.0], [66.0, 1841.0], [65.0, 1880.0], [64.0, 1891.0], [71.0, 1776.0], [70.0, 1808.0], [69.0, 1826.0], [68.0, 1882.5], [72.0, 1156.5], [75.0, 1748.0], [74.0, 1674.0], [73.0, 2040.0], [79.0, 1700.0], [78.0, 1719.0], [83.0, 1782.0], [82.0, 1879.0], [81.0, 2024.0], [80.0, 1725.3333333333333], [87.0, 972.0], [86.0, 1545.0], [85.0, 1611.0], [84.0, 1683.0], [91.0, 1060.0], [90.0, 1227.0], [89.0, 1225.0], [88.0, 1320.0], [95.0, 771.0], [94.0, 856.0], [93.0, 943.0], [92.0, 1067.0], [96.0, 639.0], [1.0, 34595.0]], "isOverall": false, "label": "BUYBOOKS", "isController": false}, {"data": [[49.57000000000001, 12050.179999999998]], "isOverall": false, "label": "BUYBOOKS-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 96.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 295.0, "minX": 1.59167544E12, "maxY": 388.46666666666664, "series": [{"data": [[1.59167544E12, 388.46666666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59167544E12, 295.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59167544E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 12050.179999999998, "minX": 1.59167544E12, "maxY": 12050.179999999998, "series": [{"data": [[1.59167544E12, 12050.179999999998]], "isOverall": false, "label": "BUYBOOKS", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59167544E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 12049.82, "minX": 1.59167544E12, "maxY": 12049.82, "series": [{"data": [[1.59167544E12, 12049.82]], "isOverall": false, "label": "BUYBOOKS", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59167544E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 9.519999999999994, "minX": 1.59167544E12, "maxY": 9.519999999999994, "series": [{"data": [[1.59167544E12, 9.519999999999994]], "isOverall": false, "label": "BUYBOOKS", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59167544E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 220.0, "minX": 1.59167544E12, "maxY": 2133.0, "series": [{"data": [[1.59167544E12, 2133.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59167544E12, 220.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59167544E12, 220.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59167544E12, 220.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59167544E12, 220.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59167544E12, 1838.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59167544E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 771.0, "minX": 1.0, "maxY": 34224.0, "series": [{"data": [[11.0, 771.0], [55.0, 1898.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 32368.5], [1.0, 33386.0], [5.0, 34224.0], [24.0, 31614.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 771.0, "minX": 1.0, "maxY": 34224.0, "series": [{"data": [[11.0, 771.0], [55.0, 1898.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 32368.5], [1.0, 33386.0], [5.0, 34224.0], [24.0, 31614.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.59167544E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.59167544E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59167544E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.59167544E12, "maxY": 1.1, "series": [{"data": [[1.59167544E12, 1.1]], "isOverall": false, "label": "202", "isController": false}, {"data": [[1.59167544E12, 0.5666666666666667]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59167544E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.59167544E12, "maxY": 1.1, "series": [{"data": [[1.59167544E12, 1.1]], "isOverall": false, "label": "BUYBOOKS-success", "isController": false}, {"data": [[1.59167544E12, 0.5666666666666667]], "isOverall": false, "label": "BUYBOOKS-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59167544E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.59167544E12, "maxY": 1.1, "series": [{"data": [[1.59167544E12, 1.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.59167544E12, 0.5666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59167544E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

