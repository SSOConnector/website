import React from 'react';
import Header from '../../home/components/header';

class References extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <h1>Terminologies</h1>

          <ol>
            <li>Identity Provider</li>
            <li>Service Provider</li>
            <li>IDP Initiated SSO</li>
            <li>SP Initiated SSO</li>
            <li>Assertion Consumer Service URL</li>
            <li>SSO Target URL</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default References;
