
import React from "react";
import Chart from "react-apexcharts";
export default class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [44, 55, 41],
      options: {
        chart: {
          type: 'donut',
          width:100,
       
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              height:800
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
       
         
        />
      </div>
    );
  }
}
