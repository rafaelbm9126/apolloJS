import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Autor = ({ data: { loading, author, AllAutors } }) => {
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Un Author</h1>
        <ul>
          {
            (author) ?
              <li>
                {author.firstName+'  '+author.lastName}
              </li>
            :
              <div/>
          }
        </ul>
        <br/><br/>
        <h1>Todos los Authors</h1>
        <ul>
          {
            AllAutors.map((autor,index) =>
              <li key={index}>{autor.id} | {autor.firstName} {autor.lastName}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

const AutorG = graphql(gql`
  query Autor($Id: Int!) {
    author (id: $Id) {
      firstName
      lastName
    }
    AllAutors {
      id
      firstName
      lastName
    }
  }
`)(Autor);

export default class AutorClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
    this._handle = this._handle.bind(this);
  }
  _handle(e) {
    let { value } = e.target;
    value = (value) ? value : 0;
    this.setState({ id: parseInt(value) });
  }
  render() {
    return (
      <div>
        <input type="number" onChange={this._handle} />
        <br/><br/>
        <AutorG Id={this.state.id} />
      </div>
    );
  }
}
