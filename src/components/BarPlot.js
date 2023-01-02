import ReactEcharts from "echarts-for-react"; 
import wineData from "./Wine-Data.json";


function BarPlot() { 


  var filterBy1 = [];
  filterBy1 = wineData.filter(type1 => type1.Alcohol < 2); // Filters the JSON object with key Alcohol and value 1 and assigns it to the array filterBy1.
  
  var malicAcid1 = [];
  for (var x =0; x< filterBy1.length ; x++) {
      malicAcid1[x] = (filterBy1[x]["Malic Acid"]); // Iterates over the array filterBy1 and inserts the value for key Malic Acid in the new array malicAcid1.
  };

  const averageOfType1 = malicAcid1.reduce((a, b) => a + b, 0) / malicAcid1.length; // Calculates the average of the Malic Acid by iterating over the array malicAcid1.





  var filterBy2 = [];
  filterBy2 = wineData.filter(type2 => type2.Alcohol>1 && type2.Alcohol< 3); // Filters the JSON object with key Alcohol and value 2 and assigns it to the array filterBy2.

  var malicAcid2 = [];
  for (var j = 0; j< filterBy2.length ; j++) {
      malicAcid2[j] = (filterBy2[j]["Malic Acid"]); // Iterates over the array filterBy2 and inserts the value for key Malic Acid in the new array malicAcid2.
  };

  const averageOfType2 = malicAcid2.reduce((a, b) => a + b, 0) / malicAcid2.length; // Calculates the average of the Malic Acid by iterating over the array malicAcid2.







  var filterBy3 = [];
  filterBy3 = wineData.filter(type3 => type3.Alcohol > 2 ); // Filters the JSON object with key Alcohol and value 3 and assigns it to the array filterBy3[].

  var malicAcid3 = [];
  for (var k =0; k< filterBy3.length ; k++) {
    malicAcid3[k] = (filterBy3[k]["Malic Acid"]); // Iterates over the array filterBy3[] and inserts the value for key Malic Acid in the new array malicAcid3[].
  };

  const averageOfType3 = malicAcid3.reduce((a, b) => a + b, 0) / malicAcid3.length; // Calculates the average of the Malic Acid by iterating over the array malicAcid3[].






    var data = [];

    for (var i =0; i< wineData.length ; i++) {                        // Iterates over the JSON object
      if (wineData[i].Alcohol === 1){                                 // If the value for the key Alcohol is equal to 1, executes the next line. Else skips to next condition.
        data[i] = ([ wineData[i].Alcohol, averageOfType1]);           // If passed, iterates through all the objects having key Alcohol with value 1, and stores the value in the data[] array. 
      }
      else if (wineData[i].Alcohol === 2) {
        data[i] = ([ wineData[i].Alcohol, averageOfType2]);           // Same here, with key and value pair of Alcohol and 2 respectively.
      }
      else {
        data[i] = ([ wineData[i].Alcohol, averageOfType3]);           // Same here, with key and value pair of Alcohol and 3 respectively.
      }
   };




    const option = {
        title: {
            text: 'Wine Malic Acid vs Alcohol Chart',
        },
        grid: {
            left: '3%',
            right: '7%',
            bottom: '7%',
            containLabel: true
          },
          tooltip: {
            showDelay: 0,
            formatter: function (params) {
                return (
                  params.seriesName +
                  ' :<br/>' +
                  params.name +
                  params.value 
                );
            },
            axisPointer: {
              show: true,
              type: 'cross',
              lineStyle: {
                type: 'dashed',
                width: 1
              }
            }
          },
        yAxis: [
            {
              type: 'value',
              name: 'Malic Acid',
              axisLabel: {
                formatter: '{value}'
              },
              splitLine: {
                show: true
              }
            }
          ],
          xAxis: [
            {
              type: 'value',
              name: 'Alcohol Class',
              axisLabel: {
                formatter: '{value}'
              },
              splitLine: {
                show: true
              }
            }
          ],
        series: [
            {
                name: 'Alcohol Class, Malic Acid Average',
                type: 'bar',
                barWidth: '5%',
                emphasis: {
                  focus: 'series'
                },
                data: data,         // Assigns the data.
              },
        ]
      };
return <ReactEcharts option={option} />;
} 
export default BarPlot;