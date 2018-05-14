import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.Component {

  static propTypes = {
    required: PropTypes.bool,
    name: PropTypes.string,
    className: PropTypes.string,
    validateOnBlur: PropTypes.bool,
    pattern: PropTypes.string,
    defaultValue: PropTypes.string,
  }

  static defaultProps = {
    required: false,
    name: '',
    className: 'Textarea',
    validateOnBlur: true,
    pattern: '.*',
    defaultValue: '',
  }

  checkValidityOnBlur = () => {
    this.props.validateOnBlur && this.el.checkValidity();
  }

  render() {

    return (
      <textarea
        className={this.props.className}
        name={this.props.name}
        required={this.props.required}
        onBlur={this.checkValidityOnBlur}
        ref={x => this.el = x}
        defaultValue={this.props.defaultValue} />
    )

  }

}
