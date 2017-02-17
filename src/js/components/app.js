// TODO https://medium.com/technically-speaking/isomorphic-reactjs-app-with-ruby-on-rails-part-1-server-side-rendering-8438bbb1ea1c#.w5wmv89on
// TODO https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.r0vltzjg1
// TODO https://babeljs.io/blog/2015/06/07/react-on-es6-plus
//
/**
 * @file Entry point for the {@link https://github.com/facebook/react|React} application, defining the routes (via {@link https://github.com/reactjs/react-router|react-router}) and their respective components.
 */

import 'babel-polyfill'; // resolves this issue with use of the ES2015 for/of loop: https://github.com/babel/babelify/issues/22
import React, {Component} from 'react';
import { render } from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Share Up</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
