import React from 'react';
import Header from '../../../home/components/header';
import Footer from '../../../home/components/footer';
import CodeIdpCreate from '../../components/code_idp_create';
import CodeIdpUpdate from '../../components/code_idp_update';
import Intro from '../components/intro';
import Extro from '../components/extro';
import OktaSetupImage3 from './assets/003_docs_setup_okta.jpg';
import OktaSetupImage4 from './assets/004_docs_setup_okta.jpg';
import OktaSetupImage5 from './assets/005_docs_setup_okta.jpg';
import OktaSetupImage6 from './assets/006_docs_setup_okta.jpg';
import OktaSetupImage8 from './assets/008_docs_setup_okta.jpg';
import OktaSetupImage9 from './assets/009_docs_setup_okta.jpg';
import OktaSetupImage17 from './assets/017_docs_setup_okta.jpg';

class OktaSetup extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <Intro name="okta" displayName="Okta" />

          <h3>Creation of SSO App on Okta</h3>
          <div>
            <ol>
              <li>Open okta admin dashboard panel. Please select <b>Classic UI</b> from top if not done already.</li>
              <li>Go to Applications (left side). Applications {'->'} Applications</li>
              <li>Click on <b>Add Application</b></li>
              <p><img src={OktaSetupImage3} className="docs-setup-image" alt="docs-setup-okta-003.jpg" /></p>
              <li>Click on <b>Create New App</b></li>
              <p><img src={OktaSetupImage4} className="docs-setup-image" alt="docs-setup-okta-004.jpg" /></p>
              <li>Select <b>Platform</b> as <b>Web</b> and <b>Sign On method</b> as <b>SAML 2.0</b>. Click on <b>Create</b></li>
              <p><img src={OktaSetupImage5} className="docs-setup-image" alt="docs-setup-okta-005.jpg" /></p>
              <li>Enter App name. It can be anything as per your choice and press <b>Next</b></li>
              <p><img src={OktaSetupImage6} className="docs-setup-image" alt="docs-setup-okta-006.jpg" /></p>
              <li>Copy the value of {'<assertion_consumer_service_url>'} from JSON response and paste it on <b>Single sign on URL</b></li>
              <li>Copy the value of {'<sp_entity_id>'} from JSON response and paste it on <b>Audience URI (SP Entity ID) </b></li>
              <li>Update <b>Name ID format</b> to <b>EmailAddress</b></li>
              <li>Update <b>Application username</b> to <b>Email</b></li>
              <p><img src={OktaSetupImage8} className="docs-setup-image" alt="docs-setup-okta-008.jpg" /></p>
              <br/>The next two steps are <b>Optional</b> if you want to pull user first and last name from okta while logging in the user<br/><br/>
              <li>In <b>Attribute Statements (optional)</b>, Add <b>firstName</b> in <b>Name</b> with <b>Value</b> as <b>user.firstName</b></li>
              <li>In <b>Attribute Statements (optional)</b>, Add <b>lastName</b> in <b>Name</b> with <b>Value</b> as <b>user.lastName</b></li>
              <p><img src={OktaSetupImage9} className="docs-setup-image" alt="docs-setup-okta-009.jpg" /></p>
              <li>Click <b>Next</b></li>
              <li>Select <b>I'm an Okta customer adding an internal app</b> for <b>Are you a customer or partner?</b></li>
              <li>Press <b>Finish</b></li>
            </ol>
          </div>

          <h3>Updation of IDP information on SSOConnector</h3>
          <ol>
            <li>Go to the application that was created using above steps. Applications {'->'} Applications and click on the newly created application</li>
            <li>Go to <b>Sign On</b> tab and find <b>Identity Provider metadata</b>. It will open a new tab on click.</li>
            <p><img src={OktaSetupImage17} className="docs-setup-image-long-height" alt="docs-setup-okta-017.jpg" /></p>
            <li>Copy this the URL of this newly opened tab. This URL with be used as <b>idp_metadata_url</b> in the next API call.</li>
          </ol>

          <div><u>Note:</u> For successful usage you need to assign users to newly created App which can be done by visiting <b>Assignments</b> tab.</div><br/>

          <div>Replace {'<IDP_UUID>'} and {'<IDP_METADATA_URL>'} with idp_uuid value obtained from the first API call and idp_metadata_url obtained above.</div>
          <CodeIdpUpdate idpMetaDataURLRequired={true} />

          <h3>Test Login</h3>
          <h4>IDP Initiated SSO</h4>
          <div>All the setup steps have been done. You can visit to Okta Application section (in normal user) mode and try IDP initiated login.</div>
          <Extro />
        </div>

        <Footer />
      </div>
    );
  }
}

export default OktaSetup;
