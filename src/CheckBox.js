import React from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends React.Component {

  static propTypes = {
    checked: PropTypes.bool,
    required: PropTypes.bool,
    name: PropTypes.string,
  }

  static defaultProps = {
    checked: false,
    required: false,
    name: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked,
    }

  }

  handleChange = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  }

  render() {

    return (
      <div
        className={`Checkbox ${this.state.checked ? 'checked' : ''}`}
        style={{position: 'relative'}}>

        <div
          className="Checkbox__facade"
          style={{
            position: 'relative',
            zIndex: 1,
          }}>
        </div>

        <input
          className="Checkbox__input"
          type="checkbox"
          name={this.props.name}
          defaultChecked={this.props.checked}
          onChange={this.handleChange}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            zIndex: 2,
          }} />

      </div>
    )

  }

}