import React, { Component } from 'react';

// Test A
// import { init } from 'onfido-sdk-ui';

class OnfidoTest extends Component {
  // Test B
  componentDidMount () {
    const Onfido = require('onfido-sdk-ui');
  }

  // Test C
  // async componentDidMount () {
  //   const Onfido = await import('onfido-sdk-ui');
  // }
  
  render () {
    return (
      <h1>Hello Onfido</h1>
    )
  }
}

export default OnfidoTest;
