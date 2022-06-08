
import React from "react";
import Chart from "react-apexcharts";
export default class BarGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Inprogress",
          data: [4, 5, 4, 2,2],
       
        },
        {
          name: "Completed",
          data: [1, 2, 2, 4,3]
        },
      
      ],
      options: {
        colors:['#EF8700', '#059100'],
        chart: {
          type: "bar",
          fontFamily: 'Lato',
          foreColor: 'white',
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        grid:{
          show: false,
         },
        yaxis: {
          min: 0,
          max: 10,
          tickAmount: 5
      },
        responsive: [
          {
            breakpoint: 580,
            options: {
              legend: {
                position: "bottom",
                // offsetX: -10,
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
          position: "bottom",
         
          
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
