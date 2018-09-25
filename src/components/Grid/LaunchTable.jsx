import React, { Component } from "react";
import { observer } from "mobx-react";
import Moment from "react-moment";
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
        <TableCell>
          <Moment parse="YYYY-MM-DDTHH:mm:ss" format="ddd MMM DD YYYY h:mmA">
            {launch.est_timestamp}
          </Moment>
        </TableCell>
        <TableCell>
          {launch.missions && launch.missions.length
            ? launch.missions[0].agencies
              ? launch.missions[0].agencies[0].name
              : "None Provided"
            : "None provided"}
        </TableCell>
        <TableCell>{launch.name}</TableCell>
        <TableCell>{launch.location.name}</TableCell>
        <TableCell>{launch.rocket.name}</TableCell>
      </TableRow>
    ));

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Agency</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Location</TableHeaderCell>
            <TableHeaderCell>Rocket</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>{resultsList}</TableBody>
      </Table>
    );
  }
}
