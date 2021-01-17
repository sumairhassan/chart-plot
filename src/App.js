import "./App.css";
import React, { Component } from "react";
import Chart from "./components/Chart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "Oslo",
          "Stavanger",
          "Bergen",
          "Trondheim",
          "Drammen",
          "Kongsberg",
          "Tromso",
        ],
        datasets: [
          {
            label: "Population 2014",
            data: [634293, 130754, 271949, 182035, 66214, 26406, 71590],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(75,192,192,0.6)",
              "rgba(153,102,255,0.6)",
              "rgba(255,159,64,0.6)",
              "rgba(100,99,132,0.6)",
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Chart chartData={this.state.chartData} legendPosition="bottom" />
        </header>
      </div>
    );
  }
}

export default App;
