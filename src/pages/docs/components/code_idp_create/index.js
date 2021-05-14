import React from 'react';
import CodeContainer from '../code_container';
import getCodeConstants from './code';
import apiResponse from './api_response';
import Code from '../code';

class CodeIdpCreate extends React.Component {
  render() {
    return (
      <div>
        <CodeContainer codeInfo={getCodeConstants(this.props.idpName)}  />
        <br/>Sample successful response for API call of above request.<br/><br/>
        <Code code={apiResponse(this.props.idpName)} language='json' />
      </div>
    );
  }
}

export default CodeIdpCreate;
