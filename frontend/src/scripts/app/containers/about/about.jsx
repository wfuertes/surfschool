import React, { Component } from 'react';

class About extends Component {
  constructor(props, context) {
    super(props, context);

    this.message = this.message.bind(this);
  }

  message() {
    return 'Hello';
  }

  /* eslint no-undef:0 */
  render() {
    return (
      <div>About: This is a simple react-route page.
        <div>{this.message()}</div>
      </div>
    );
  }
}

export default About;
