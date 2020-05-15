import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Part from './components/Part';

class App extends Component {

  state = {
    partName: null,
    partFeatures: null
  }

  componentWillReceiveProps({ data: { newPartNotification: { name, features } } }) {
    this.setState({ partName: name })
    this.setState({ partFeatures: features })
  };

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-13 shadow-md ">
            <h4>{this.state.partName}</h4>
          </div>
        </div>

        <div className="row">
          {(this.state.partFeatures) ? (

            this.state.partFeatures.map((feature, index) => (
              <div className="card col-md-13 shadow-md ">
                <Part feature={feature} key={index} />
              </div>
            ))
          ) : <h1>Loading..</h1>}
        </div>
      </div>
    );
  }
}

const subNewPartNotification = gql`
subscription{
  newPartNotification{
    name
    features{
      name
      controls{
        name
        dev
        devOutTotal
        expected
      }
    }
  }
}
`;

export default graphql(subNewPartNotification)(App);
