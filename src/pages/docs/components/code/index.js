import React from 'react';
import { CopyBlock, monokaiSublime } from "react-code-blocks";

class Code extends React.Component {
  render() {
    return (
      <div className="code-block">
        <CopyBlock
          text={this.props.code}
          language={this.props.language}
          showLineNumbers={false}
          theme={monokaiSublime}
        />
      </div>
    );
  }
}

export default Code;
