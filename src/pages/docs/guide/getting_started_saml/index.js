import React from 'react';
import Header from '../../../home/components/header';
import Footer from '../../../home/components/footer';
import {
  Link
} from "react-router-dom";

class GettingStartedSAML extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Getting Started with SAML SSO</h1>

          <div>
            This guide will help you get started with SAML SSO with SSOConnector
          </div>

          <div>
            <p>At a high level, there are 2 steps to setup SAML SSO</p>
            <ol>
              <li><b>Client Onboarding</b></li>
              <div>
                <p>To setup SAML SSO, it is required to exchange information between IDP and SP (SSOConnector).
                   To onboard client on SSOConnector refer <Link className="colored-anchor" to="/docs/guide/client-onboarding-automation">SAML SSO Client Onboarding Automation</Link></p>
              </div>
              <li><b>Setup Login flows for Single Sign On</b></li>
              <div>
                <p>Once the exchange of information is done and client has been successfully onboarded to SSOConnector, it's time to setup SSO.
                  Refer <Link className="colored-anchor" to="/docs/guide/complete-sso-setup">Complete SSO Setup</Link> for SSO Setup.
                </p>
              </div>
            </ol>
          </div>
        </div>
        <br />
        <br />
        <div className="sticky-footer-guides"><Footer  /></div>
      </div>
    );
  }
}

export default GettingStartedSAML;
