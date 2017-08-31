import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Panel, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import customHistory from '../history';

class MenuContent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: this.getDefaultKey(),
      expanded: this.getExpanded(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params: { id } } } = nextProps;
    let { active } = this.state;
    if (!(id == null || active === id)) {
      active = parseInt(id, 10);
      this.setState({ active });
    }
    const expanded = this.getExpanded(nextProps);
    if (this.state.expanded !== expanded) {
      this.setState({ expanded });
    }
  }

  getDefaultKey() {
    const { match: { params: { id } }, items } = this.props;
    return id != null ? parseInt(id, 10) : items[0].id;
  }

  getExpanded({ location: { search } }) {
    let query = search ? search.substr(1).split(',').map(item => parseInt(item, 10)) : [];
    if (!(query instanceof Array) || query.length === 0) {
      query = this.props.items.map(({ id }) => id);
    }
    return query;
  }

  selectContent = (id) => {
    const { expanded } = this.state;
    let newExpanded = expanded;
    if (expanded.indexOf(id) > -1) {
      newExpanded = expanded.filter(item => item !== id);
    } else {
      newExpanded = expanded.concat([id]);
    }
    customHistory.push(`${this.props.location.pathname}?${newExpanded.join(',')}`);
    this.setState({
      expanded: newExpanded,
    });
  }

  selectTab = (eventKey) => {
    this.setState({ active: eventKey });
  }

  renderTabs() {
    const { items, menuId } = this.props;
    return items.map(({ id, title }) => (
      <LinkContainer key={id} to={`/${menuId}/${id}`} eventKey={id}>
        <NavItem >
          {title}
        </NavItem>
      </LinkContainer>
    ));
  }

  renderTabContent() {
    return this.props.items.map(({ id, content }) => (
      <Tab.Pane key={id} eventKey={id}>
        {this.renderContent(content)}
      </Tab.Pane>
    ));
  }

  renderContent(content) {
    return content.map(({ id, title, text }) => (
      <Panel
        key={id}
        collapsible
        expanded={this.state.expanded.indexOf(id) > -1}
        header={title}
        onSelect={() => { this.selectContent(id); }}
      >
        {text}
      </Panel>
    ));
  }

  render() {
    return (<Tab.Container id={`tab-${this.props.menuId}`} activeKey={this.state.active} onSelect={this.selectTab}>
      <Row className="clearfix">
        <Col sm={12}>
          <Nav bsStyle="tabs">
            {this.renderTabs()}
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content animation>
            {this.renderTabContent()}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>);
  }
}

MenuContent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  menuId: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MenuContent.defaultProps = {
  match: {
    params: {},
  },
  location: {
    pathname: '',
  },
};

export default MenuContent;
