import React from "react";
import ReactEcharts from "echarts-for-react"; 
import wineData from "./Wine-Data.json"



function ScatterPlot() { 

    var data = [];
    for (var i =0; i< wineData.length ; i++) {
      data[i] = ([wineData[i].Hue,wineData[i]["Color intensity"]]);
    }; // Iterates over the JSON object and returns an array which gets stored in our new array data.

    const option = {
    title: {
      text: 'Wine Color Intensity vs Hue Chart',
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
        name: 'Hue',
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
        name: 'Color Intensity',
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
        name: 'Color Intensity, Hue',
        type: 'scatter',
        emphasis: {
          focus: 'series'
        },
        data: data,       // Assigns the data.
      },
    ]
  };
return (
  <div>
    <ReactEcharts option={option} />
  </div>
);
} 
export default ScatterPlot;