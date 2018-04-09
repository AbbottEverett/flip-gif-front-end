import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Sidebar, Segment, Icon, Button, Header, Container, Dropdown, Image, Menu } from 'semantic-ui-react';

import HeaderBar from './components/HeaderBar/HeaderBar';
import FooterBar from './components/FooterBar/FooterBar';
import HomePage from './components/HomePage/Homepage';
import DrawingTool from './components/DrawingTool/DrawingTool';
import './App.css';

class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const bodyMargin = { marginTop: '3em' };
    return (
      <Router>
        <div>
          <Sidebar.Pushable style={{minHeight: '100vh'}}>
            <Sidebar
              as={Menu}
              animation='overlay'
              width='thin'
              direction='right'
              visible={this.state.visible}
              icon='labeled'
              vertical
              inverted
            >
              <Menu.Item name='home'>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item name='gamepad'>
                <Icon name='gamepad' />
                Games
              </Menu.Item>
              <Menu.Item name='camera'>
                <Icon name='camera' />
                Channels
              </Menu.Item>
              <Menu.Item name='camera' onClick={this.toggleVisibility}>
                <Icon name='camera' />
                Close
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <div style={{minHeight: '100vh'}}>
                <HeaderBar toggleVisibility={this.toggleVisibility} />
                <Switch>
                  <Route path="/draw" render={ () => <DrawingTool bodyMargin={bodyMargin} />} />
                  <Route path="/" render={ () => <HomePage bodyMargin={bodyMargin} />} />
                </Switch>
              </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
