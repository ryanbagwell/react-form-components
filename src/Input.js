import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {

  static propTypes = {
    required: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    validateOnBlur: PropTypes.bool,
    autoComplete: PropTypes.bool,
  }

  static defaultProps = {
    required: false,
    name: '',
    type: 'text',
    className: 'Input',
    validateOnBlur: true,
    autoComplete: true,
  }

  constructor(props) {
    super(props);

    this.state = {}

  }

  checkValidityOnBlur = () => {
    if (this.props.validateOnBlur) {
      this.el.checkValidity();
    }
  }

  render() {

    return (
      <input
        className={this.props.className}
        type={this.props.type}
        name={this.props.name}
        required={this.props.required}
        onBlur={this.checkValidityOnBlur}
        autoComplete={this.props.autocomplete}
        ref={x => this.el = x} />
    )

  }

}
