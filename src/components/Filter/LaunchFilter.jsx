import React, { Component } from "react";
import { Form, Label, Input } from "semantic-ui-react";

export class LaunchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: ""
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onKeyUp = () => {
    this.props.onFilter({ name: this.state.filterValue });
  };

  render() {
    return (
      <Form>
        <Input
          focus
          placeholder="Filter by keyword..."
          name="filterValue"
          type="text"
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
        />
      </Form>
    );
  }
}
