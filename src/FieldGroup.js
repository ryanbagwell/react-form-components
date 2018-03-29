import React from 'react';
import PropTypes from 'prop-types';

export default class FieldGroup extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.oneOfType([
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    className: 'FieldGroup',
    label: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      valid: null,
    };
  }

  handleInvalid = (e) => {
    this.setState({
      valid: false,
    })
  }

  handleBlur = (e) => {
    let valid = e.target.checkValidity();

    if (e.target.checkValidity()) {
      this.setState({
        valid: true,
      })
    }

  }

  render() {

    return (

      <div
        className={`${this.props.className} ${this.state.valid === false ? 'group-invalid' : ''}`}
        onInvalid={this.handleInvalid}
        onBlur={this.handleBlur}>

        {
          this.props.label && (
          <label className={`${this.props.className}__label`}>
            {this.props.label}
          </label>
          )
        }

        {this.props.children}

      </div>

    )

  }

}


