import React, { Component } from "react";
import logo from "./logo.svg";
import { observer } from "mobx-react";
import LaunchStore from "./stores/LaunchStore";
import "semantic-ui-css/semantic.min.css";
import "./css/App.css";
import { Header } from "semantic-ui-react";
import { LaunchTable } from "./components/Grid/LaunchTable";

@observer
class App extends Component {
  state = {
    store: new LaunchStore()
  };

  componentDidMount() {
    this.state.store.getLaunches();
  }

  render() {
    let resultsList = [];
    if (this.state.store.results.launches) {
    }

    return (
      <div className="App">
        <Header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Global Launch Schedule</h1>
        </Header>
        <div className="site-content">
          {this.state.store.results.launches ? (
            <LaunchTable results={this.state.store.results} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
