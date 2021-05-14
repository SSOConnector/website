import React from 'react';
import Header from '../../../home/components/header';
import Footer from '../../../home/components/footer';
import CodeContainer from '../../components/code_container';
import {
  Link
} from "react-router-dom";
import './index.scss';

class ClientOnboardingAutomation extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>SAML SSO Client Onboarding Automation</h1>

          <div>
            This guide will help you build 100% automated SAML SSO client onboarding to SSOConnector
          </div>

          <div>
            <p>Client Onboarding on SSOConnector involves 4 steps</p>
            <ol>
              <li><b>Creation of IDP on SSOConnector</b></li>
              <div>
                <p>IDP creation on SSOConnector can be done via a rest call.
                  You can find the details for that <Link className="colored-anchor" to="/docs/setup">here</Link>. It is the same for all the IDPs.
                  On successful creation, you will receive an {'<IDP_UUID>'} (unique id for the idp you just created).
                  This will be used in all future references for all the modifications to this IDP.
                </p>
              </div>
              <li><b>Supply Client with SP Information (SSOConnector)</b></li>
              <div>
                <p>You have to give ACS URL and SP entity ID to the cleint. Client will use this information for creation of SSO App at their end.
                Different IDPs have different procedure for creation of App. You can find the details as per the client's IDP <Link className="colored-anchor" to="/docs/setup">here</Link>.
                </p>
              </div>
              <li><b>Updation of Client IDP Information on SSOConnector</b></li>
              <div>
                <p>Post SSO App is configured at client's end, they will need to update {'<CERT>'} (X.509 Certificate) and {'<SSO_TARGET_URL>'} on SSOConnector.
                These details can be found at different location of different IDPs. More details can be found <Link className="colored-anchor" to="/docs/setup">here</Link>.
                </p>
              </div>
              <li><b>Test Login to verify above steps</b></li>
              <div>
                <p>When all of the above 3 steps are completed it's time to test the Single Sign On Setup. For IDP specific testing, refer <Link className="colored-anchor" to="/docs/setup">here</Link>.
                For complete SSO Setup refer <Link className="colored-anchor" to="/docs/guide/complete-sso-setup">here</Link>.
                </p>
              </div>
            </ol>
          </div>

          <div>
            If you are looking for IDP specific SSO setup refer <Link className="colored-anchor" to="/docs/setup">here</Link>
          </div>
        </div>
        <br />
        <br />
        <div className="sticky-footer-guides"><Footer  /></div>
      </div>
    );
  }
}

export default ClientOnboardingAutomation;
