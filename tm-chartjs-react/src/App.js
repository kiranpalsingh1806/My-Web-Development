import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Chart2 from "./components/Chart.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  componentWillUnmount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          'Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'
        ],
        datasets: [
          {
            label: 'Population',
            data: [
              617594,
              181045,
              153060,
              106519,
              105162,
              905072
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    })
  }


  render() {
    return (
      <div className="App">
        <Chart2 chartData={this.state.chartData} legendPosition="bottom" />
      </div>
    )
  }
}

export default App;
