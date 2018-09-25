import React, { Component } from "react";
import logo from "./logo.svg";
import { observer } from "mobx-react";
import LaunchStore from "./stores/LaunchStore";
import "semantic-ui-css/semantic.min.css";
import "./css/App.css";
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Header
} from "semantic-ui-react";

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
      resultsList = this.state.store.results.launches.map((launch, index) => (
        <TableRow key={index}>
          <TableCell>{launch.est_timestamp}</TableCell>
          <TableCell>{launch.location.name}</TableCell>
          <TableCell>{launch.rocket.name}</TableCell>
        </TableRow>
      ));
    }

    return (
      <div className="App">
        <Header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Global Launch Schedule</h1>
        </Header>
        <div className="site-content">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Location</TableHeaderCell>
                <TableHeaderCell>Rocket</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>{resultsList}</TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
