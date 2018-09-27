import React, { Component } from "react";
import logo from "./logo.svg";
import { observer } from "mobx-react";
import LaunchStore from "./stores/LaunchStore";
import "semantic-ui-css/semantic.min.css";
import "./css/App.css";
import { Header } from "semantic-ui-react";
import { LaunchTable } from "./components/Grid/LaunchTable";
import { LaunchFilter } from "./components/Filter/LaunchFilter";
import { Footer } from "./components/Footer";

@observer
class App extends Component {
  state = {
    store: new LaunchStore()
  };

  componentDidMount() {
    this.state.store.getLaunches();
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Global Launch Schedule</h1>
        </Header>
        <div className="site-content">
          <LaunchFilter onFilter={this.state.store.getLaunches} />
          {this.state.store.results.launches ? (
            <LaunchTable results={this.state.store.results} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
