import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.users = [
      {
        id: 1,
        name: 'Harold Foster',
        email: 'hfoster3@hao123.com',
        birthdate: '1999-03-01',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Harold Foster 2',
        email: 'hfoster3@hao123.com',
        birthdate: '1999-03-01',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: 'Harold Foster 3 ',
        email: 'hfoster3@hao123.com',
        birthdate: '1999-03-01',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        name: 'Harold Foster 4',
        email: 'hfoster3@hao123.com',
        birthdate: '1999-03-01',
        created_at: new Date(),
        updated_at: new Date()
      }
    ];
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Email</TableHeaderColumn>
                <TableHeaderColumn>Birth Date</TableHeaderColumn>
                <TableHeaderColumn>Created at</TableHeaderColumn>
                <TableHeaderColumn>Updated at</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowColumn>{this.users[0].name}</TableRowColumn>
                <TableRowColumn>{this.users[0].email}</TableRowColumn>
                <TableRowColumn>{this.users[0].birthdate}</TableRowColumn>
                <TableRowColumn>{this.users[0].created_at.toString() }</TableRowColumn>
                <TableRowColumn>{this.users[0].updated_at.toString() }</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default UsersPage;
