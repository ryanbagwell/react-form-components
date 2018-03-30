import React from 'react';
import PropTypes from 'prop-types';

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
    choices: PropTypes.array,
    selectedChoice: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    arrow: PropTypes.element,
    required: PropTypes.bool,
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    choices: [],
    selectedChoice: '',
    arrow: <DownArrow />,
    required: false,
    name: '',
    className: 'SelectBox',
    placeholder: '- select -',
  }

  constructor(props) {
    super(props);

    let choices = props.choices.map((choice, i) => {
      if (typeof choice === 'string') {
        return {
          displayName: choice,
          value: choice,
        }
      } else {
        return choice;
      }

    });

    choices = [{displayName: this.props.placeholder, value: ''}].concat(choices)

    this.state = {
      choices: choices,
      selectedChoice: props.selectedChoice || choices[0],
    }

  }

  handleOnChange = (e) => {
    let val = e.target.value;

    let selectedChoice = this.state.choices.find((choice) => {

      if (typeof choice === 'string') {
        return choice === val;
      }

      if (typeof choice === 'object') {
        return choice.value === val;
      }

    });

    this.setState({
      selectedChoice: selectedChoice,
    })

  }

  render() {
    let selectedChoice = this.state.selectedChoice;

    return (
      <div
        className={this.props.className}
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
          }}>
          {
            this.state.choices.map((choice, i) => {
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