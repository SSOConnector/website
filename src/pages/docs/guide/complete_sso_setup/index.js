import React from 'react';
import Header from '../../../home/components/header';
import Footer from '../../../home/components/footer';
import getFlaskCode from './flask_code';
import getRedirectURLCode from './redirect_url_code';
import getRedirectTokenURLCode from './redirect_token_url_code';
import CodeContainer from '../../components/code_container';
import {
  Link
} from "react-router-dom";

class CompleteSsoSetup extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Complete Single Singe On (SSO) Setup</h1>

          <div>
            This guide will help you setup end to end Single Sign On for both SP Initiated and IDP Initiated SSO login flows.
          </div>

          <h2>Introduction</h2>
          <div>
            <p>There are two parts to SSO.</p>
            <ol>
              <li>Initiation of Login</li>
              <li>Receiving Callback Post Successful Authentication</li>
            </ol>

            <p>Initiation of login for SP and IDP Initiated flows will be done from SSOConnector and IDP respectively.
              So when it comes to first point i.e. Initiation of login we are only concerned about SP Initiated Login
              flow as because IDP initiated login will be initiated by IDP which is something we can't control.</p>
          </div>

          <h2>Login Initiation for SP Initiated Flow from SSOConnector</h2>

          <div>
            <p>Hit <b>https://{'<YOUR_INSTANCE_NAME>'}/api/v1/sso/saml2/login/:idp_uuid</b> with either GET or POST request to initiate the login for the :idp_uuid.</p>

            <p><b><u>Note:</u></b> The value :idp_uuid will be obtained when you have successfully onboarded your customer's IDP data on SSOConnector.
            :idp_uuid is unique value for every IDP you setup on SSOConnector.<br/>
            Refer: <Link className="colored-anchor" to="/docs/guide/client-onboarding-automation">Client Onboarding Automation</Link></p>

            <p>If you want to initiate login for a particular email id then pass <i>email</i> in parameters in the above request.
               This will ensure the checking of email mismatch post successful login. It is good practice to pass <i>email</i> in the parameters for SP Initiated flow.</p>
            <p>An example of email mismatch will be, you wanted to initiate SP login for a particular email id say <i>a@a.com</i>.
              As login is initiated and the user authenticated himself with some other email id say <i>b@b.com</i> on IDP.
              IDP will then redirect the user to SSOConnector with details of <i>b@b.com</i>.
              In this case we will not allow the user to login to your system as authenticated email and requested email doesn't match.
            </p>

            <p>When user is successful authenticated on IDP, SSOConnector will receive a response from IDP with customer creds.
              SSOConnector will redirect the user creds to your application. This will be a callback to your application from SSOConnector.
            </p>
          </div>

          <h2>Receiving Callback Post Successful Authentication</h2>

          <div>
            <p>Once you received a successful login callback from SSOConnector, then you will have to login in the user to your application.</p>
            <p>It is two step process. In the first step, we generate a one time security token and send it to your server using secure basic authentication.
              In the second step we redirect the user to your application with his/her information along with the one time security token sent to you in the first step.
              The one time security token helps in identifying that the redirect request is legit and is being done by SSOConnector only.
            </p>
            <p>Please delete the one time security token from your end once it has been utilized.</p>
          </div>

          <div>
            <p>To receive the callback you need to two things:</p>
            <ol>
              <li><b>Setup Redirect Token URL</b></li>
              <li><b>Setup Redirect URL</b></li>
            </ol>

            <h3>Setup Redirect Token URL</h3>
              <p>There two steps in it</p>
              <ol>
                <li><b>Setup on SSOConnector</b></li>

                <div>
                  <p>It can be configured using the below API.</p>

                  <p>{'<REDIRECT_TOKEN_URL>'} is the endpoint to which we will be sending the one time security token.
                  This URL should be basic auth protected with username and password as {'<BASIC_AUTH_USERNAME>'} and {'<BASIC_AUTH_PASSWORD>'} respectively.</p>

                  <div>
                    <CodeContainer codeInfo={getRedirectTokenURLCode()} />
                  </div>
                  <br />
                </div>

                <li><b>Setup on your Application</b></li>
                <div>
                  <p>You need to create an API endpoint which has been specified above by you where SSOConnector will send the one time unique security token.</p>
                  <p>The information which you will receive will contain the email_id, IDP Attributes (if configured) and one time security token.
                    You need to store this token in some data store.
                    This token will be used in validating the redirect request from SSOConnector. <b>Delete the token from the datastore at your end</b> post its consumption so that it cannot be used again.
                  </p>
                </div>
              </ol>

            <h3>Setup Redirect URL</h3>

            <div>
              <p>There two steps in it</p>
              <ol>
                <li><b>Setup on SSOConnector</b></li>

                <div>
                  <p>It can be configured using the below API.</p>
                  <p>{'<REDIRECT_URL>'} is the endpoint to which we will be redirecting post successful authentication.</p>
                  <div>
                    <CodeContainer codeInfo={getRedirectURLCode()} />
                  </div>
                  <br />
                </div>

                <li><b>Setup on your Application</b></li>
                <div>
                  <p>You need to create an API endpoint that has been specified above by you where SSOConnector will redirect post successful authentication.</p>
                  <p>The information which you will receive will contain the email_id, IDP Attributes (if configured) and one time security token.
                    You need to match this security token with the one send above by the redirect token URL. If the token exists and is equals to response id,
                    then allow the user to login and <b>delete the token from the datastore at your end</b> so that it cannot be used again.
                  </p>
                </div>
              </ol>
            </div>

            <div>
              <p>This setup will redirect the user information to the specified URL with authenticated user's information.</p>
              <p></p>

              <p>IDP Attributes are the information fetched from IDP along with email like first and last name.</p>
              <p><b><u>Note:</u></b> All IDP attributes contains a prefix <i>_idp_attribute_</i></p>
            </div>
          </div>

          <h2>Conclusion</h2>

          <div>
            <p>With the above two setup steps done, you are ready to accept all Single Sign On request to your application.</p>
            <p>Below is the sample flask code to depict how your application code should look like</p>
            <CodeContainer codeInfo={getFlaskCode()} />
          </div>

          <br />
          <br />
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

export default CompleteSsoSetup;
