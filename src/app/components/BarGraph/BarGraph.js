
import React from "react";
import Chart from "react-apexcharts";
export default class BarGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Inprogress",
          data: [44, 55, 41, 67, 22],
       
        },
        {
          name: "Completed",
          data: [13, 23, 20, 8, 13]
        },
      
      ],
      options: {
        colors:['#EF8700', '#059100'],
        chart: {
          type: "bar",
      
        
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
                labels:{
                  color:'white'
                }
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
         
          }
        },
        xaxis: {
          type: "string",
          categories: [
            "Query",
            "Provisioning",
            "Deprovisioning",
            "Scale In",
            "Scale Out",
         
          ],
          labels:{
            color:'white'
          }
        },
        legend: {
          position: "right",
          offsetY: 40,
          
        },
        fill: {
          opacity: 1
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
         
                 />
      </div>
    );
  }
}
