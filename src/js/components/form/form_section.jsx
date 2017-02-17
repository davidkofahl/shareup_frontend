import React, {Component, PropTypes} from 'react';
import TextInput from './form_inputs/text_input';
import SelectInput from './form_inputs/select_input';
import TextAreaInput from './form_inputs/textarea_input';

function getInput(field) {

  const types = {
    'text': TextInput,
    'select': SelectInput,
    'textarea': TextAreaInput
  };

  const type = field.type || 'text';

  const props = Object.assign({}, field);

  props['key'] = `field_${props.id.toString()}`;

  const Input = types[type];

  return <Input {...props} />;

}


class FormSection extends React.Component { 
  
  constructor(props) {
    super(props);
  }

  render() {
    const inputs = this.props.fields.map(field => {
      return getInput(field);
    });
    return <div key={`section_${this.props.id.toString()}`}>{inputs}</div>;
  }
}

export default FormSection;
