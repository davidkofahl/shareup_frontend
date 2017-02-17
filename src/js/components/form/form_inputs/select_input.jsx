import React, { Component, PropTypes } from 'react'
import classnames from 'classnames';
import BaseInput from './base_input';

class SelectInput extends BaseInput {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
  }

  state = {
    text: this.props.text || ''
  }

  handleChange = (evt) => {}

  handleBlur = (evt) => {}

  render() {
  }

}

export default SelectInput;
