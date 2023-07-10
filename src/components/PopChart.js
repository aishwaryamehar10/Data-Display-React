import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options : {
              chart : {
                background : '#f4f4f4',
                color : '#333'
              },
              xaxis : {
                categories : ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahemdabad', 'Chennai', 'kolkata', 'Surat', 'Pune', 'Jaipur']
              },
              plotOptions : {
                bar : {
                    horizontal : false,
                }
            },
            fill : {
                colors : ['#f44336']
            },
            dataLabels : {
                enabled :false
            }, 
            title : {
                text : 'Largest Indian Cities By Population',
                align : 'center',
                margin : 20,
                offsetY : 20,
                style : {
                    fontsize : '25px'
                }
            },
            },
            series : [{
                name : 'Population',
                data : [12442373,
                        11007835,
                        8425970,
                        6809970,
                        5570585,
                        4681087,
                        4486679,
                        4467797,
                        3115431,
                        3046163	]
            }]
        }       
    }

    onClick = () => {
        this.setState({
            options : {...this.state.options,
            plotOptions : {...this.state.options.plotOptions,
            bar : {...this.state.options.plotOptions.bar,
            horizontal : !this.state.options.plotOptions.bar.horizontal
            }
            }
        }})
    }


   render() {
    return (
        <React.Fragment>
          <Chart
             options = {this.state.options}
             series = {this.state.series}
             type = "bar"
             height = "450"
             width = "100%"
          />
          <button onClick = {this.onClick}>Change</button>   
        </React.Fragment>
    )
   }
}

export default PopChart;