import React from "react";
import { Container, Segment, Grid } from "semantic-ui-react";

export class Footer extends React.Component {
  render() {
    return (
      <Segment inverted vertical id="footer">
        <Container>
          <Grid stackable inverted divided>
            <Grid.Row columns={4}>
              <Grid.Column />
              <Grid.Column id="middle-footer-column" />
              <Grid.Column floated="right" textAlign="right">
                Copyright © {new Date().getUTCFullYear()}
                <br />
                Mark Liederbach
                <br />
                All Rights Reserved.
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
