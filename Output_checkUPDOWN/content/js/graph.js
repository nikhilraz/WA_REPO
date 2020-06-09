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
        data: {"result": {"minY": 288.0, "minX": 0.0, "maxY": 36437.0, "series": [{"data": [[0.0, 288.0], [0.1, 288.0], [0.2, 288.0], [0.3, 288.0], [0.4, 288.0], [0.5, 288.0], [0.6, 288.0], [0.7, 288.0], [0.8, 288.0], [0.9, 288.0], [1.0, 387.0], [1.1, 387.0], [1.2, 387.0], [1.3, 387.0], [1.4, 387.0], [1.5, 387.0], [1.6, 387.0], [1.7, 387.0], [1.8, 387.0], [1.9, 387.0], [2.0, 480.0], [2.1, 480.0], [2.2, 480.0], [2.3, 480.0], [2.4, 480.0], [2.5, 480.0], [2.6, 480.0], [2.7, 480.0], [2.8, 480.0], [2.9, 480.0], [3.0, 591.0], [3.1, 591.0], [3.2, 591.0], [3.3, 591.0], [3.4, 591.0], [3.5, 591.0], [3.6, 591.0], [3.7, 591.0], [3.8, 591.0], [3.9, 591.0], [4.0, 707.0], [4.1, 707.0], [4.2, 707.0], [4.3, 707.0], [4.4, 707.0], [4.5, 707.0], [4.6, 707.0], [4.7, 707.0], [4.8, 707.0], [4.9, 707.0], [5.0, 791.0], [5.1, 791.0], [5.2, 791.0], [5.3, 791.0], [5.4, 791.0], [5.5, 791.0], [5.6, 791.0], [5.7, 791.0], [5.8, 791.0], [5.9, 791.0], [6.0, 918.0], [6.1, 918.0], [6.2, 918.0], [6.3, 918.0], [6.4, 918.0], [6.5, 918.0], [6.6, 918.0], [6.7, 918.0], [6.8, 918.0], [6.9, 918.0], [7.0, 1019.0], [7.1, 1019.0], [7.2, 1019.0], [7.3, 1019.0], [7.4, 1019.0], [7.5, 1019.0], [7.6, 1019.0], [7.7, 1019.0], [7.8, 1019.0], [7.9, 1019.0], [8.0, 1092.0], [8.1, 1092.0], [8.2, 1092.0], [8.3, 1092.0], [8.4, 1092.0], [8.5, 1092.0], [8.6, 1092.0], [8.7, 1092.0], [8.8, 1092.0], [8.9, 1092.0], [9.0, 1115.0], [9.1, 1115.0], [9.2, 1115.0], [9.3, 1115.0], [9.4, 1115.0], [9.5, 1115.0], [9.6, 1115.0], [9.7, 1115.0], [9.8, 1115.0], [9.9, 1115.0], [10.0, 1255.0], [10.1, 1255.0], [10.2, 1255.0], [10.3, 1255.0], [10.4, 1255.0], [10.5, 1255.0], [10.6, 1255.0], [10.7, 1255.0], [10.8, 1255.0], [10.9, 1255.0], [11.0, 1357.0], [11.1, 1357.0], [11.2, 1357.0], [11.3, 1357.0], [11.4, 1357.0], [11.5, 1357.0], [11.6, 1357.0], [11.7, 1357.0], [11.8, 1357.0], [11.9, 1357.0], [12.0, 1455.0], [12.1, 1455.0], [12.2, 1455.0], [12.3, 1455.0], [12.4, 1455.0], [12.5, 1455.0], [12.6, 1455.0], [12.7, 1455.0], [12.8, 1455.0], [12.9, 1455.0], [13.0, 1510.0], [13.1, 1510.0], [13.2, 1510.0], [13.3, 1510.0], [13.4, 1510.0], [13.5, 1510.0], [13.6, 1510.0], [13.7, 1510.0], [13.8, 1510.0], [13.9, 1510.0], [14.0, 1628.0], [14.1, 1628.0], [14.2, 1628.0], [14.3, 1628.0], [14.4, 1628.0], [14.5, 1628.0], [14.6, 1628.0], [14.7, 1628.0], [14.8, 1628.0], [14.9, 1628.0], [15.0, 1703.0], [15.1, 1703.0], [15.2, 1703.0], [15.3, 1703.0], [15.4, 1703.0], [15.5, 1703.0], [15.6, 1703.0], [15.7, 1703.0], [15.8, 1703.0], [15.9, 1703.0], [16.0, 1713.0], [16.1, 1713.0], [16.2, 1713.0], [16.3, 1713.0], [16.4, 1713.0], [16.5, 1713.0], [16.6, 1713.0], [16.7, 1713.0], [16.8, 1713.0], [16.9, 1713.0], [17.0, 1750.0], [17.1, 1750.0], [17.2, 1750.0], [17.3, 1750.0], [17.4, 1750.0], [17.5, 1750.0], [17.6, 1750.0], [17.7, 1750.0], [17.8, 1750.0], [17.9, 1750.0], [18.0, 1954.0], [18.1, 1954.0], [18.2, 1954.0], [18.3, 1954.0], [18.4, 1954.0], [18.5, 1954.0], [18.6, 1954.0], [18.7, 1954.0], [18.8, 1954.0], [18.9, 1954.0], [19.0, 2020.0], [19.1, 2020.0], [19.2, 2020.0], [19.3, 2020.0], [19.4, 2020.0], [19.5, 2020.0], [19.6, 2020.0], [19.7, 2020.0], [19.8, 2020.0], [19.9, 2020.0], [20.0, 2131.0], [20.1, 2131.0], [20.2, 2131.0], [20.3, 2131.0], [20.4, 2131.0], [20.5, 2131.0], [20.6, 2131.0], [20.7, 2131.0], [20.8, 2131.0], [20.9, 2131.0], [21.0, 2162.0], [21.1, 2162.0], [21.2, 2162.0], [21.3, 2162.0], [21.4, 2162.0], [21.5, 2162.0], [21.6, 2162.0], [21.7, 2162.0], [21.8, 2162.0], [21.9, 2162.0], [22.0, 2184.0], [22.1, 2184.0], [22.2, 2184.0], [22.3, 2184.0], [22.4, 2184.0], [22.5, 2184.0], [22.6, 2184.0], [22.7, 2184.0], [22.8, 2184.0], [22.9, 2184.0], [23.0, 2204.0], [23.1, 2204.0], [23.2, 2204.0], [23.3, 2204.0], [23.4, 2204.0], [23.5, 2204.0], [23.6, 2204.0], [23.7, 2204.0], [23.8, 2204.0], [23.9, 2204.0], [24.0, 2243.0], [24.1, 2243.0], [24.2, 2243.0], [24.3, 2243.0], [24.4, 2243.0], [24.5, 2243.0], [24.6, 2243.0], [24.7, 2243.0], [24.8, 2243.0], [24.9, 2243.0], [25.0, 2255.0], [25.1, 2255.0], [25.2, 2255.0], [25.3, 2255.0], [25.4, 2255.0], [25.5, 2255.0], [25.6, 2255.0], [25.7, 2255.0], [25.8, 2255.0], [25.9, 2255.0], [26.0, 2258.0], [26.1, 2258.0], [26.2, 2258.0], [26.3, 2258.0], [26.4, 2258.0], [26.5, 2258.0], [26.6, 2258.0], [26.7, 2258.0], [26.8, 2258.0], [26.9, 2258.0], [27.0, 2278.0], [27.1, 2278.0], [27.2, 2278.0], [27.3, 2278.0], [27.4, 2278.0], [27.5, 2278.0], [27.6, 2278.0], [27.7, 2278.0], [27.8, 2278.0], [27.9, 2278.0], [28.0, 2281.0], [28.1, 2281.0], [28.2, 2281.0], [28.3, 2281.0], [28.4, 2281.0], [28.5, 2281.0], [28.6, 2281.0], [28.7, 2281.0], [28.8, 2281.0], [28.9, 2281.0], [29.0, 2300.0], [29.1, 2300.0], [29.2, 2300.0], [29.3, 2300.0], [29.4, 2300.0], [29.5, 2300.0], [29.6, 2300.0], [29.7, 2300.0], [29.8, 2300.0], [29.9, 2300.0], [30.0, 2309.0], [30.1, 2309.0], [30.2, 2309.0], [30.3, 2309.0], [30.4, 2309.0], [30.5, 2309.0], [30.6, 2309.0], [30.7, 2309.0], [30.8, 2309.0], [30.9, 2309.0], [31.0, 2317.0], [31.1, 2317.0], [31.2, 2317.0], [31.3, 2317.0], [31.4, 2317.0], [31.5, 2317.0], [31.6, 2317.0], [31.7, 2317.0], [31.8, 2317.0], [31.9, 2317.0], [32.0, 2327.0], [32.1, 2327.0], [32.2, 2327.0], [32.3, 2327.0], [32.4, 2327.0], [32.5, 2327.0], [32.6, 2327.0], [32.7, 2327.0], [32.8, 2327.0], [32.9, 2327.0], [33.0, 2331.0], [33.1, 2331.0], [33.2, 2331.0], [33.3, 2331.0], [33.4, 2331.0], [33.5, 2331.0], [33.6, 2331.0], [33.7, 2331.0], [33.8, 2331.0], [33.9, 2331.0], [34.0, 2345.0], [34.1, 2345.0], [34.2, 2345.0], [34.3, 2345.0], [34.4, 2345.0], [34.5, 2345.0], [34.6, 2345.0], [34.7, 2345.0], [34.8, 2345.0], [34.9, 2345.0], [35.0, 2363.0], [35.1, 2363.0], [35.2, 2363.0], [35.3, 2363.0], [35.4, 2363.0], [35.5, 2363.0], [35.6, 2363.0], [35.7, 2363.0], [35.8, 2363.0], [35.9, 2363.0], [36.0, 2374.0], [36.1, 2374.0], [36.2, 2374.0], [36.3, 2374.0], [36.4, 2374.0], [36.5, 2374.0], [36.6, 2374.0], [36.7, 2374.0], [36.8, 2374.0], [36.9, 2374.0], [37.0, 2376.0], [37.1, 2376.0], [37.2, 2376.0], [37.3, 2376.0], [37.4, 2376.0], [37.5, 2376.0], [37.6, 2376.0], [37.7, 2376.0], [37.8, 2376.0], [37.9, 2376.0], [38.0, 2386.0], [38.1, 2386.0], [38.2, 2386.0], [38.3, 2386.0], [38.4, 2386.0], [38.5, 2386.0], [38.6, 2386.0], [38.7, 2386.0], [38.8, 2386.0], [38.9, 2386.0], [39.0, 2403.0], [39.1, 2403.0], [39.2, 2403.0], [39.3, 2403.0], [39.4, 2403.0], [39.5, 2403.0], [39.6, 2403.0], [39.7, 2403.0], [39.8, 2403.0], [39.9, 2403.0], [40.0, 2413.0], [40.1, 2413.0], [40.2, 2413.0], [40.3, 2413.0], [40.4, 2413.0], [40.5, 2413.0], [40.6, 2413.0], [40.7, 2413.0], [40.8, 2413.0], [40.9, 2413.0], [41.0, 2419.0], [41.1, 2419.0], [41.2, 2419.0], [41.3, 2419.0], [41.4, 2419.0], [41.5, 2419.0], [41.6, 2419.0], [41.7, 2419.0], [41.8, 2419.0], [41.9, 2419.0], [42.0, 2424.0], [42.1, 2424.0], [42.2, 2424.0], [42.3, 2424.0], [42.4, 2424.0], [42.5, 2424.0], [42.6, 2424.0], [42.7, 2424.0], [42.8, 2424.0], [42.9, 2424.0], [43.0, 2424.0], [43.1, 2424.0], [43.2, 2424.0], [43.3, 2424.0], [43.4, 2424.0], [43.5, 2424.0], [43.6, 2424.0], [43.7, 2424.0], [43.8, 2424.0], [43.9, 2424.0], [44.0, 2445.0], [44.1, 2445.0], [44.2, 2445.0], [44.3, 2445.0], [44.4, 2445.0], [44.5, 2445.0], [44.6, 2445.0], [44.7, 2445.0], [44.8, 2445.0], [44.9, 2445.0], [45.0, 2461.0], [45.1, 2461.0], [45.2, 2461.0], [45.3, 2461.0], [45.4, 2461.0], [45.5, 2461.0], [45.6, 2461.0], [45.7, 2461.0], [45.8, 2461.0], [45.9, 2461.0], [46.0, 2473.0], [46.1, 2473.0], [46.2, 2473.0], [46.3, 2473.0], [46.4, 2473.0], [46.5, 2473.0], [46.6, 2473.0], [46.7, 2473.0], [46.8, 2473.0], [46.9, 2473.0], [47.0, 2476.0], [47.1, 2476.0], [47.2, 2476.0], [47.3, 2476.0], [47.4, 2476.0], [47.5, 2476.0], [47.6, 2476.0], [47.7, 2476.0], [47.8, 2476.0], [47.9, 2476.0], [48.0, 2483.0], [48.1, 2483.0], [48.2, 2483.0], [48.3, 2483.0], [48.4, 2483.0], [48.5, 2483.0], [48.6, 2483.0], [48.7, 2483.0], [48.8, 2483.0], [48.9, 2483.0], [49.0, 2496.0], [49.1, 2496.0], [49.2, 2496.0], [49.3, 2496.0], [49.4, 2496.0], [49.5, 2496.0], [49.6, 2496.0], [49.7, 2496.0], [49.8, 2496.0], [49.9, 2496.0], [50.0, 2506.0], [50.1, 2506.0], [50.2, 2506.0], [50.3, 2506.0], [50.4, 2506.0], [50.5, 2506.0], [50.6, 2506.0], [50.7, 2506.0], [50.8, 2506.0], [50.9, 2506.0], [51.0, 2511.0], [51.1, 2511.0], [51.2, 2511.0], [51.3, 2511.0], [51.4, 2511.0], [51.5, 2511.0], [51.6, 2511.0], [51.7, 2511.0], [51.8, 2511.0], [51.9, 2511.0], [52.0, 2514.0], [52.1, 2514.0], [52.2, 2514.0], [52.3, 2514.0], [52.4, 2514.0], [52.5, 2514.0], [52.6, 2514.0], [52.7, 2514.0], [52.8, 2514.0], [52.9, 2514.0], [53.0, 2520.0], [53.1, 2520.0], [53.2, 2520.0], [53.3, 2520.0], [53.4, 2520.0], [53.5, 2520.0], [53.6, 2520.0], [53.7, 2520.0], [53.8, 2520.0], [53.9, 2520.0], [54.0, 2535.0], [54.1, 2535.0], [54.2, 2535.0], [54.3, 2535.0], [54.4, 2535.0], [54.5, 2535.0], [54.6, 2535.0], [54.7, 2535.0], [54.8, 2535.0], [54.9, 2535.0], [55.0, 2548.0], [55.1, 2548.0], [55.2, 2548.0], [55.3, 2548.0], [55.4, 2548.0], [55.5, 2548.0], [55.6, 2548.0], [55.7, 2548.0], [55.8, 2548.0], [55.9, 2548.0], [56.0, 2570.0], [56.1, 2570.0], [56.2, 2570.0], [56.3, 2570.0], [56.4, 2570.0], [56.5, 2570.0], [56.6, 2570.0], [56.7, 2570.0], [56.8, 2570.0], [56.9, 2570.0], [57.0, 2570.0], [57.1, 2570.0], [57.2, 2570.0], [57.3, 2570.0], [57.4, 2570.0], [57.5, 2570.0], [57.6, 2570.0], [57.7, 2570.0], [57.8, 2570.0], [57.9, 2570.0], [58.0, 2597.0], [58.1, 2597.0], [58.2, 2597.0], [58.3, 2597.0], [58.4, 2597.0], [58.5, 2597.0], [58.6, 2597.0], [58.7, 2597.0], [58.8, 2597.0], [58.9, 2597.0], [59.0, 2600.0], [59.1, 2600.0], [59.2, 2600.0], [59.3, 2600.0], [59.4, 2600.0], [59.5, 2600.0], [59.6, 2600.0], [59.7, 2600.0], [59.8, 2600.0], [59.9, 2600.0], [60.0, 2604.0], [60.1, 2604.0], [60.2, 2604.0], [60.3, 2604.0], [60.4, 2604.0], [60.5, 2604.0], [60.6, 2604.0], [60.7, 2604.0], [60.8, 2604.0], [60.9, 2604.0], [61.0, 2606.0], [61.1, 2606.0], [61.2, 2606.0], [61.3, 2606.0], [61.4, 2606.0], [61.5, 2606.0], [61.6, 2606.0], [61.7, 2606.0], [61.8, 2606.0], [61.9, 2606.0], [62.0, 2626.0], [62.1, 2626.0], [62.2, 2626.0], [62.3, 2626.0], [62.4, 2626.0], [62.5, 2626.0], [62.6, 2626.0], [62.7, 2626.0], [62.8, 2626.0], [62.9, 2626.0], [63.0, 2634.0], [63.1, 2634.0], [63.2, 2634.0], [63.3, 2634.0], [63.4, 2634.0], [63.5, 2634.0], [63.6, 2634.0], [63.7, 2634.0], [63.8, 2634.0], [63.9, 2634.0], [64.0, 2635.0], [64.1, 2635.0], [64.2, 2635.0], [64.3, 2635.0], [64.4, 2635.0], [64.5, 2635.0], [64.6, 2635.0], [64.7, 2635.0], [64.8, 2635.0], [64.9, 2635.0], [65.0, 2640.0], [65.1, 2640.0], [65.2, 2640.0], [65.3, 2640.0], [65.4, 2640.0], [65.5, 2640.0], [65.6, 2640.0], [65.7, 2640.0], [65.8, 2640.0], [65.9, 2640.0], [66.0, 2642.0], [66.1, 2642.0], [66.2, 2642.0], [66.3, 2642.0], [66.4, 2642.0], [66.5, 2642.0], [66.6, 2642.0], [66.7, 2642.0], [66.8, 2642.0], [66.9, 2642.0], [67.0, 2674.0], [67.1, 2674.0], [67.2, 2674.0], [67.3, 2674.0], [67.4, 2674.0], [67.5, 2674.0], [67.6, 2674.0], [67.7, 2674.0], [67.8, 2674.0], [67.9, 2674.0], [68.0, 2735.0], [68.1, 2735.0], [68.2, 2735.0], [68.3, 2735.0], [68.4, 2735.0], [68.5, 2735.0], [68.6, 2735.0], [68.7, 2735.0], [68.8, 2735.0], [68.9, 2735.0], [69.0, 2743.0], [69.1, 2743.0], [69.2, 2743.0], [69.3, 2743.0], [69.4, 2743.0], [69.5, 2743.0], [69.6, 2743.0], [69.7, 2743.0], [69.8, 2743.0], [69.9, 2743.0], [70.0, 2743.0], [70.1, 2743.0], [70.2, 2743.0], [70.3, 2743.0], [70.4, 2743.0], [70.5, 2743.0], [70.6, 2743.0], [70.7, 2743.0], [70.8, 2743.0], [70.9, 2743.0], [71.0, 2749.0], [71.1, 2749.0], [71.2, 2749.0], [71.3, 2749.0], [71.4, 2749.0], [71.5, 2749.0], [71.6, 2749.0], [71.7, 2749.0], [71.8, 2749.0], [71.9, 2749.0], [72.0, 2749.0], [72.1, 2749.0], [72.2, 2749.0], [72.3, 2749.0], [72.4, 2749.0], [72.5, 2749.0], [72.6, 2749.0], [72.7, 2749.0], [72.8, 2749.0], [72.9, 2749.0], [73.0, 2754.0], [73.1, 2754.0], [73.2, 2754.0], [73.3, 2754.0], [73.4, 2754.0], [73.5, 2754.0], [73.6, 2754.0], [73.7, 2754.0], [73.8, 2754.0], [73.9, 2754.0], [74.0, 2754.0], [74.1, 2754.0], [74.2, 2754.0], [74.3, 2754.0], [74.4, 2754.0], [74.5, 2754.0], [74.6, 2754.0], [74.7, 2754.0], [74.8, 2754.0], [74.9, 2754.0], [75.0, 2764.0], [75.1, 2764.0], [75.2, 2764.0], [75.3, 2764.0], [75.4, 2764.0], [75.5, 2764.0], [75.6, 2764.0], [75.7, 2764.0], [75.8, 2764.0], [75.9, 2764.0], [76.0, 2784.0], [76.1, 2784.0], [76.2, 2784.0], [76.3, 2784.0], [76.4, 2784.0], [76.5, 2784.0], [76.6, 2784.0], [76.7, 2784.0], [76.8, 2784.0], [76.9, 2784.0], [77.0, 2805.0], [77.1, 2805.0], [77.2, 2805.0], [77.3, 2805.0], [77.4, 2805.0], [77.5, 2805.0], [77.6, 2805.0], [77.7, 2805.0], [77.8, 2805.0], [77.9, 2805.0], [78.0, 2811.0], [78.1, 2811.0], [78.2, 2811.0], [78.3, 2811.0], [78.4, 2811.0], [78.5, 2811.0], [78.6, 2811.0], [78.7, 2811.0], [78.8, 2811.0], [78.9, 2811.0], [79.0, 2853.0], [79.1, 2853.0], [79.2, 2853.0], [79.3, 2853.0], [79.4, 2853.0], [79.5, 2853.0], [79.6, 2853.0], [79.7, 2853.0], [79.8, 2853.0], [79.9, 2853.0], [80.0, 2860.0], [80.1, 2860.0], [80.2, 2860.0], [80.3, 2860.0], [80.4, 2860.0], [80.5, 2860.0], [80.6, 2860.0], [80.7, 2860.0], [80.8, 2860.0], [80.9, 2860.0], [81.0, 2861.0], [81.1, 2861.0], [81.2, 2861.0], [81.3, 2861.0], [81.4, 2861.0], [81.5, 2861.0], [81.6, 2861.0], [81.7, 2861.0], [81.8, 2861.0], [81.9, 2861.0], [82.0, 32276.0], [82.1, 32276.0], [82.2, 32276.0], [82.3, 32276.0], [82.4, 32276.0], [82.5, 32276.0], [82.6, 32276.0], [82.7, 32276.0], [82.8, 32276.0], [82.9, 32276.0], [83.0, 32347.0], [83.1, 32347.0], [83.2, 32347.0], [83.3, 32347.0], [83.4, 32347.0], [83.5, 32347.0], [83.6, 32347.0], [83.7, 32347.0], [83.8, 32347.0], [83.9, 32347.0], [84.0, 32350.0], [84.1, 32350.0], [84.2, 32350.0], [84.3, 32350.0], [84.4, 32350.0], [84.5, 32350.0], [84.6, 32350.0], [84.7, 32350.0], [84.8, 32350.0], [84.9, 32350.0], [85.0, 32366.0], [85.1, 32366.0], [85.2, 32366.0], [85.3, 32366.0], [85.4, 32366.0], [85.5, 32366.0], [85.6, 32366.0], [85.7, 32366.0], [85.8, 32366.0], [85.9, 32366.0], [86.0, 32472.0], [86.1, 32472.0], [86.2, 32472.0], [86.3, 32472.0], [86.4, 32472.0], [86.5, 32472.0], [86.6, 32472.0], [86.7, 32472.0], [86.8, 32472.0], [86.9, 32472.0], [87.0, 32537.0], [87.1, 32537.0], [87.2, 32537.0], [87.3, 32537.0], [87.4, 32537.0], [87.5, 32537.0], [87.6, 32537.0], [87.7, 32537.0], [87.8, 32537.0], [87.9, 32537.0], [88.0, 32585.0], [88.1, 32585.0], [88.2, 32585.0], [88.3, 32585.0], [88.4, 32585.0], [88.5, 32585.0], [88.6, 32585.0], [88.7, 32585.0], [88.8, 32585.0], [88.9, 32585.0], [89.0, 32647.0], [89.1, 32647.0], [89.2, 32647.0], [89.3, 32647.0], [89.4, 32647.0], [89.5, 32647.0], [89.6, 32647.0], [89.7, 32647.0], [89.8, 32647.0], [89.9, 32647.0], [90.0, 32669.0], [90.1, 32669.0], [90.2, 32669.0], [90.3, 32669.0], [90.4, 32669.0], [90.5, 32669.0], [90.6, 32669.0], [90.7, 32669.0], [90.8, 32669.0], [90.9, 32669.0], [91.0, 32755.0], [91.1, 32755.0], [91.2, 32755.0], [91.3, 32755.0], [91.4, 32755.0], [91.5, 32755.0], [91.6, 32755.0], [91.7, 32755.0], [91.8, 32755.0], [91.9, 32755.0], [92.0, 34165.0], [92.1, 34165.0], [92.2, 34165.0], [92.3, 34165.0], [92.4, 34165.0], [92.5, 34165.0], [92.6, 34165.0], [92.7, 34165.0], [92.8, 34165.0], [92.9, 34165.0], [93.0, 34512.0], [93.1, 34512.0], [93.2, 34512.0], [93.3, 34512.0], [93.4, 34512.0], [93.5, 34512.0], [93.6, 34512.0], [93.7, 34512.0], [93.8, 34512.0], [93.9, 34512.0], [94.0, 34869.0], [94.1, 34869.0], [94.2, 34869.0], [94.3, 34869.0], [94.4, 34869.0], [94.5, 34869.0], [94.6, 34869.0], [94.7, 34869.0], [94.8, 34869.0], [94.9, 34869.0], [95.0, 35010.0], [95.1, 35010.0], [95.2, 35010.0], [95.3, 35010.0], [95.4, 35010.0], [95.5, 35010.0], [95.6, 35010.0], [95.7, 35010.0], [95.8, 35010.0], [95.9, 35010.0], [96.0, 35671.0], [96.1, 35671.0], [96.2, 35671.0], [96.3, 35671.0], [96.4, 35671.0], [96.5, 35671.0], [96.6, 35671.0], [96.7, 35671.0], [96.8, 35671.0], [96.9, 35671.0], [97.0, 35809.0], [97.1, 35809.0], [97.2, 35809.0], [97.3, 35809.0], [97.4, 35809.0], [97.5, 35809.0], [97.6, 35809.0], [97.7, 35809.0], [97.8, 35809.0], [97.9, 35809.0], [98.0, 36011.0], [98.1, 36011.0], [98.2, 36011.0], [98.3, 36011.0], [98.4, 36011.0], [98.5, 36011.0], [98.6, 36011.0], [98.7, 36011.0], [98.8, 36011.0], [98.9, 36011.0], [99.0, 36437.0], [99.1, 36437.0], [99.2, 36437.0], [99.3, 36437.0], [99.4, 36437.0], [99.5, 36437.0], [99.6, 36437.0], [99.7, 36437.0], [99.8, 36437.0], [99.9, 36437.0]], "isOverall": false, "label": "BUYBOOKS", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 11.0, "series": [{"data": [[700.0, 2.0], [900.0, 1.0], [1000.0, 2.0], [1100.0, 1.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [1600.0, 1.0], [1700.0, 3.0], [1900.0, 1.0], [2000.0, 1.0], [32400.0, 1.0], [32600.0, 2.0], [32200.0, 1.0], [32700.0, 1.0], [32300.0, 3.0], [32500.0, 2.0], [2100.0, 3.0], [34500.0, 1.0], [34100.0, 1.0], [34800.0, 1.0], [2200.0, 6.0], [2300.0, 10.0], [35000.0, 1.0], [35800.0, 1.0], [35600.0, 1.0], [36400.0, 1.0], [36000.0, 1.0], [2400.0, 11.0], [2500.0, 9.0], [2600.0, 9.0], [2700.0, 9.0], [2800.0, 5.0], [200.0, 1.0], [300.0, 1.0], [400.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "BUYBOOKS", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 36400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 69.0, "series": [{"data": [[0.0, 3.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 69.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 18.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.86000000000001, "minX": 1.59167586E12, "maxY": 49.86000000000001, "series": [{"data": [[1.59167586E12, 49.86000000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59167586E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 288.0, "minX": 1.0, "maxY": 36437.0, "series": [{"data": [[2.0, 36437.0], [3.0, 35671.0], [4.0, 35809.0], [5.0, 34869.0], [6.0, 35010.0], [7.0, 34165.0], [8.0, 34512.0], [9.0, 32366.0], [10.0, 32347.0], [11.0, 32647.0], [12.0, 32537.0], [15.0, 32563.333333333332], [18.0, 32472.333333333332], [19.0, 2413.0], [20.0, 2419.0], [21.0, 2424.0], [22.0, 2445.0], [24.0, 2467.0], [25.0, 2483.0], [27.0, 2683.0], [29.0, 2381.0], [31.0, 2612.0], [32.0, 2345.0], [34.0, 2576.5], [37.0, 2309.0], [36.0, 2278.0], [39.0, 2295.6666666666665], [41.0, 2486.0], [42.0, 2511.0], [45.0, 2811.0], [44.0, 2517.0], [47.0, 2548.0], [46.0, 2535.0], [49.0, 2570.0], [48.0, 2805.0], [51.0, 2597.0], [50.0, 2570.0], [52.0, 2600.0], [54.0, 2769.0], [57.0, 2635.0], [56.0, 2615.0], [59.0, 2640.0], [58.0, 2634.0], [61.0, 2703.0], [62.0, 288.0], [63.0, 2714.0], [66.0, 2183.0], [64.0, 2749.0], [70.0, 387.0], [71.0, 2739.0], [69.0, 2607.6666666666665], [75.0, 2281.0], [74.0, 2606.0], [73.0, 2399.0], [79.0, 2184.0], [78.0, 2258.0], [77.0, 2403.0], [76.0, 2255.0], [80.0, 1305.5], [83.0, 1750.0], [82.0, 1954.0], [81.0, 2020.0], [87.0, 1510.0], [86.0, 1628.0], [85.0, 1713.0], [84.0, 1703.0], [90.0, 923.0], [91.0, 1115.0], [89.0, 1357.0], [88.0, 1455.0], [95.0, 791.0], [94.0, 918.0], [93.0, 1019.0], [92.0, 1092.0], [96.0, 707.0], [1.0, 36011.0]], "isOverall": false, "label": "BUYBOOKS", "isController": false}, {"data": [[49.86000000000001, 7870.59]], "isOverall": false, "label": "BUYBOOKS-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 96.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 295.0, "minX": 1.59167586E12, "maxY": 373.95, "series": [{"data": [[1.59167586E12, 373.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59167586E12, 295.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59167586E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7870.59, "minX": 1.59167586E12, "maxY": 7870.59, "series": [{"data": [[1.59167586E12, 7870.59]], "isOverall": false, "label": "BUYBOOKS", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59167586E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7870.22, "minX": 1.59167586E12, "maxY": 7870.22, "series": [{"data": [[1.59167586E12, 7870.22]], "isOverall": false, "label": "BUYBOOKS", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59167586E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 22.4, "minX": 1.59167586E12, "maxY": 22.4, "series": [{"data": [[1.59167586E12, 22.4]], "isOverall": false, "label": "BUYBOOKS", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59167586E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 288.0, "minX": 1.59167586E12, "maxY": 2861.0, "series": [{"data": [[1.59167586E12, 2861.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59167586E12, 288.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59167586E12, 288.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59167586E12, 288.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59167586E12, 288.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59167586E12, 2416.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59167586E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 337.5, "minX": 2.0, "maxY": 36224.0, "series": [{"data": [[2.0, 337.5], [10.0, 968.5], [12.0, 1852.0], [58.0, 2517.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 36224.0], [10.0, 32504.5], [3.0, 34939.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 334.5, "minX": 2.0, "maxY": 36224.0, "series": [{"data": [[2.0, 334.5], [10.0, 968.5], [12.0, 1851.5], [58.0, 2517.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 36224.0], [10.0, 32504.5], [3.0, 34939.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.59167586E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.59167586E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59167586E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.59167586E12, "maxY": 1.3666666666666667, "series": [{"data": [[1.59167586E12, 1.3666666666666667]], "isOverall": false, "label": "202", "isController": false}, {"data": [[1.59167586E12, 0.3]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59167586E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.59167586E12, "maxY": 1.3666666666666667, "series": [{"data": [[1.59167586E12, 1.3666666666666667]], "isOverall": false, "label": "BUYBOOKS-success", "isController": false}, {"data": [[1.59167586E12, 0.3]], "isOverall": false, "label": "BUYBOOKS-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59167586E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.59167586E12, "maxY": 1.3666666666666667, "series": [{"data": [[1.59167586E12, 1.3666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.59167586E12, 0.3]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59167586E12, "title": "Total Transactions Per Second"}},
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

