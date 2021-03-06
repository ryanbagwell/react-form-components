import React from 'react';
import PropTypes from 'prop-types';
import memoize from "memoize-one";

const DownArrow = () => (

  <svg x="0px" y="0px"
     viewBox="0 0 19.5 10.6">
    <polyline
      fill="none"
      stroke="#002C5B"
      strokeWidth="2"
      strokeMiterlimit="10"
      points="4.8,2.8 9.8,7.8 14.7,2.8" />
  </svg>

)


/**
 * An html ````<select>```` element
 */
export default class SelectBox extends React.Component {

  static propTypes = {
    choices: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.shape({
        displayName: PropTypes.string,
        value: PropTypes.string,
      })),
    ]),
    selectedChoice: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    arrow: PropTypes.element,
    required: PropTypes.bool,
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    pattern: PropTypes.string,
  }

  static defaultProps = {
    choices: [],
    selectedChoice: null,
    arrow: <DownArrow />,
    required: false,
    name: '',
    className: 'SelectBox',
    placeholder: '- select -',
    pattern: '.*',
  }

  state = {
    choices: [],
    selectedChoice: null,
  }

  constructor(props) {
    super(props);

    if (props.selectedChoice === null) {
      this.state.selectedChoice = this.choices(props.choices)[0];
    }

  }

  choices = memoize((choices) => {

    let options = choices.map((choice, i) => {
      if (typeof choice === 'string') {
        return {
          displayName: choice,
          value: choice,
        }
      } else {
        return choice;
      }

    });

    options = [{
      displayName: this.props.placeholder,
      value: ''
    }].concat(options)

    return options;

  })

  handleOnChange = (e) => {
    let val = e.target.value;

    let selectedChoice = this.choices(this.props.choices).find((choice) => {

      if (typeof choice === 'string') {
        return choice === val;
      }

      if (typeof choice === 'object') {
        return choice.value === val;
      }

    });

    this.setState({
      selectedChoice: selectedChoice,
    });

  }

  render() {
    let selectedChoice = this.state.selectedChoice;

    return (
      <div
        className={this.props.className}
        data-value={this.state.selectedChoice.value}
        style={{
          position: 'relative',
        }}>
        <div
          className={`${this.props.className}__facade`}
          style={{
            position: 'relative',
            zIndex: '1',
          }}>
          <div className={`${this.props.className}__facade__label`}>
            {selectedChoice.displayName}
          </div>

          <em className={`${this.props.className}__facade__arrow`}>
            {this.props.arrow}
          </em>

        </div>

        <select
          name={this.props.name}
          className={`${this.props.className}__select`}
          required={this.props.required}
          onChange={this.handleOnChange}
          style={{
            position: 'absolute',
            zIndex: '2',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
          }}>
          {
            this.choices(this.props.choices).map((choice, i) => {
              return (
                <option
                  key={i}
                  className={`${this.props.className}__select__option`}
                  value={choice.value}>
                  {choice.displayName}
                </option>
              )
            })
          }
        </select>

      </div>
    )

  }
}