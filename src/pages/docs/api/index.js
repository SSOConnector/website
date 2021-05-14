import React from 'react';
import Header from '../../home/components/header';
import Footer from '../../home/components/footer';
import apiReferences from './api_references';
import ApiReference from '../components/api_reference';
import './index.scss';

class Api extends React.Component {
  render() {
    const apiReferencesData = apiReferences().v1;
    const apiReferenceJsx = [];
    for(let idx in apiReferencesData) {
      const apiReference = apiReferencesData[idx];
      apiReferenceJsx.push(
        <ApiReference
          key={idx}
          httpMethod={apiReference.httpMethod}
          endpoint={apiReference.endpoint}
          description={apiReference.description}
          headers={apiReference.headers}
          body={apiReference.body}
          response={apiReference.response}
        />
      );
    }
    return (
      <div>
        <Header />
        <div className="container api-ref">
          <h1>API Reference</h1>
          <div>Please add /api/v1 prefix before each api endpoint</div>
          {apiReferenceJsx}
          <div>Drop mail to <b>ssoconnector@googlegroups.com</b> if you have some suggestions or something is wrong.</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Api;
