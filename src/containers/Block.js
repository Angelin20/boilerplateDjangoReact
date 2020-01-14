import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Image,
  Responsive,
  Sidebar,
  Visibility,
  Container,
  Grid,
  Segment,
  Label,
  Form
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries
} from "react-vis";
import { DateInput } from "semantic-ui-calendar-react";
import { fetchCharts } from "../api";
import Series from "../containers/Series";

const handleChange = (event, { name, value }) => {
  //if (this.state.hasOwnProperty(name)) {
  //this.setState({ [name]: value });
  console.log({ [name]: value });
  //}
};

class HomepageLayout extends Component {
  constructor() {
    super();
    this.state = {
      charts: [],
      is_fetching: true
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    let data = fetchCharts();
    this.setState({ charts: data, is_fetching: false });
    console.log(data);
  }
  render() {
    return (
      <div className="book">
        <div className="page">
          <div className="header">
            <Image src="/membrete_cabecera.png" />
          </div>
          <Container style={{ padding: 10 }}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={13}>
                  <Segment padded>
                    <Label attached="top" style={{ fontSize: 18 }}>
                      Grafica organizada por situación (Ciclos de tiempo)
                    </Label>
                    <XYPlot width={835} height={160} stackBy="x">
                      <VerticalGridLines />
                      <HorizontalGridLines />
                      <XAxis />
                      <YAxis />
                      <HorizontalBarSeries
                        color="#56378A"
                        data={[
                          { y: 1, x: 10 },
                          { y: 2, x: 5 },
                          { y: 3, x: 15 },
                          { y: 4, x: 10 },
                          { y: 5, x: 5 },
                          { y: 6, x: 15 }
                        ]}
                      />
                      <HorizontalBarSeries
                        color="#e4312c"
                        data={[
                          { y: 1, x: 12 },
                          { y: 2, x: 2 },
                          { y: 3, x: 27 },
                          { y: 4, x: 12 },
                          { y: 5, x: 2 },
                          { y: 6, x: 11 }
                        ]}
                      />
                      <HorizontalBarSeries
                        color="#80331B"
                        data={[
                          { y: 1, x: 12 },
                          { y: 2, x: 2 },
                          { y: 3, x: 27 },
                          { y: 4, x: 12 },
                          { y: 5, x: 2 },
                          { y: 6, x: 11 }
                        ]}
                      />
                      <HorizontalBarSeries
                        color="#F18E00"
                        data={[
                          { y: 1, x: 12 },
                          { y: 2, x: 2 },
                          { y: 3, x: 27 },
                          { y: 4, x: 12 },
                          { y: 5, x: 2 },
                          { y: 6, x: 11 }
                        ]}
                      />
                      <HorizontalBarSeries
                        color="#CECD00"
                        data={[
                          { y: 1, x: 12 },
                          { y: 2, x: 2 },
                          { y: 3, x: 27 },
                          { y: 4, x: 12 },
                          { y: 5, x: 2 },
                          { y: 6, x: 11 }
                        ]}
                      />
                      <HorizontalBarSeries
                        color="#96BF0D"
                        data={[
                          { y: 1, x: 12 },
                          { y: 2, x: 2 },
                          { y: 3, x: 27 },
                          { y: 4, x: 12 },
                          { y: 5, x: 2 },
                          { y: 6, x: 11 }
                        ]}
                      />
                    </XYPlot>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Segment padded>
                    <Label attached="top" style={{ fontSize: 18 }}>
                      Filtros
                    </Label>
                    <Form>
                      <DateInput
                        name="datebeggin"
                        placeholder="Date"
                        value="14-01-2020"
                        iconPosition="left"
                        onChange={handleChange}
                        fluid
                      />
                      <br />
                      <DateInput
                        name="dateend"
                        placeholder="Date"
                        value="14-01-2020"
                        iconPosition="left"
                        onChange={handleChange}
                        fluid
                      />
                    </Form>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={13}>
                  <Segment padded>
                    <Label attached="top" style={{ fontSize: 18 }}>
                      Grafica organizada por situación (Porcentaje de ordenes)
                    </Label>
                    <XYPlot width={835} height={160} stackBy="x">
                      <VerticalGridLines />
                      <HorizontalGridLines />
                      <XAxis />
                      <YAxis />
                      <HorizontalBarSeries
                        color="#C4C2C8"
                        data={[
                          { y: 1, x: 70 },
                          { y: 2, x: 15 },
                          { y: 3, x: 150 },
                          { y: 4, x: 70 },
                          { y: 5, x: 15 },
                          { y: 6, x: 70 }
                        ]}
                      />
                    </XYPlot>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={13}>
                  <Segment padded>
                    <Label attached="top" style={{ fontSize: 18 }}>
                      Grafica organizada por situación (Costo de reparación)
                    </Label>
                    <XYPlot width={835} height={160} stackBy="x">
                      <VerticalGridLines />
                      <HorizontalGridLines />
                      <XAxis />
                      <YAxis />
                      <HorizontalBarSeries
                        color="#62CEFF"
                        data={[
                          { y: 1, x: 70 },
                          { y: 2, x: 15 },
                          { y: 3, x: 150 },
                          { y: 4, x: 70 },
                          { y: 5, x: 15 },
                          { y: 6, x: 70 }
                        ]}
                      />
                    </XYPlot>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={2}>
                  <XYPlot width={120} height={160} stackBy="x">
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <HorizontalBarSeries
                      color="#56378A"
                      data={[
                        { y: 1, x: 10 },
                        { y: 2, x: 5 },
                        { y: 3, x: 15 },
                        { y: 4, x: 10 },
                        { y: 5, x: 5 },
                        { y: 6, x: 15 }
                      ]}
                    />
                  </XYPlot>
                </Grid.Column>
                <Grid.Column width={2}>
                  <XYPlot width={120} height={160} stackBy="x">
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <HorizontalBarSeries
                      color="#e4312c"
                      data={[
                        { y: 1, x: 10 },
                        { y: 2, x: 5 },
                        { y: 3, x: 15 },
                        { y: 4, x: 10 },
                        { y: 5, x: 5 },
                        { y: 6, x: 15 }
                      ]}
                    />
                  </XYPlot>
                </Grid.Column>
                <Grid.Column width={2}>
                  <XYPlot width={120} height={160} stackBy="x">
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <HorizontalBarSeries
                      color="#80331B"
                      data={[
                        { y: 1, x: 12 },
                        { y: 2, x: 2 },
                        { y: 3, x: 27 },
                        { y: 4, x: 12 },
                        { y: 5, x: 2 },
                        { y: 6, x: 11 }
                      ]}
                    />
                  </XYPlot>
                </Grid.Column>
                <Grid.Column width={2}>
                  <XYPlot width={120} height={160} stackBy="x">
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <HorizontalBarSeries
                      color="#F18E00"
                      data={[
                        { y: 1, x: 12 },
                        { y: 2, x: 2 },
                        { y: 3, x: 27 },
                        { y: 4, x: 12 },
                        { y: 5, x: 2 },
                        { y: 6, x: 11 }
                      ]}
                    />
                  </XYPlot>
                </Grid.Column>
                <Grid.Column width={2}>
                  <XYPlot width={120} height={160} stackBy="x">
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <HorizontalBarSeries
                      color="#CECD00"
                      data={[
                        { y: 1, x: 12 },
                        { y: 2, x: 2 },
                        { y: 3, x: 27 },
                        { y: 4, x: 12 },
                        { y: 5, x: 2 },
                        { y: 6, x: 11 }
                      ]}
                    />
                  </XYPlot>
                </Grid.Column>
                <Grid.Column width={2}>
                  <XYPlot width={120} height={160} stackBy="x">
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <HorizontalBarSeries
                      color="#96BF0D"
                      data={[
                        { y: 1, x: 12 },
                        { y: 2, x: 2 },
                        { y: 3, x: 27 },
                        { y: 4, x: 12 },
                        { y: 5, x: 2 },
                        { y: 6, x: 11 }
                      ]}
                    />
                  </XYPlot>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <div className="futer">
            <Image src="/membrete.png" />
          </div>
        </div>
      </div>
    );
  }
}
/*
const HomepageLayout = () => (
  <div className="book">
    <div className="page">
      <div className="header">
        <Image src="/membrete_cabecera.png" />
      </div>
      <Container style={{ padding: 10 }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={13}>
              <Segment padded>
                <Label attached="top" style={{ fontSize: 18 }}>
                  Grafica organizada por situación (Ciclos de tiempo)
                </Label>
                <XYPlot width={835} height={160} stackBy="x">
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <HorizontalBarSeries
                    color="#56378A"
                    data={[
                      { y: 1, x: 10 },
                      { y: 2, x: 5 },
                      { y: 3, x: 15 },
                      { y: 4, x: 10 },
                      { y: 5, x: 5 },
                      { y: 6, x: 15 }
                    ]}
                  />
                  <HorizontalBarSeries
                    color="#e4312c"
                    data={[
                      { y: 1, x: 12 },
                      { y: 2, x: 2 },
                      { y: 3, x: 27 },
                      { y: 4, x: 12 },
                      { y: 5, x: 2 },
                      { y: 6, x: 11 }
                    ]}
                  />
                  <HorizontalBarSeries
                    color="#80331B"
                    data={[
                      { y: 1, x: 12 },
                      { y: 2, x: 2 },
                      { y: 3, x: 27 },
                      { y: 4, x: 12 },
                      { y: 5, x: 2 },
                      { y: 6, x: 11 }
                    ]}
                  />
                  <HorizontalBarSeries
                    color="#F18E00"
                    data={[
                      { y: 1, x: 12 },
                      { y: 2, x: 2 },
                      { y: 3, x: 27 },
                      { y: 4, x: 12 },
                      { y: 5, x: 2 },
                      { y: 6, x: 11 }
                    ]}
                  />
                  <HorizontalBarSeries
                    color="#CECD00"
                    data={[
                      { y: 1, x: 12 },
                      { y: 2, x: 2 },
                      { y: 3, x: 27 },
                      { y: 4, x: 12 },
                      { y: 5, x: 2 },
                      { y: 6, x: 11 }
                    ]}
                  />
                  <HorizontalBarSeries
                    color="#96BF0D"
                    data={[
                      { y: 1, x: 12 },
                      { y: 2, x: 2 },
                      { y: 3, x: 27 },
                      { y: 4, x: 12 },
                      { y: 5, x: 2 },
                      { y: 6, x: 11 }
                    ]}
                  />
                </XYPlot>
              </Segment>
            </Grid.Column>
            <Grid.Column width={3}>
              <Segment padded>
                <Label attached="top" style={{ fontSize: 18 }}>
                  Filtros
                </Label>
                <Form>
                  <DateInput
                    name="datebeggin"
                    placeholder="Date"
                    value="14-01-2020"
                    iconPosition="left"
                    onChange={handleChange}
                    fluid
                  />
                  <br />
                  <DateInput
                    name="dateend"
                    placeholder="Date"
                    value="14-01-2020"
                    iconPosition="left"
                    onChange={handleChange}
                    fluid
                  />
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={13}>
              <Segment padded>
                <Label attached="top" style={{ fontSize: 18 }}>
                  Grafica organizada por situación (Porcentaje de ordenes)
                </Label>
                <XYPlot width={835} height={160} stackBy="x">
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <HorizontalBarSeries
                    color="#C4C2C8"
                    data={[
                      { y: 1, x: 70 },
                      { y: 2, x: 15 },
                      { y: 3, x: 150 },
                      { y: 4, x: 70 },
                      { y: 5, x: 15 },
                      { y: 6, x: 70 }
                    ]}
                  />
                </XYPlot>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={13}>
              <Segment padded>
                <Label attached="top" style={{ fontSize: 18 }}>
                  Grafica organizada por situación (Costo de reparación)
                </Label>
                <XYPlot width={835} height={160} stackBy="x">
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <HorizontalBarSeries
                    color="#62CEFF"
                    data={[
                      { y: 1, x: 70 },
                      { y: 2, x: 15 },
                      { y: 3, x: 150 },
                      { y: 4, x: 70 },
                      { y: 5, x: 15 },
                      { y: 6, x: 70 }
                    ]}
                  />
                </XYPlot>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              <XYPlot width={120} height={160} stackBy="x">
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <HorizontalBarSeries
                  color="#56378A"
                  data={[
                    { y: 1, x: 10 },
                    { y: 2, x: 5 },
                    { y: 3, x: 15 },
                    { y: 4, x: 10 },
                    { y: 5, x: 5 },
                    { y: 6, x: 15 }
                  ]}
                />
              </XYPlot>
            </Grid.Column>
            <Grid.Column width={2}>
              <XYPlot width={120} height={160} stackBy="x">
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <HorizontalBarSeries
                  color="#e4312c"
                  data={[
                    { y: 1, x: 10 },
                    { y: 2, x: 5 },
                    { y: 3, x: 15 },
                    { y: 4, x: 10 },
                    { y: 5, x: 5 },
                    { y: 6, x: 15 }
                  ]}
                />
              </XYPlot>
            </Grid.Column>
            <Grid.Column width={2}>
              <XYPlot width={120} height={160} stackBy="x">
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <HorizontalBarSeries
                  color="#80331B"
                  data={[
                    { y: 1, x: 12 },
                    { y: 2, x: 2 },
                    { y: 3, x: 27 },
                    { y: 4, x: 12 },
                    { y: 5, x: 2 },
                    { y: 6, x: 11 }
                  ]}
                />
              </XYPlot>
            </Grid.Column>
            <Grid.Column width={2}>
              <XYPlot width={120} height={160} stackBy="x">
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <HorizontalBarSeries
                  color="#F18E00"
                  data={[
                    { y: 1, x: 12 },
                    { y: 2, x: 2 },
                    { y: 3, x: 27 },
                    { y: 4, x: 12 },
                    { y: 5, x: 2 },
                    { y: 6, x: 11 }
                  ]}
                />
              </XYPlot>
            </Grid.Column>
            <Grid.Column width={2}>
              <XYPlot width={120} height={160} stackBy="x">
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <HorizontalBarSeries
                  color="#CECD00"
                  data={[
                    { y: 1, x: 12 },
                    { y: 2, x: 2 },
                    { y: 3, x: 27 },
                    { y: 4, x: 12 },
                    { y: 5, x: 2 },
                    { y: 6, x: 11 }
                  ]}
                />
              </XYPlot>
            </Grid.Column>
            <Grid.Column width={2}>
              <XYPlot width={120} height={160} stackBy="x">
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <HorizontalBarSeries
                  color="#96BF0D"
                  data={[
                    { y: 1, x: 12 },
                    { y: 2, x: 2 },
                    { y: 3, x: 27 },
                    { y: 4, x: 12 },
                    { y: 5, x: 2 },
                    { y: 6, x: 11 }
                  ]}
                />
              </XYPlot>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <div className="futer">
        <Image src="/membrete.png" />
      </div>
    </div>
  </div>
);
*/
export default HomepageLayout;
