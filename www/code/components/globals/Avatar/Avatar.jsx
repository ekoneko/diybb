import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const AVATAR_URL = GLOBALS.AVATAR_URL

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
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    showLabel: PropTypes.bool,
    style: PropTypes.shape({}),
  };

  state = {
    avatarImgUrl: ''
  }

  componentWillMount() {
    const {id} = this.props
    this.getAvatarImg(id)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.id !== this.props.id) {
      this.setState({avatarImgUrl: ''})
      this.getAvatarImg(newProps.id)
    }
  }

  getAvatarImg(id) {
    if (!id) return
    const url = `${AVATAR_URL}/${id}`
    const img = new Image()
    img.onload = () => {
      this.setState({avatarImgUrl: url})
    }
    img.src = url
  }

  renderContent() {
    const {name} = this.props
    const {avatarImgUrl} = this.state
    if (avatarImgUrl) {
      return <img src={avatarImgUrl} alt="" />
    }
    const shortName = name.slice(0, 1)
    return <span>{shortName}</span>
  }

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

    return (
      <div className="avatar-container">
        <div
          className="avatar"
          style={{
            ...computeStyle,
            ...style,
          }}
        >
          {this.renderContent()}
        </div>
        {showLabel && (
          <span className="label">{name}</span>
        )}
      </div>
    )
  }
}
