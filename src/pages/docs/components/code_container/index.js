import React from 'react';
import Code from '../code';
import "./index.scss";

class CodeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: Object.keys(this.props.codeInfo)[0]
    };
  }

  onTabClicked(language) {
    this.setState({
      activeTab: language
    });
  }

  render() {
    const codeInfo = this.props.codeInfo;
    const languageListElement = [];
    for(let language in codeInfo) {
      let className = "code-option";
      if(language == this.state.activeTab) {
        className += " active-language";
      }
      languageListElement.push(<div key={language} onClick={this.onTabClicked.bind(this, language)} className={className}>{codeInfo[language].display}</div>);
    }
    return (
      <div>
        <div className="code-options">{languageListElement}</div>
        <Code code={this.props.codeInfo[this.state.activeTab].code} language={this.props.codeInfo[this.state.activeTab].formatingLanguage} />
      </div>
    );
  }
}

export default CodeContainer;
