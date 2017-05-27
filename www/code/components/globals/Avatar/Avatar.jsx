import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const COLOR = [
  ['#ffb900', '#fff'],
  ['#e81123', '#fff'],
  ['#5c005c', '#fff'],
  ['#0078d7', '#fff'],
  ['#00B294', '#fff'],
  ['#00bcf2', '#fff'],
  ['#ff8c00', '#fff'],
  ['#b4a0ff', '#fff'],
  ['#a80000', '#fff'],
  ['#002050', '#fff'],
  ['#004b50', '#fff'],
]

export default class Avatar extends React.PureComponent {
  static defaultProps = {
    sharp: 'rect',
    name: '',
    size: 30,
    showLabel: false,
    style: {},
  };
  static propTypes = {
    id: PropTypes.number.isRequired,
    sharp: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    showLabel: PropTypes.bool,
    style: PropTypes.shape({}),
  };
  render() {
    const {
      id,
      sharp,
      name,
      size,
      showLabel,
      style,
    } = this.props;
    const computeStyle = {
      width: size,
      height: size,
    };

    if (sharp === 'circle') {
      computeStyle.borderRadius = '50%';
    }

    const colorIndex = id % COLOR.length
    const [backgroundColor, color] = COLOR[colorIndex]
    computeStyle.backgroundColor = backgroundColor
    computeStyle.color = color

    const shortName = name.slice(0, 2)

    return (
      <div className="avatar-container">
        <div
          className="avatar"
          style={{
            ...computeStyle,
            ...style,
          }}
        >
          <span>{shortName}</span>
        </div>
        {showLabel && (
          <span className="label">{name}</span>
        )}
      </div>
    )
  }
}
