import React, { Component } from 'react';
import { Sidebar, Segment, Icon, Button, Header, Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

class HeaderBar extends Component {
  render() {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Link to="/">
            <Menu.Item as='h3' header>
              <span className="header-styled-text">FlipGif</span>
            </Menu.Item>
          </Link>
          <Menu.Item as='a' onClick={this.props.toggleVisibility} position='right'>
            <i class="fas fa-bars"></i>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default HeaderBar;