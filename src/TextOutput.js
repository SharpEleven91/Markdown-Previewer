import React from 'react';
import Parser from 'html-react-parser';
import marked from 'marked';

class TextOutput extends React.Component {
    interpretInput() {
      let output = marked(this.props.input);
      return output;
    }
    render() {
      return <div id="text-output">{Parser(this.interpretInput())}</div>
    }  
  }
  
  export default TextOutput