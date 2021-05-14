import React from 'react';
import Header from '../../../home/components/header';
import Footer from '../../../home/components/footer';
import CodeIdpUpdate from '../../components/code_idp_update';
import Intro from '../components/intro';
import Extro from '../components/extro';

class OpenSamlSetup extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <Intro name="open_saml" displayName="OpenSAML" />

          <h3>Creation of SSO App on OpenSAML</h3>
          <div>
            <p>
              Create SSO App on your IDP with {'<assertion_consumer_service_url>'} and {'<sp_entity_id>'}
            </p>
            <ol>
              <li>Open OneLogin admin dashboard panel.</li>
              <li>Go to Applications. Applications {'->'} Applications</li>
              <li>Click on <b>Add App</b></li>
              <li>Search <b>SAML Test Connector (Advanced)</b> and select the app.</li>
              <li>Update <b>Display Name</b> as per your choice. Click <b>Save</b>.</li>
              <li>Go to <b>Configuration</b></li>
              <li>Copy the value of {'<assertion_consumer_service_url>'} from JSON response and paste it on <b>ACS (Consumer) URL</b></li>
              <li>Copy the value of {'<sp_entity_id>'} from JSON response and paste it on <b>Recipient</b></li>
              <br/>The next steps are <b>Optional</b> if you want to pull user first and last name from onelogin while logging in the user<br/><br/>
              <li>Go to parameters</li>
              <li>Click on add icon. Add <b>Field name</b> as firstName. Check <b>Include in SAML assertion</b>. Click <b>Save</b>. Select <b>Value</b> as <b>First Name</b> and press <b>Save</b></li>
              <li>Click on add icon. Add <b>Field name</b> as lastName. Check <b>Include in SAML assertion</b>. Click <b>Save</b>. Select <b>Value</b> as <b>Last Name</b> and press <b>Save</b></li>
            </ol>
          </div>

          <h3>Updation of IDP information on SSOConnector</h3>
          <ol>
            <li>Go to the application that was created using above steps. Applications {'->'} Applications and click on the newly created application</li>
            <li>Go to <b>SSO</b> tab and copy <b>SAML 2.0 Endpoint (HTTP)</b>. This URL will be used as <b>SSO_TARGET_URL</b></li>
            <li>Click on <b>View Details of <b>X.509 Certificate</b>. It will open a new tab.</b></li>
            <li>Copy <b>X.509 Certificate</b> without <b>-----BEGIN CERTIFICATE-----</b> and <b>-----END CERTIFICATE-----</b>.  This URL will be used as <b>CERT</b></li>
          </ol>

          <div><u>Note:</u> For successful usage you need to assign users to newly created App which can be done by visiting <b>Users</b> tab.</div><br/>

          <div>Replace {'<IDP_UUID>'}, {'<CERT>'} and {'<SSO_TARGET_URL>'} with idp_uuid value obtained from the first API call and CERT and SSO_TARGET_URL obtained above.</div>
          <CodeIdpUpdate idpMetaDataURLRequired={false} />

          <h3>Test Login</h3>
          <h4>IDP Initiated SSO</h4>
          <div>All the setup steps have been done. You can visit to OneLogin Application section (in normal user) mode and try IDP initiated login.</div>
          <Extro />
        </div>

        <Footer />
      </div>
    );
  }
}

export default OneLoginSetup;
