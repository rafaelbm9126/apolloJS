import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import Autor from './autor';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.client = new ApolloClient({
      dataIdFromObject: r => r.id,
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <Autor />
      </ApolloProvider>
    );
  }
}
