import React, { Component } from "react";
import { observer } from "mobx-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell
} from "semantic-ui-react";

@observer
export class LaunchTable extends Component {
  render() {
    let resultsList = this.props.results.launches.map((launch, index) => (
      <TableRow key={index}>
        <TableCell>{launch.est_timestamp}</TableCell>
        <TableCell>{launch.location.name}</TableCell>
        <TableCell>{launch.rocket.name}</TableCell>
      </TableRow>
    ));

    return (
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
    );
  }
}
