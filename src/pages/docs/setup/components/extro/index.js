import React from 'react';

class Extro extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h4>SP Initiated SSO</h4>

          <div>
            To test SP Initiated login flows visit URL <b>https://{'<YOUR_INSTANCE_NAME>'}/api/v1/sso/saml2/login/{'<IDP_UUID>'}</b>
          </div>
        </div><br />
        <div>Drop mail to <b>ssoconnector@googlegroups.com</b> if you are having issues with above steps.</div>
        <br /><br />
      </div>
    );
  }
}

export default Extro;