import React from 'react'
import PropTypes from 'prop-types'

export default class Editor extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string,
    options: PropTypes.shape({}),
  }

  static defaultProps = {
    content: '',
    options: {},
  }

  state = {
    editorReady: false
  }

  componentWillMount() {
    if (!window.tinyMCE) {
      const script = document.createElement('script');
      script.src = '/editor.js';
      script.onload = () => {
        this.setState({editorReady: true});
      };
      document.body.appendChild(script);
    } else {
      this.state.editorReady = true
      setTimeout(() => {
        this.initEditor()
      }, 50)
    }
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editorReady && !prevState.editorReady) {
      this.initEditor()
    } else if (window.tinyMCE.activeEditor && prevProps.content !== this.props.content) {
      window.tinyMCE.activeEditor.setContent(this.props.content)
    }
  }
  componentWillUnmount() {
    window.tinyMCE.activeEditor.destroy();
  }

  initEditor() {
    const {options} = this.props
    const defaultOptions = {
      selector: `#${this.props.id}`,
      menubar: false,
      statusbar: false,
      auto_focus: false,
      toolbar1: 'undo redo | styleselect bold italic forecolor outdent indent | link unlink',
      plugins: 'link code textcolor',
      min_height: 300,
      resize: true,
      init_instance_callback: ed => {
        ed.setContent(this.props.content)
      }
    }
    window.tinyMCE.init({
      ...defaultOptions,
      ...options,
    });
  }
  render() {
    if (!this.state.editorReady) {
      return <div>Loading</div>
    }
    return <textarea id={this.props.id} style={{display: 'block'}} defaultValue={this.props.content}></textarea>
  }
}