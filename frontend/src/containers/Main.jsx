/* eslint import/no-unresolved: 0 */

import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import AppBar from '../components/AppBar';

const styles = {
  container: {
    textAlign: 'center'
  }
};

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false
    };
  }

  handleRequestClose() {
    this.setState({
      open: false
    });
  }

  handleTouchTap() {
    this.setState({
      open: true
    });
  }

  render() {
    const standardActions = (
      <FlatButton label="Ok" primary onTouchTap={this.handleRequestClose} />
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div style={styles.container}>
          <AppBar />
          <Dialog open={this.state.open} title="Super Secret Password" actions={standardActions} onRequestClose={this.handleRequestClose}>
            1-2-3-4-5
          </Dialog>

          <h1>Material-UI</h1>
          <h2>example project</h2>

          <RaisedButton label="Super Secret Password" onTouchTap={this.handleTouchTap} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
