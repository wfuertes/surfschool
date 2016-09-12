import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

/* eslint import/no-unresolved: 0 */
import { fetchUsers } from '../../actions/usersActions';

function loadData(props) {
  props.fetchUsers();
}

class Users extends Component {

  /* eslint no-useless-constructor: 0 */
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    return (
      <div>Users
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired
};

/* eslint no-console: 0 */
/* eslint no-unused-vars: 0 */
function mapStateToProps(state, ownProps) {
  // const name = ownProps.params.name;

  return {
    // name
  };
}

export default connect(mapStateToProps, {
  fetchUsers
})(Users);
