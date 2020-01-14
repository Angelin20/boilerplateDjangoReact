import React from "react";
import {
  Container,
  Image,
  List,
  Menu,
  Segment,
  Popup
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faSignOutAlt,
  faUserPlus,
  faSignInAlt,
  faPrint
} from "@fortawesome/free-solid-svg-icons";

class CustomLayout extends React.Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        <Menu fixed="top">
          <Container>
            {authenticated ? (
              <React.Fragment>
                <Popup
                  trigger={
                    <Link to="/block">
                      <Menu.Item header>
                        <FontAwesomeIcon
                          color="blue"
                          size="2x"
                          icon={faChartLine}
                        />
                      </Menu.Item>
                    </Link>
                  }
                  content="Por tamaño"
                  position="bottom center"
                  basic
                />
                <Popup
                  trigger={
                    <Link to="/marca">
                      <Menu.Item header>
                        <FontAwesomeIcon
                          color="red"
                          size="2x"
                          icon={faChartLine}
                        />
                      </Menu.Item>
                    </Link>
                  }
                  content="Por marca o modelo"
                  position="bottom center"
                  basic
                />
                <Popup
                  trigger={
                    <Link to="/proveedor">
                      <Menu.Item header>
                        <FontAwesomeIcon
                          color="green"
                          size="2x"
                          icon={faChartLine}
                        />
                      </Menu.Item>
                    </Link>
                  }
                  content="Por proveedor"
                  position="bottom center"
                  basic
                />
                <Popup
                  trigger={
                    <Link to="/tiempo">
                      <Menu.Item header>
                        <FontAwesomeIcon
                          color="yellow"
                          size="2x"
                          icon={faChartLine}
                        />
                      </Menu.Item>
                    </Link>
                  }
                  content="Por tiempo de entrega"
                  position="bottom center"
                  basic
                />
                <Popup
                  trigger={
                    <Menu.Item id="print" header>
                      <FontAwesomeIcon size="2x" color="gray" icon={faPrint} />
                    </Menu.Item>
                  }
                  content="Enviar a imprimir"
                  position="bottom center"
                  basic
                />
                <Popup
                  trigger={
                    <Menu.Item header onClick={() => this.props.logout()}>
                      <FontAwesomeIcon
                        size="2x"
                        color="orange"
                        icon={faSignOutAlt}
                      />
                    </Menu.Item>
                  }
                  content="Cerrar sesion"
                  position="bottom center"
                  basic
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Popup
                  trigger={
                    <Link to="/login">
                      <Menu.Item header>
                        <FontAwesomeIcon
                          size="2x"
                          color="green"
                          icon={faSignInAlt}
                        />
                      </Menu.Item>
                    </Link>
                  }
                  content="Ingresar"
                  position="bottom center"
                  basic
                />
                <Popup
                  trigger={
                    <Link to="/signup">
                      <Menu.Item header>
                        <FontAwesomeIcon
                          size="2x"
                          color="gray"
                          icon={faUserPlus}
                        />
                      </Menu.Item>
                    </Link>
                  }
                  content="Crear cuenta"
                  position="bottom center"
                  basic
                />
              </React.Fragment>
            )}
          </Container>
        </Menu>

        {this.props.children}

        <Segment
          inverted
          color="blue"
          vertical
          style={{ margin: "3em 0em 0em", padding: "3em 0em" }}
          className="piePagina"
        >
          <Container textAlign="center">
            <Image centered size="mini" src="/intelisis_white.png" />
            <List horizontal inverted divided link size="small">
              <List.Item
                as="a"
                href="https://www.intelisis.com/automotriz.html"
              >
                Intelisis
              </List.Item>
              <List.Item
                as="a"
                href="https://www.intelisis.com/automotriz.html"
              >
                Contactanos
              </List.Item>
              <List.Item
                as="a"
                href="https://www.intelisis.com/automotriz.html"
              >
                Terminos y condiciones
              </List.Item>
              <List.Item
                as="a"
                href="https://www.intelisis.com/automotriz.html"
              >
                Aviso de privacidad
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomLayout)
);
