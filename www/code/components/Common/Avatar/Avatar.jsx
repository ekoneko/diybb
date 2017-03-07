import React from 'react'

import './style.scss'

export default class Avatar extends React.PureComponent {
  static defaultProps = {
    sharp: 'rect',
    name: '',
    size: 30
  };
  static propTypes = {
    sharp: React.PropTypes.string,
    name: React.PropTypes.string,
    size: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
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
          <span className="label">{name}</span>
        )}
      </div>
    )
  }
}
