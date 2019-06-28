import React, { Component } from 'react';
import dynamic from 'next/dynamic';

// Test A
// import { init } from 'onfido-sdk-ui';
// const Onfido = dynamic(import ('onfido-sdk-ui'), {ssr:false});

class OnfidoTest extends Component {
  // Test B
  componentDidMount () {
    // const Onfido = require('onfido-sdk-ui');
    // const Onfido = dynamic(import ('onfido-sdk-ui'), {ssr:false});
  }

  // Test C
  async componentDidMount () {
    const Onfido = await dynamic(import ('onfido-sdk-ui'), {ssr:false});
  }
  
  render () {
    return (
      <h1>Hello Onfido</h1>
    )
  }
}

export default OnfidoTest;
