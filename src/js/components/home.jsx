import React, {Component} from 'react';
import { render } from 'react-dom'
import Form from './form/form';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Form</h2>
        <Form fields={this.props.route.data} /> 
      </div>
    );
  }
}

export default Home;
