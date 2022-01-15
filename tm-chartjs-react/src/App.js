import { render } from '@testing-library/react';
import BarChart from 'chartjs';
import { Component } from 'react';
import './App.css';
import Chart2 from "./components/Chart.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chart2 />
      </div>
    )
  }
}

export default App;
