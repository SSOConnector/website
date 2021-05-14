import React from 'react';
import Header from '../../home/components/header';
import {
  Link
} from "react-router-dom";

class Guide extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <h1>Guide</h1>

          <ol>
            <li><Link className="colored-anchor" to='/docs/guide/getting-started-saml'>Getting Started with SAML SSO</Link></li>
            <li><Link className="colored-anchor" to='/docs/guide/client-onboarding-automation'>SAML SSO Client Onboarding Automation</Link></li>
            <li><Link className="colored-anchor" to='/docs/guide/complete-sso-setup'>Complete SSO Setup</Link></li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Guide;
