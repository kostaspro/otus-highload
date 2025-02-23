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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 21402.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 4.0], [2.1, 4.0], [2.2, 4.0], [2.3, 4.0], [2.4, 4.0], [2.5, 4.0], [2.6, 4.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 5.0], [4.0, 5.0], [4.1, 5.0], [4.2, 5.0], [4.3, 5.0], [4.4, 5.0], [4.5, 5.0], [4.6, 5.0], [4.7, 5.0], [4.8, 5.0], [4.9, 5.0], [5.0, 5.0], [5.1, 5.0], [5.2, 5.0], [5.3, 5.0], [5.4, 5.0], [5.5, 5.0], [5.6, 5.0], [5.7, 5.0], [5.8, 5.0], [5.9, 5.0], [6.0, 5.0], [6.1, 5.0], [6.2, 5.0], [6.3, 5.0], [6.4, 5.0], [6.5, 5.0], [6.6, 5.0], [6.7, 5.0], [6.8, 5.0], [6.9, 5.0], [7.0, 5.0], [7.1, 5.0], [7.2, 5.0], [7.3, 5.0], [7.4, 5.0], [7.5, 5.0], [7.6, 5.0], [7.7, 5.0], [7.8, 5.0], [7.9, 5.0], [8.0, 5.0], [8.1, 5.0], [8.2, 5.0], [8.3, 5.0], [8.4, 5.0], [8.5, 5.0], [8.6, 5.0], [8.7, 5.0], [8.8, 5.0], [8.9, 5.0], [9.0, 5.0], [9.1, 5.0], [9.2, 5.0], [9.3, 5.0], [9.4, 5.0], [9.5, 5.0], [9.6, 5.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 5.0], [10.2, 5.0], [10.3, 5.0], [10.4, 5.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 6.0], [11.0, 6.0], [11.1, 6.0], [11.2, 6.0], [11.3, 6.0], [11.4, 6.0], [11.5, 6.0], [11.6, 6.0], [11.7, 6.0], [11.8, 6.0], [11.9, 6.0], [12.0, 6.0], [12.1, 6.0], [12.2, 6.0], [12.3, 6.0], [12.4, 6.0], [12.5, 6.0], [12.6, 6.0], [12.7, 6.0], [12.8, 6.0], [12.9, 6.0], [13.0, 6.0], [13.1, 6.0], [13.2, 6.0], [13.3, 6.0], [13.4, 6.0], [13.5, 6.0], [13.6, 6.0], [13.7, 6.0], [13.8, 6.0], [13.9, 6.0], [14.0, 6.0], [14.1, 6.0], [14.2, 6.0], [14.3, 6.0], [14.4, 6.0], [14.5, 6.0], [14.6, 6.0], [14.7, 6.0], [14.8, 6.0], [14.9, 6.0], [15.0, 6.0], [15.1, 6.0], [15.2, 6.0], [15.3, 6.0], [15.4, 6.0], [15.5, 6.0], [15.6, 6.0], [15.7, 6.0], [15.8, 6.0], [15.9, 6.0], [16.0, 7.0], [16.1, 7.0], [16.2, 7.0], [16.3, 7.0], [16.4, 7.0], [16.5, 7.0], [16.6, 7.0], [16.7, 7.0], [16.8, 7.0], [16.9, 7.0], [17.0, 7.0], [17.1, 7.0], [17.2, 7.0], [17.3, 7.0], [17.4, 7.0], [17.5, 7.0], [17.6, 7.0], [17.7, 7.0], [17.8, 7.0], [17.9, 7.0], [18.0, 7.0], [18.1, 7.0], [18.2, 7.0], [18.3, 7.0], [18.4, 7.0], [18.5, 7.0], [18.6, 7.0], [18.7, 7.0], [18.8, 7.0], [18.9, 7.0], [19.0, 7.0], [19.1, 7.0], [19.2, 7.0], [19.3, 7.0], [19.4, 7.0], [19.5, 7.0], [19.6, 7.0], [19.7, 7.0], [19.8, 7.0], [19.9, 7.0], [20.0, 7.0], [20.1, 7.0], [20.2, 7.0], [20.3, 7.0], [20.4, 7.0], [20.5, 7.0], [20.6, 7.0], [20.7, 7.0], [20.8, 7.0], [20.9, 7.0], [21.0, 7.0], [21.1, 7.0], [21.2, 7.0], [21.3, 7.0], [21.4, 7.0], [21.5, 7.0], [21.6, 7.0], [21.7, 7.0], [21.8, 7.0], [21.9, 7.0], [22.0, 7.0], [22.1, 7.0], [22.2, 7.0], [22.3, 7.0], [22.4, 7.0], [22.5, 7.0], [22.6, 7.0], [22.7, 7.0], [22.8, 7.0], [22.9, 8.0], [23.0, 8.0], [23.1, 8.0], [23.2, 8.0], [23.3, 8.0], [23.4, 8.0], [23.5, 8.0], [23.6, 8.0], [23.7, 8.0], [23.8, 8.0], [23.9, 8.0], [24.0, 8.0], [24.1, 8.0], [24.2, 8.0], [24.3, 8.0], [24.4, 8.0], [24.5, 8.0], [24.6, 8.0], [24.7, 8.0], [24.8, 8.0], [24.9, 8.0], [25.0, 8.0], [25.1, 8.0], [25.2, 8.0], [25.3, 8.0], [25.4, 8.0], [25.5, 8.0], [25.6, 8.0], [25.7, 8.0], [25.8, 8.0], [25.9, 8.0], [26.0, 8.0], [26.1, 8.0], [26.2, 8.0], [26.3, 8.0], [26.4, 8.0], [26.5, 8.0], [26.6, 8.0], [26.7, 8.0], [26.8, 8.0], [26.9, 8.0], [27.0, 8.0], [27.1, 8.0], [27.2, 8.0], [27.3, 8.0], [27.4, 8.0], [27.5, 8.0], [27.6, 8.0], [27.7, 8.0], [27.8, 8.0], [27.9, 8.0], [28.0, 8.0], [28.1, 8.0], [28.2, 8.0], [28.3, 8.0], [28.4, 8.0], [28.5, 8.0], [28.6, 8.0], [28.7, 8.0], [28.8, 8.0], [28.9, 8.0], [29.0, 8.0], [29.1, 8.0], [29.2, 8.0], [29.3, 8.0], [29.4, 8.0], [29.5, 8.0], [29.6, 8.0], [29.7, 8.0], [29.8, 8.0], [29.9, 8.0], [30.0, 8.0], [30.1, 8.0], [30.2, 8.0], [30.3, 8.0], [30.4, 8.0], [30.5, 8.0], [30.6, 8.0], [30.7, 8.0], [30.8, 8.0], [30.9, 8.0], [31.0, 8.0], [31.1, 8.0], [31.2, 8.0], [31.3, 8.0], [31.4, 8.0], [31.5, 8.0], [31.6, 8.0], [31.7, 8.0], [31.8, 8.0], [31.9, 8.0], [32.0, 8.0], [32.1, 8.0], [32.2, 8.0], [32.3, 8.0], [32.4, 8.0], [32.5, 8.0], [32.6, 8.0], [32.7, 8.0], [32.8, 8.0], [32.9, 8.0], [33.0, 8.0], [33.1, 8.0], [33.2, 8.0], [33.3, 8.0], [33.4, 9.0], [33.5, 9.0], [33.6, 9.0], [33.7, 9.0], [33.8, 9.0], [33.9, 9.0], [34.0, 9.0], [34.1, 9.0], [34.2, 9.0], [34.3, 9.0], [34.4, 9.0], [34.5, 9.0], [34.6, 9.0], [34.7, 9.0], [34.8, 9.0], [34.9, 9.0], [35.0, 9.0], [35.1, 9.0], [35.2, 9.0], [35.3, 9.0], [35.4, 9.0], [35.5, 9.0], [35.6, 9.0], [35.7, 9.0], [35.8, 9.0], [35.9, 9.0], [36.0, 9.0], [36.1, 9.0], [36.2, 9.0], [36.3, 9.0], [36.4, 9.0], [36.5, 9.0], [36.6, 9.0], [36.7, 9.0], [36.8, 9.0], [36.9, 9.0], [37.0, 9.0], [37.1, 9.0], [37.2, 9.0], [37.3, 9.0], [37.4, 9.0], [37.5, 9.0], [37.6, 9.0], [37.7, 9.0], [37.8, 9.0], [37.9, 9.0], [38.0, 9.0], [38.1, 9.0], [38.2, 9.0], [38.3, 9.0], [38.4, 9.0], [38.5, 9.0], [38.6, 9.0], [38.7, 9.0], [38.8, 9.0], [38.9, 9.0], [39.0, 9.0], [39.1, 9.0], [39.2, 9.0], [39.3, 9.0], [39.4, 9.0], [39.5, 9.0], [39.6, 9.0], [39.7, 9.0], [39.8, 9.0], [39.9, 9.0], [40.0, 9.0], [40.1, 9.0], [40.2, 9.0], [40.3, 9.0], [40.4, 9.0], [40.5, 9.0], [40.6, 9.0], [40.7, 9.0], [40.8, 9.0], [40.9, 9.0], [41.0, 9.0], [41.1, 9.0], [41.2, 9.0], [41.3, 9.0], [41.4, 9.0], [41.5, 9.0], [41.6, 9.0], [41.7, 9.0], [41.8, 9.0], [41.9, 9.0], [42.0, 9.0], [42.1, 9.0], [42.2, 9.0], [42.3, 9.0], [42.4, 9.0], [42.5, 9.0], [42.6, 9.0], [42.7, 9.0], [42.8, 9.0], [42.9, 9.0], [43.0, 9.0], [43.1, 9.0], [43.2, 9.0], [43.3, 9.0], [43.4, 9.0], [43.5, 9.0], [43.6, 9.0], [43.7, 9.0], [43.8, 9.0], [43.9, 9.0], [44.0, 9.0], [44.1, 9.0], [44.2, 9.0], [44.3, 9.0], [44.4, 9.0], [44.5, 9.0], [44.6, 9.0], [44.7, 9.0], [44.8, 9.0], [44.9, 9.0], [45.0, 9.0], [45.1, 9.0], [45.2, 9.0], [45.3, 9.0], [45.4, 9.0], [45.5, 9.0], [45.6, 9.0], [45.7, 9.0], [45.8, 9.0], [45.9, 9.0], [46.0, 9.0], [46.1, 9.0], [46.2, 9.0], [46.3, 9.0], [46.4, 9.0], [46.5, 9.0], [46.6, 9.0], [46.7, 9.0], [46.8, 9.0], [46.9, 9.0], [47.0, 9.0], [47.1, 9.0], [47.2, 9.0], [47.3, 9.0], [47.4, 9.0], [47.5, 9.0], [47.6, 9.0], [47.7, 10.0], [47.8, 10.0], [47.9, 10.0], [48.0, 10.0], [48.1, 10.0], [48.2, 10.0], [48.3, 10.0], [48.4, 10.0], [48.5, 10.0], [48.6, 10.0], [48.7, 10.0], [48.8, 10.0], [48.9, 10.0], [49.0, 10.0], [49.1, 10.0], [49.2, 10.0], [49.3, 10.0], [49.4, 10.0], [49.5, 10.0], [49.6, 10.0], [49.7, 10.0], [49.8, 10.0], [49.9, 10.0], [50.0, 10.0], [50.1, 10.0], [50.2, 10.0], [50.3, 10.0], [50.4, 10.0], [50.5, 10.0], [50.6, 10.0], [50.7, 10.0], [50.8, 10.0], [50.9, 10.0], [51.0, 10.0], [51.1, 10.0], [51.2, 10.0], [51.3, 10.0], [51.4, 10.0], [51.5, 10.0], [51.6, 10.0], [51.7, 10.0], [51.8, 10.0], [51.9, 10.0], [52.0, 10.0], [52.1, 10.0], [52.2, 10.0], [52.3, 10.0], [52.4, 10.0], [52.5, 10.0], [52.6, 10.0], [52.7, 10.0], [52.8, 10.0], [52.9, 10.0], [53.0, 10.0], [53.1, 10.0], [53.2, 10.0], [53.3, 10.0], [53.4, 10.0], [53.5, 10.0], [53.6, 10.0], [53.7, 10.0], [53.8, 10.0], [53.9, 10.0], [54.0, 10.0], [54.1, 10.0], [54.2, 10.0], [54.3, 10.0], [54.4, 10.0], [54.5, 10.0], [54.6, 10.0], [54.7, 10.0], [54.8, 10.0], [54.9, 10.0], [55.0, 10.0], [55.1, 10.0], [55.2, 10.0], [55.3, 10.0], [55.4, 11.0], [55.5, 11.0], [55.6, 11.0], [55.7, 11.0], [55.8, 11.0], [55.9, 11.0], [56.0, 11.0], [56.1, 11.0], [56.2, 11.0], [56.3, 11.0], [56.4, 11.0], [56.5, 11.0], [56.6, 11.0], [56.7, 11.0], [56.8, 11.0], [56.9, 11.0], [57.0, 11.0], [57.1, 12.0], [57.2, 12.0], [57.3, 12.0], [57.4, 12.0], [57.5, 12.0], [57.6, 13.0], [57.7, 14.0], [57.8, 14.0], [57.9, 21.0], [58.0, 26.0], [58.1, 33.0], [58.2, 37.0], [58.3, 37.0], [58.4, 37.0], [58.5, 56.0], [58.6, 63.0], [58.7, 83.0], [58.8, 93.0], [58.9, 111.0], [59.0, 123.0], [59.1, 142.0], [59.2, 153.0], [59.3, 172.0], [59.4, 183.0], [59.5, 203.0], [59.6, 213.0], [59.7, 222.0], [59.8, 230.0], [59.9, 260.0], [60.0, 291.0], [60.1, 317.0], [60.2, 346.0], [60.3, 377.0], [60.4, 407.0], [60.5, 431.0], [60.6, 463.0], [60.7, 489.0], [60.8, 520.0], [60.9, 553.0], [61.0, 580.0], [61.1, 610.0], [61.2, 638.0], [61.3, 670.0], [61.4, 701.0], [61.5, 729.0], [61.6, 762.0], [61.7, 792.0], [61.8, 824.0], [61.9, 847.0], [62.0, 882.0], [62.1, 913.0], [62.2, 944.0], [62.3, 969.0], [62.4, 997.0], [62.5, 1034.0], [62.6, 1063.0], [62.7, 1089.0], [62.8, 1119.0], [62.9, 1151.0], [63.0, 1183.0], [63.1, 1211.0], [63.2, 1242.0], [63.3, 1273.0], [63.4, 1304.0], [63.5, 1330.0], [63.6, 1363.0], [63.7, 1393.0], [63.8, 1423.0], [63.9, 1448.0], [64.0, 1477.0], [64.1, 1507.0], [64.2, 1542.0], [64.3, 1569.0], [64.4, 1599.0], [64.5, 1630.0], [64.6, 1661.0], [64.7, 1690.0], [64.8, 1720.0], [64.9, 1753.0], [65.0, 1784.0], [65.1, 1810.0], [65.2, 1843.0], [65.3, 1873.0], [65.4, 1928.0], [65.5, 1957.0], [65.6, 1989.0], [65.7, 2022.0], [65.8, 2048.0], [65.9, 2078.0], [66.0, 2110.0], [66.1, 2140.0], [66.2, 2170.0], [66.3, 2201.0], [66.4, 2232.0], [66.5, 2264.0], [66.6, 2290.0], [66.7, 2322.0], [66.8, 2352.0], [66.9, 2385.0], [67.0, 2408.0], [67.1, 2439.0], [67.2, 2469.0], [67.3, 2503.0], [67.4, 2528.0], [67.5, 2561.0], [67.6, 2590.0], [67.7, 2621.0], [67.8, 2653.0], [67.9, 2681.0], [68.0, 2714.0], [68.1, 2744.0], [68.2, 2768.0], [68.3, 2803.0], [68.4, 2833.0], [68.5, 2863.0], [68.6, 2890.0], [68.7, 2918.0], [68.8, 2950.0], [68.9, 2983.0], [69.0, 3009.0], [69.1, 3041.0], [69.2, 3066.0], [69.3, 3100.0], [69.4, 3131.0], [69.5, 3159.0], [69.6, 3193.0], [69.7, 3224.0], [69.8, 3250.0], [69.9, 3284.0], [70.0, 3313.0], [70.1, 3342.0], [70.2, 3369.0], [70.3, 3398.0], [70.4, 3429.0], [70.5, 3463.0], [70.6, 3488.0], [70.7, 3520.0], [70.8, 3547.0], [70.9, 3579.0], [71.0, 3609.0], [71.1, 3638.0], [71.2, 3672.0], [71.3, 3703.0], [71.4, 3729.0], [71.5, 3764.0], [71.6, 3793.0], [71.7, 3822.0], [71.8, 3851.0], [71.9, 3877.0], [72.0, 3908.0], [72.1, 3941.0], [72.2, 3968.0], [72.3, 3999.0], [72.4, 4025.0], [72.5, 4059.0], [72.6, 4089.0], [72.7, 4119.0], [72.8, 4153.0], [72.9, 4183.0], [73.0, 4210.0], [73.1, 4243.0], [73.2, 4273.0], [73.3, 4302.0], [73.4, 4328.0], [73.5, 4360.0], [73.6, 4388.0], [73.7, 4423.0], [73.8, 4447.0], [73.9, 4479.0], [74.0, 4506.0], [74.1, 4541.0], [74.2, 4570.0], [74.3, 4601.0], [74.4, 4634.0], [74.5, 4665.0], [74.6, 4689.0], [74.7, 4723.0], [74.8, 4752.0], [74.9, 4782.0], [75.0, 4808.0], [75.1, 4839.0], [75.2, 4869.0], [75.3, 4903.0], [75.4, 4929.0], [75.5, 4960.0], [75.6, 4987.0], [75.7, 5020.0], [75.8, 5050.0], [75.9, 5081.0], [76.0, 5114.0], [76.1, 5143.0], [76.2, 5172.0], [76.3, 5203.0], [76.4, 5233.0], [76.5, 5264.0], [76.6, 5288.0], [76.7, 5317.0], [76.8, 5346.0], [76.9, 5382.0], [77.0, 5407.0], [77.1, 5440.0], [77.2, 5468.0], [77.3, 5502.0], [77.4, 5531.0], [77.5, 5560.0], [77.6, 5594.0], [77.7, 5624.0], [77.8, 5653.0], [77.9, 5683.0], [78.0, 5711.0], [78.1, 5744.0], [78.2, 5768.0], [78.3, 5796.0], [78.4, 5826.0], [78.5, 5862.0], [78.6, 5890.0], [78.7, 5920.0], [78.8, 5945.0], [78.9, 5980.0], [79.0, 6009.0], [79.1, 6040.0], [79.2, 6073.0], [79.3, 6101.0], [79.4, 6133.0], [79.5, 6162.0], [79.6, 6189.0], [79.7, 6223.0], [79.8, 6248.0], [79.9, 6278.0], [80.0, 6308.0], [80.1, 6341.0], [80.2, 6368.0], [80.3, 6400.0], [80.4, 6426.0], [80.5, 6459.0], [80.6, 6489.0], [80.7, 6520.0], [80.8, 6553.0], [80.9, 6583.0], [81.0, 6614.0], [81.1, 6644.0], [81.2, 6670.0], [81.3, 6704.0], [81.4, 6728.0], [81.5, 6758.0], [81.6, 6787.0], [81.7, 6822.0], [81.8, 6849.0], [81.9, 6880.0], [82.0, 6907.0], [82.1, 6941.0], [82.2, 6970.0], [82.3, 6999.0], [82.4, 7032.0], [82.5, 7061.0], [82.6, 7093.0], [82.7, 7124.0], [82.8, 7150.0], [82.9, 7183.0], [83.0, 7208.0], [83.1, 7237.0], [83.2, 7268.0], [83.3, 7303.0], [83.4, 7330.0], [83.5, 7358.0], [83.6, 7386.0], [83.7, 7421.0], [83.8, 7451.0], [83.9, 7481.0], [84.0, 7514.0], [84.1, 7544.0], [84.2, 7573.0], [84.3, 7603.0], [84.4, 7629.0], [84.5, 7663.0], [84.6, 7688.0], [84.7, 7718.0], [84.8, 7749.0], [84.9, 7756.0], [85.0, 7784.0], [85.1, 7811.0], [85.2, 7838.0], [85.3, 7869.0], [85.4, 7930.0], [85.5, 7961.0], [85.6, 7994.0], [85.7, 8020.0], [85.8, 8052.0], [85.9, 8082.0], [86.0, 8108.0], [86.1, 8142.0], [86.2, 8167.0], [86.3, 8197.0], [86.4, 8227.0], [86.5, 8236.0], [86.6, 8263.0], [86.7, 8290.0], [86.8, 8317.0], [86.9, 8347.0], [87.0, 8410.0], [87.1, 8440.0], [87.2, 8473.0], [87.3, 8502.0], [87.4, 8533.0], [87.5, 8564.0], [87.6, 8589.0], [87.7, 8623.0], [87.8, 8649.0], [87.9, 8678.0], [88.0, 8708.0], [88.1, 8715.0], [88.2, 8740.0], [88.3, 8769.0], [88.4, 8795.0], [88.5, 8826.0], [88.6, 8888.0], [88.7, 8919.0], [88.8, 8953.0], [88.9, 8982.0], [89.0, 9013.0], [89.1, 9042.0], [89.2, 9070.0], [89.3, 9102.0], [89.4, 9128.0], [89.5, 9159.0], [89.6, 9190.0], [89.7, 9195.0], [89.8, 9220.0], [89.9, 9249.0], [90.0, 9276.0], [90.1, 9305.0], [90.2, 9369.0], [90.3, 9398.0], [90.4, 9432.0], [90.5, 9463.0], [90.6, 9494.0], [90.7, 9523.0], [90.8, 9549.0], [90.9, 9579.0], [91.0, 9607.0], [91.1, 9637.0], [91.2, 9670.0], [91.3, 9676.0], [91.4, 9697.0], [91.5, 9730.0], [91.6, 9757.0], [91.7, 9788.0], [91.8, 9849.0], [91.9, 9879.0], [92.0, 9911.0], [92.1, 9942.0], [92.2, 9973.0], [92.3, 10004.0], [92.4, 10029.0], [92.5, 10060.0], [92.6, 10089.0], [92.7, 10092.0], [92.8, 10119.0], [92.9, 10121.0], [93.0, 10150.0], [93.1, 10151.0], [93.2, 10157.0], [93.3, 10180.0], [93.4, 10181.0], [93.5, 10210.0], [93.6, 10212.0], [93.7, 10237.0], [93.8, 10242.0], [93.9, 10257.0], [94.0, 10271.0], [94.1, 10300.0], [94.2, 10331.0], [94.3, 10361.0], [94.4, 10392.0], [94.5, 11985.0], [94.6, 12007.0], [94.7, 12008.0], [94.8, 12008.0], [94.9, 12008.0], [95.0, 12009.0], [95.1, 12009.0], [95.2, 12009.0], [95.3, 12009.0], [95.4, 12009.0], [95.5, 12010.0], [95.6, 12010.0], [95.7, 12010.0], [95.8, 12011.0], [95.9, 12011.0], [96.0, 12011.0], [96.1, 12011.0], [96.2, 12011.0], [96.3, 12011.0], [96.4, 12011.0], [96.5, 12011.0], [96.6, 12011.0], [96.7, 12012.0], [96.8, 12012.0], [96.9, 12012.0], [97.0, 12012.0], [97.1, 12012.0], [97.2, 12013.0], [97.3, 12015.0], [97.4, 12040.0], [97.5, 12041.0], [97.6, 12042.0], [97.7, 12072.0], [97.8, 12073.0], [97.9, 12076.0], [98.0, 12102.0], [98.1, 12103.0], [98.2, 12128.0], [98.3, 12132.0], [98.4, 12159.0], [98.5, 12160.0], [98.6, 12186.0], [98.7, 12192.0], [98.8, 12222.0], [98.9, 12251.0], [99.0, 12665.0], [99.1, 13634.0], [99.2, 14609.0], [99.3, 15579.0], [99.4, 16547.0], [99.5, 17520.0], [99.6, 18495.0], [99.7, 19462.0], [99.8, 20439.0], [99.9, 21402.0]], "isOverall": false, "label": "/user/register", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 588.0, "series": [{"data": [[0.0, 588.0], [100.0, 6.0], [200.0, 6.0], [300.0, 3.0], [400.0, 4.0], [500.0, 3.0], [600.0, 3.0], [700.0, 4.0], [800.0, 3.0], [900.0, 4.0], [1000.0, 3.0], [1100.0, 3.0], [1200.0, 3.0], [1300.0, 4.0], [1400.0, 3.0], [1500.0, 4.0], [1600.0, 3.0], [1700.0, 3.0], [1800.0, 3.0], [1900.0, 4.0], [2000.0, 3.0], [2100.0, 3.0], [2200.0, 4.0], [2300.0, 3.0], [2400.0, 3.0], [2500.0, 4.0], [2600.0, 3.0], [2700.0, 3.0], [2800.0, 4.0], [2900.0, 3.0], [3000.0, 3.0], [3100.0, 4.0], [3300.0, 4.0], [3200.0, 3.0], [3400.0, 3.0], [3500.0, 3.0], [3700.0, 4.0], [3600.0, 3.0], [3800.0, 3.0], [3900.0, 4.0], [4000.0, 3.0], [4300.0, 4.0], [4200.0, 3.0], [4100.0, 3.0], [4500.0, 3.0], [4400.0, 3.0], [4600.0, 4.0], [4800.0, 3.0], [4700.0, 3.0], [4900.0, 4.0], [5000.0, 3.0], [5100.0, 3.0], [5300.0, 3.0], [5200.0, 4.0], [5400.0, 3.0], [5500.0, 4.0], [5600.0, 3.0], [5700.0, 4.0], [5800.0, 3.0], [5900.0, 3.0], [6100.0, 4.0], [6000.0, 3.0], [6300.0, 3.0], [6200.0, 3.0], [6400.0, 4.0], [6600.0, 3.0], [6500.0, 3.0], [6900.0, 4.0], [6700.0, 4.0], [6800.0, 3.0], [7100.0, 3.0], [7000.0, 3.0], [7300.0, 4.0], [7200.0, 3.0], [7400.0, 3.0], [7600.0, 4.0], [7500.0, 3.0], [7700.0, 4.0], [7800.0, 3.0], [7900.0, 3.0], [8100.0, 4.0], [8000.0, 3.0], [8700.0, 5.0], [8200.0, 4.0], [8300.0, 2.0], [8600.0, 3.0], [8500.0, 4.0], [8400.0, 3.0], [9100.0, 5.0], [8800.0, 2.0], [9200.0, 3.0], [8900.0, 3.0], [9000.0, 3.0], [9600.0, 5.0], [9700.0, 3.0], [9300.0, 3.0], [9500.0, 3.0], [9400.0, 3.0], [10200.0, 6.0], [10100.0, 7.0], [10000.0, 5.0], [9800.0, 2.0], [9900.0, 3.0], [10300.0, 4.0], [12000.0, 34.0], [12100.0, 8.0], [12200.0, 2.0], [11900.0, 1.0], [12600.0, 1.0], [13600.0, 1.0], [14600.0, 1.0], [15500.0, 1.0], [16500.0, 1.0], [17500.0, 1.0], [18400.0, 1.0], [19400.0, 1.0], [20400.0, 1.0], [21400.0, 1.0]], "isOverall": false, "label": "/user/register", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 368.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 632.0, "series": [{"data": [[0.0, 368.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [[3.0, 632.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.740312937E12, "maxY": 402.0, "series": [{"data": [[1.740312948E12, 1.0], [1.740312969E12, 3.0], [1.740312947E12, 1.0], [1.74031297E12, 2.0], [1.740312945E12, 1.0], [1.740312966E12, 6.911764705882353], [1.740312968E12, 4.0], [1.740312946E12, 1.0], [1.740312967E12, 5.9655172413793105], [1.740312964E12, 8.885714285714286], [1.740312942E12, 1.0], [1.740312963E12, 9.911764705882353], [1.740312944E12, 1.0], [1.740312965E12, 7.9411764705882355], [1.740312943E12, 1.0], [1.74031294E12, 1.0], [1.740312961E12, 262.2014742014743], [1.740312939E12, 1.0], [1.740312941E12, 1.0], [1.740312962E12, 12.452380952380953], [1.740312937E12, 2.5], [1.74031296E12, 402.0], [1.740312938E12, 1.0], [1.740312971E12, 1.0]], "isOverall": false, "label": "OTUS", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.740312971E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 6.0, "minX": 1.0, "maxY": 20439.0, "series": [{"data": [[2.0, 20439.0], [3.0, 19462.0], [4.0, 4651.5], [5.0, 17520.0], [6.0, 541.3225806451615], [7.0, 8.787878787878787], [8.0, 846.6111111111109], [9.0, 406.35294117647055], [10.0, 6.058823529411764], [11.0, 1033.5416666666665], [12.0, 6008.0], [13.0, 6009.0], [14.0, 6009.5], [15.0, 6008.5], [16.0, 6007.5], [17.0, 6007.5], [18.0, 6007.5], [19.0, 6007.5], [20.0, 6008.5], [21.0, 6009.0], [22.0, 6006.5], [23.0, 6006.5], [24.0, 6006.5], [25.0, 6007.5], [26.0, 6008.0], [27.0, 6006.5], [28.0, 6006.5], [29.0, 6008.5], [30.0, 6008.0], [31.0, 6008.0], [33.0, 6007.5], [32.0, 6008.0], [35.0, 6007.0], [34.0, 6007.5], [36.0, 6.0], [43.0, 123.0], [45.0, 11.666666666666666], [44.0, 12007.0], [47.0, 203.0], [46.0, 56.0], [49.0, 172.0], [48.0, 83.0], [50.0, 142.0], [51.0, 10795.000000000002], [54.0, 223.0], [153.0, 361.75], [223.0, 8047.8], [222.0, 4933.5], [221.0, 3093.6666666666665], [219.0, 4678.5], [218.0, 6073.0], [217.0, 4003.6], [231.0, 553.0], [230.0, 4606.875], [229.0, 5987.666666666667], [228.0, 5732.125], [226.0, 5130.000000000001], [225.0, 6654.6], [224.0, 4634.0], [239.0, 5096.071428571429], [238.0, 5458.200000000001], [235.0, 1034.0], [234.0, 824.0], [232.0, 3463.0], [246.0, 4112.0], [245.0, 4562.444444444444], [242.0, 5616.6], [240.0, 7332.333333333333], [254.0, 762.0], [253.0, 8982.0], [250.0, 1542.0], [248.0, 12073.0], [269.0, 5172.0], [268.0, 2502.0], [265.0, 882.0], [262.0, 5133.5], [258.0, 6402.0], [279.0, 9911.0], [303.0, 7563.25], [301.0, 2201.0], [318.0, 7150.0], [319.0, 3764.571428571429], [317.0, 6676.0], [315.0, 6575.333333333333], [314.0, 2170.0], [313.0, 6970.0], [312.0, 4891.0], [311.0, 3609.0], [310.0, 6880.0], [309.0, 6122.75], [308.0, 7481.0], [332.0, 3442.0], [330.0, 6778.181818181819], [329.0, 7479.5], [328.0, 5363.0], [326.0, 3890.6666666666665], [325.0, 7150.0], [324.0, 3965.4285714285716], [321.0, 3754.6], [320.0, 2561.0], [350.0, 1119.0], [351.0, 3575.0], [349.0, 4875.75], [339.0, 6657.0], [338.0, 4519.333333333334], [336.0, 4570.0], [347.0, 6489.0], [346.0, 7989.0], [344.0, 5919.0], [343.0, 8109.5], [342.0, 4530.0], [340.0, 5357.0], [366.0, 5879.714285714285], [367.0, 4186.714285714285], [365.0, 4807.5], [363.0, 2078.0], [362.0, 5317.0], [360.0, 5528.0], [359.0, 5828.333333333333], [356.0, 1507.0], [355.0, 8649.0], [353.0, 12040.0], [352.0, 4972.5], [377.0, 7358.0], [376.0, 7342.0], [375.0, 6901.666666666667], [374.0, 7386.0], [373.0, 6307.25], [371.0, 7363.2], [370.0, 7248.333333333333], [369.0, 7869.0], [368.0, 6437.0], [393.0, 9401.57142857143], [391.0, 7500.0], [402.0, 10391.333333333332], [1.0, 66.59128065395096]], "isOverall": false, "label": "/user/register", "isController": false}, {"data": [[113.77400000000009, 2603.6740000000004]], "isOverall": false, "label": "/user/register-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 402.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 111.0, "minX": 1.740312937E12, "maxY": 150997.0, "series": [{"data": [[1.740312948E12, 5621.0], [1.740312969E12, 111.0], [1.740312947E12, 6270.0], [1.74031297E12, 111.0], [1.740312945E12, 6270.0], [1.740312966E12, 3774.0], [1.740312968E12, 111.0], [1.740312946E12, 6460.0], [1.740312967E12, 3219.0], [1.740312964E12, 3885.0], [1.740312942E12, 6270.0], [1.740312963E12, 3774.0], [1.740312944E12, 6270.0], [1.740312965E12, 3774.0], [1.740312943E12, 6460.0], [1.74031294E12, 6460.0], [1.740312961E12, 45177.0], [1.740312939E12, 6270.0], [1.740312941E12, 6270.0], [1.740312962E12, 4662.0], [1.740312937E12, 1140.0], [1.74031296E12, 1332.0], [1.740312938E12, 6270.0], [1.740312971E12, 111.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.740312948E12, 11130.0], [1.740312969E12, 371.0], [1.740312947E12, 12243.0], [1.74031297E12, 371.0], [1.740312945E12, 12243.0], [1.740312966E12, 12614.0], [1.740312968E12, 371.0], [1.740312946E12, 12614.0], [1.740312967E12, 10759.0], [1.740312964E12, 12985.0], [1.740312942E12, 12243.0], [1.740312963E12, 12614.0], [1.740312944E12, 12243.0], [1.740312965E12, 12614.0], [1.740312943E12, 12614.0], [1.74031294E12, 12614.0], [1.740312961E12, 150997.0], [1.740312939E12, 12243.0], [1.740312941E12, 12243.0], [1.740312962E12, 15582.0], [1.740312937E12, 2226.0], [1.74031296E12, 4452.0], [1.740312938E12, 12243.0], [1.740312971E12, 371.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.740312971E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 7.454545454545453, "minX": 1.740312937E12, "maxY": 21402.0, "series": [{"data": [[1.740312948E12, 8.033333333333335], [1.740312969E12, 19462.0], [1.740312947E12, 7.454545454545453], [1.74031297E12, 20439.0], [1.740312945E12, 8.666666666666668], [1.740312966E12, 494.94117647058823], [1.740312968E12, 18495.0], [1.740312946E12, 8.352941176470589], [1.740312967E12, 611.9310344827586], [1.740312964E12, 422.9714285714286], [1.740312942E12, 8.606060606060607], [1.740312963E12, 406.70588235294116], [1.740312944E12, 8.151515151515154], [1.740312965E12, 466.55882352941177], [1.740312943E12, 7.970588235294118], [1.74031294E12, 8.617647058823527], [1.740312961E12, 5425.103194103199], [1.740312939E12, 8.727272727272725], [1.740312941E12, 8.93939393939394], [1.740312962E12, 2593.95238095238], [1.740312937E12, 22.666666666666668], [1.74031296E12, 10391.333333333332], [1.740312938E12, 7.727272727272729], [1.740312971E12, 21402.0]], "isOverall": false, "label": "/user/register", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.740312971E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 7.454545454545453, "minX": 1.740312937E12, "maxY": 21402.0, "series": [{"data": [[1.740312948E12, 7.999999999999998], [1.740312969E12, 19462.0], [1.740312947E12, 7.454545454545453], [1.74031297E12, 20439.0], [1.740312945E12, 8.606060606060607], [1.740312966E12, 494.94117647058823], [1.740312968E12, 18495.0], [1.740312946E12, 8.323529411764705], [1.740312967E12, 611.9310344827586], [1.740312964E12, 422.9714285714286], [1.740312942E12, 8.57575757575758], [1.740312963E12, 406.70588235294116], [1.740312944E12, 8.121212121212118], [1.740312965E12, 466.55882352941177], [1.740312943E12, 7.9411764705882355], [1.74031294E12, 8.588235294117647], [1.740312961E12, 5425.095823095826], [1.740312939E12, 8.696969696969697], [1.740312941E12, 8.93939393939394], [1.740312962E12, 2593.95238095238], [1.740312937E12, 22.666666666666668], [1.74031296E12, 10391.333333333332], [1.740312938E12, 7.727272727272729], [1.740312971E12, 21402.0]], "isOverall": false, "label": "/user/register", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.740312971E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.0, "minX": 1.740312937E12, "maxY": 6.666666666666666, "series": [{"data": [[1.740312948E12, 0.8], [1.740312969E12, 1.0], [1.740312947E12, 0.4545454545454546], [1.74031297E12, 0.0], [1.740312945E12, 0.9393939393939394], [1.740312966E12, 0.7647058823529413], [1.740312968E12, 1.0], [1.740312946E12, 0.7058823529411764], [1.740312967E12, 0.8620689655172413], [1.740312964E12, 0.5999999999999999], [1.740312942E12, 0.6666666666666665], [1.740312963E12, 0.6176470588235294], [1.740312944E12, 0.6666666666666664], [1.740312965E12, 0.7058823529411766], [1.740312943E12, 0.6764705882352942], [1.74031294E12, 0.8823529411764705], [1.740312961E12, 0.8624078624078624], [1.740312939E12, 0.8787878787878787], [1.740312941E12, 1.090909090909091], [1.740312962E12, 0.5476190476190478], [1.740312937E12, 6.666666666666666], [1.74031296E12, 0.9166666666666666], [1.740312938E12, 0.7272727272727274], [1.740312971E12, 1.0]], "isOverall": false, "label": "/user/register", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.740312971E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 5.0, "minX": 1.740312937E12, "maxY": 37.0, "series": [{"data": [[1.740312937E12, 37.0], [1.740312948E12, 11.0], [1.740312947E12, 11.0], [1.740312938E12, 10.0], [1.740312945E12, 11.0], [1.740312946E12, 13.0], [1.740312942E12, 21.0], [1.740312944E12, 12.0], [1.740312943E12, 10.0], [1.74031294E12, 11.0], [1.740312939E12, 11.0], [1.740312941E12, 12.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.740312937E12, 37.0], [1.740312948E12, 10.0], [1.740312947E12, 9.0], [1.740312938E12, 9.600000000000001], [1.740312945E12, 10.0], [1.740312946E12, 11.0], [1.740312942E12, 10.0], [1.740312944E12, 10.0], [1.740312943E12, 9.0], [1.74031294E12, 11.0], [1.740312939E12, 10.0], [1.740312941E12, 10.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.740312937E12, 37.0], [1.740312948E12, 11.0], [1.740312947E12, 11.0], [1.740312938E12, 10.0], [1.740312945E12, 11.0], [1.740312946E12, 13.0], [1.740312942E12, 21.0], [1.740312944E12, 12.0], [1.740312943E12, 10.0], [1.74031294E12, 11.0], [1.740312939E12, 11.0], [1.740312941E12, 12.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.740312937E12, 37.0], [1.740312948E12, 11.0], [1.740312947E12, 9.599999999999994], [1.740312938E12, 10.0], [1.740312945E12, 10.299999999999997], [1.740312946E12, 11.5], [1.740312942E12, 14.699999999999974], [1.740312944E12, 11.299999999999997], [1.740312943E12, 10.0], [1.74031294E12, 11.0], [1.740312939E12, 10.299999999999997], [1.740312941E12, 11.299999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.740312937E12, 5.0], [1.740312948E12, 6.0], [1.740312947E12, 5.0], [1.740312938E12, 5.0], [1.740312945E12, 6.0], [1.740312946E12, 5.0], [1.740312942E12, 5.0], [1.740312944E12, 6.0], [1.740312943E12, 5.0], [1.74031294E12, 5.0], [1.740312939E12, 6.0], [1.740312941E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.740312937E12, 24.5], [1.740312948E12, 9.0], [1.740312947E12, 7.0], [1.740312938E12, 8.0], [1.740312945E12, 9.0], [1.740312946E12, 9.0], [1.740312942E12, 9.0], [1.740312944E12, 8.0], [1.740312943E12, 8.0], [1.74031294E12, 9.0], [1.740312939E12, 9.0], [1.740312941E12, 9.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.740312948E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
    data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 19950.5, "series": [{"data": [[33.0, 8.0], [34.0, 8.0], [6.0, 24.5], [30.0, 9.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 19950.5], [34.0, 8.0], [35.0, 5.0], [42.0, 5.0], [12.0, 10256.5], [407.0, 5288.0], [29.0, 9.0], [30.0, 3.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 407.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 19950.5, "series": [{"data": [[33.0, 8.0], [34.0, 8.0], [6.0, 24.5], [30.0, 9.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 19950.5], [34.0, 8.0], [35.0, 5.0], [42.0, 5.0], [12.0, 10256.5], [407.0, 5288.0], [29.0, 9.0], [30.0, 3.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 407.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.740312937E12, "maxY": 34.0, "series": [{"data": [[1.740312948E12, 34.0], [1.740312947E12, 33.0], [1.740312949E12, 33.0], [1.740312945E12, 33.0], [1.740312946E12, 34.0], [1.740312942E12, 34.0], [1.740312944E12, 33.0], [1.740312943E12, 33.0], [1.74031294E12, 33.0], [1.740312939E12, 34.0], [1.740312941E12, 33.0], [1.740312958E12, 33.0], [1.74031296E12, 34.0], [1.740312959E12, 33.0], [1.740312956E12, 33.0], [1.740312955E12, 33.0], [1.740312957E12, 34.0], [1.740312953E12, 33.0], [1.740312954E12, 34.0], [1.74031295E12, 33.0], [1.740312952E12, 33.0], [1.740312951E12, 34.0], [1.740312966E12, 34.0], [1.740312967E12, 27.0], [1.740312964E12, 34.0], [1.740312963E12, 33.0], [1.740312965E12, 33.0], [1.740312961E12, 33.0], [1.740312962E12, 33.0], [1.740312937E12, 6.0], [1.740312938E12, 33.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.740312967E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 1.0, "minX": 1.740312937E12, "maxY": 407.0, "series": [{"data": [[1.740312937E12, 6.0], [1.740312948E12, 29.0], [1.740312947E12, 33.0], [1.740312938E12, 33.0], [1.740312945E12, 33.0], [1.740312946E12, 34.0], [1.740312942E12, 33.0], [1.740312944E12, 33.0], [1.740312943E12, 34.0], [1.74031294E12, 34.0], [1.740312939E12, 33.0], [1.740312941E12, 33.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.740312948E12, 1.0], [1.740312969E12, 1.0], [1.74031297E12, 1.0], [1.740312966E12, 34.0], [1.740312968E12, 1.0], [1.740312967E12, 29.0], [1.740312964E12, 35.0], [1.740312963E12, 34.0], [1.740312965E12, 34.0], [1.740312961E12, 407.0], [1.740312962E12, 42.0], [1.74031296E12, 12.0], [1.740312971E12, 1.0]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.740312971E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 1.0, "minX": 1.740312937E12, "maxY": 407.0, "series": [{"data": [[1.740312937E12, 6.0], [1.740312948E12, 29.0], [1.740312947E12, 33.0], [1.740312938E12, 33.0], [1.740312945E12, 33.0], [1.740312946E12, 34.0], [1.740312942E12, 33.0], [1.740312944E12, 33.0], [1.740312943E12, 34.0], [1.74031294E12, 34.0], [1.740312939E12, 33.0], [1.740312941E12, 33.0]], "isOverall": false, "label": "/user/register-success", "isController": false}, {"data": [[1.740312948E12, 1.0], [1.740312969E12, 1.0], [1.74031297E12, 1.0], [1.740312966E12, 34.0], [1.740312968E12, 1.0], [1.740312967E12, 29.0], [1.740312964E12, 35.0], [1.740312963E12, 34.0], [1.740312965E12, 34.0], [1.740312961E12, 407.0], [1.740312962E12, 42.0], [1.74031296E12, 12.0], [1.740312971E12, 1.0]], "isOverall": false, "label": "/user/register-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.740312971E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 1.0, "minX": 1.740312937E12, "maxY": 407.0, "series": [{"data": [[1.740312937E12, 6.0], [1.740312948E12, 29.0], [1.740312947E12, 33.0], [1.740312938E12, 33.0], [1.740312945E12, 33.0], [1.740312946E12, 34.0], [1.740312942E12, 33.0], [1.740312944E12, 33.0], [1.740312943E12, 34.0], [1.74031294E12, 34.0], [1.740312939E12, 33.0], [1.740312941E12, 33.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.740312948E12, 1.0], [1.740312969E12, 1.0], [1.74031297E12, 1.0], [1.740312966E12, 34.0], [1.740312968E12, 1.0], [1.740312967E12, 29.0], [1.740312964E12, 35.0], [1.740312963E12, 34.0], [1.740312965E12, 34.0], [1.740312961E12, 407.0], [1.740312962E12, 42.0], [1.74031296E12, 12.0], [1.740312971E12, 1.0]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.740312971E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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

