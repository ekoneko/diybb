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
    if (window.tinyMCE) {
      this.state.editorReady = true
      setTimeout(() => {
        this.initEditor()
      }, 50)
    } else if (window.addEventListener) {
      window.addEventListener('tinymceReady', () => {
        this.setState({editorReady: true});
      })
      setTimeout(() => {
        if (!this.state.editorReady) {
          this.loadEditor()
        }
      }, 5000)
    } else {
      this.loadEditor()
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

  loadEditor = () => {
    const script = document.createElement('script');
    script.src = '/editor.js';
    script.onload = () => {
      this.setState({editorReady: true});
    };
    document.body.appendChild(script);
    const link = document.createElement('link');
    link.href = '/editor.style.css';
    link.rel = 'stylesheet';
    document.body.appendChild(link);
  }

  initEditor() {
    const {options} = this.props
    const defaultOptions = {
      selector: `#${this.props.id}`,
      menubar: false,
      statusbar: false,
      auto_focus: false,
      toolbar1: 'undo redo | styleselect bold italic forecolor outdent indent | link image yen',
      plugins: 'link code textcolor image yen autolink responsiveImage',
      min_height: 300,
      resize: true,
      skin: false,
      language: 'zh_CN',
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
