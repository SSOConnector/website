import React from 'react';
import CodeContainer from '../code_container';
import getCodeConstants from './code';

class CodeIdpUpdate extends React.Component {
  render() {
    return (
      <div>
        <CodeContainer codeInfo={getCodeConstants(this.props.idpMetaDataURLRequired)}  />
      </div>
    );
  }
}

export default CodeIdpUpdate;
