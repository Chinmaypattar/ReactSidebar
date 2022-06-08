
import React from "react";
import Chart from "react-apexcharts";
export default class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [44, 55,10],
      options: {
        colors:['#EF8700', '#059100','#9D9D9D'],
        labels: ['Pending (6)', 'Available (3)', 'Disabled (1)'],
        chart: {
          type: 'donut',
          width:100,
          foreColor: 'white',
          fontFamily: 'Lato',
         
        },
        responsive: [{
          breakpoint: 80,
          options: {
            chart: {
              width: 200,
             
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
