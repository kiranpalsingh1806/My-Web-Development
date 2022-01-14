import React, { Component } from "react";

import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto'

class Chart2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    };

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: "Largest cities in Massachussetts",
                            fontSize: 25
                        },
                        legend: {
                            display: this.state.displayLegend,
                            position: this.state.legendPosition
                        },
                    }}
                />
            </div>
        )
    }
}

export default Chart2;