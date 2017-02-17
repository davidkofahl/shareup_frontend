import React, {Component, PropTypes} from 'react';
import request from 'superagent';
import FormSection from './form_section';

// Fields
class Form extends Component { 

  constructor(props) {
    super(props);
  }

  static propTypes = {
    fields: PropTypes.object.isRequired,
  }

  state = {
    idx: 0
  }

  handleSubmit(evt) {
    evt.preventDefault();
    request.post(this.props.endpoint)
      .send(this.state.answers)
      .end(this.handleFormResponse);
  }

  handleSubmitResponse(err, res) {
    if (err || !res.ok) {
      this.handleSubmitError();
    } else {
      this.handleSubmitSuccess();
    }
  }

  handleSubmitSuccess() {
    console.log('form submitted successfully');
  }

  handleSubmitError() {
    console.log('form failed to submit');
  }

  handleInputChange(evt) {
    const target = evt.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
          <FormSection {...this.props.fields.sections[this.state.idx]} />
      </form>
    );
  }

}

export default Form;
