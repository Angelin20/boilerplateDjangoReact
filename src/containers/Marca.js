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

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
class DesktopContainer extends Component {
  state = {
    datebeggin: "",
    dateend: ""
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };
  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { error, loading, token } = this.props;
    if (!token) {
      return <Redirect to="/" />;
    }
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {
    datebeggin: "",
    dateend: ""
  };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });
  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };
  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    const { error, loading, token } = this.props;
    if (!token) {
      return <Redirect to="/" />;
    }
    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};
const handleChange = (event, { name, value }) => {
  //if (this.state.hasOwnProperty(name)) {
  //this.setState({ [name]: value });
  console.log({ [name]: value });
  //}
};
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};
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
                  Grafica organizada por Marca o modelo
                </Label>
                <XYPlot width={835} height={600} stackBy="x">
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <HorizontalBarSeries
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
                  <Form.Field label="Marca" control="select">
                    <option value="male">Marca 1</option>
                    <option value="female">Marca 2</option>
                  </Form.Field>
                  <Form.Field label="Modelo" control="select">
                    <option value="male">Modelo 1</option>
                    <option value="female">Modelo 2</option>
                  </Form.Field>
                </Form>
              </Segment>
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
export default HomepageLayout;
