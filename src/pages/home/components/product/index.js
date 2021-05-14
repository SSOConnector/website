import React from 'react';
import './index.scss';

class About extends React.Component {
  render() {
    return (
      <div className="about-container" id="about">
       <div className="container">
        <h2 className="about-heading">
            About
          </h2>
          <div className="about-content">
            SSOConnector acts as a proxy for your SSO applications.

            There are 2 flows in Single Sign On (SSO) namely IDP Initiated SSO and SP initiated SSO.

            <div className="about-sso-flows">
              <div className="about-initiated-sso">
                <div className="about-initiated-sso-heading">
                  IDP Initiated SSO
                </div>
                <div className="about-initiated-sso-content">
                  <ul>
                    <li>Customer logins to your application on their IDP<sup><font color="red">*</font></sup></li>
                    <li>SSOConnector receives the login request from IDP, which it then authenticates and the customer is redirected to your application securely.</li>
                  </ul>

                  <font color="red">*</font>We will help you setup your application for the IDPs we support with our detailed step by step documentation
                </div>
              </div>

              <div className="about-initiated-sso">
                <div className="about-initiated-sso-heading">
                  SP Initiated SSO
                </div>
                <div className="about-initiated-sso-content">
                  <ul>
                    <li>Customer requests login from your application</li>
                    <li>Your application redirects the customer to SSOConnector</li>
                    <li>SSOConnector redirects the customer to IDP for authentication.</li>
                    <li>Post authentication from IDP, IDP redirects the customer to SSOConnector</li>
                    <li>SSOConnector receives the login request from IDP, which it then authenticates and the customer is redirected to your application securely.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
       </div>
      </div>
    );
  }
}

export default About;
