import React from 'react'

import './style.scss'

export default class Avatar extends React.Component {
  static defaultProps = {
    sharp: 'rect',
    name: '',
    size: 30
  };
  static propTypes = {
    sharp: React.PropTypes.string,
    name: React.PropTypes.string,
    size: React.PropTypes.number
  };
  render() {
    const {sharp, name, size} = this.props;
    const style = {
      width: size,
      height: size
    };

    if (sharp === 'circle') {
      style.borderRadius = '50%';
    }
    return (
      <div className="avatar-container">
        <div className="avatar" style={style}></div>
        {name && (
          <label>{name}</label>
        )}
      </div>
    )
  }
}
