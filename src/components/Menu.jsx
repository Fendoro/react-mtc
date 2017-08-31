import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import MenuContent from './Tab';

const renderMenuContent =
  (tabs, id) =>
    props =>
      <MenuContent items={tabs} menuId={id} {...props} />;

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.getDefaultKey(),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params: { id } } } = nextProps;
    if (!(id == null || this.state.active === id)) {
      this.setState({ active: parseInt(id, 10) });
    }
  }

  getDefaultKey() {
    const { match: { params: { id } }, items } = this.props;
    return id != null ? parseInt(id, 10) : items[0].id;
  }

  selectMenu = (eventKey) => {
    this.setState({ active: eventKey });
  }

  renderMenu() {
    return this.props.items.map(({ id, title }) => (
      <LinkContainer key={id} to={`/${id}`} eventKey={id}>
        <NavItem>
          {title}
        </NavItem>
      </LinkContainer>
    ));
  }

  renderContent() {
    const { match: { url }, items } = this.props;
    return items.map(({ id, tabs }) => (
      <Tab.Pane key={id} eventKey={id}>
        <Route exact path={`${url}/`} render={renderMenuContent(tabs, id)} />
        <Route path={`${url}/:id`} render={renderMenuContent(tabs, id)} />
      </Tab.Pane>
    ));
  }

  render() {
    return (<Tab.Container id="left-tabs" activeKey={this.state.active} onSelect={this.selectMenu}>
      <Row className="clearfix">
        <Col sm={4}>
          <Nav bsStyle="pills" stacked>
            {this.renderMenu()}
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content animation>
            {this.renderContent()}
          </Tab.Content>
        </Col>
      </Row>

    </Tab.Container>);
  }
}

Menu.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Menu.defaultProps = {
  match: {
    params: {},
  },
};

export default Menu;
