import React from 'react';
import CodeIdpCreate from '../../../components/code_idp_create';

class Intro extends React.Component {
  render() {
    return (
      <div>
        <h2>Getting Started with {this.props.displayName} SAML SSO Setup</h2>

        <div>
          <div>This guide will walk you through the setup of SSO with {this.props.displayName} IDP.</div> <br/>

          <div>There are 4 steps to follow to setup SSO using SSOConnector with {this.props.displayName} IDP. Steps:</div>

          <ol>
            <li>Creation of IDP on SSOConnector</li>
            <li>Creation of SSO App on {this.props.displayName}</li>
            <li>Updation of IDP information on SSOConnector</li>
            <li>Test login</li>
          </ol>
        </div>

        <h3>Creation of IDP on SSOConnector</h3>

        <div><u>Note:</u> {'<BASE64_API_KEY>'} is the base64 encode of <b>admin:{'<API_KEY>'}</b></div><br/>

        <div>Creation of IDP will be done via APIs. Replace {'<YOUR_INSTANCE>'} and {'<BASE64_API_KEY>'} with your instance name (e.g. demo.ssoconnector.com) and api key respectively.</div><br/>
        <CodeIdpCreate idpName={this.props.name} />
        <div>Please store the idp_uuid somewhere. This is going to be used in further steps.</div>

      </div>
    );
  }
}

export default Intro;