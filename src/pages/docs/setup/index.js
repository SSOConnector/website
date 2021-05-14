import React from 'react';
import Header from '../../home/components/header';
import Idp from '../components/idp';
import OktaImage from '../../../assets/idp/okta.png';
import OneLoginImage from '../../../assets/idp/onelogin.png';
import './index.scss';
import {
  Link
} from "react-router-dom";

class Setup extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Setup</h1>
          <div className="idp-setup-list">
            <Link to="/docs/setup/okta">
              <Idp name="Okta" img={OktaImage} />
            </Link>
            <Link to="/docs/setup/onelogin">
              <Idp name="OneLogin" img={OneLoginImage} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Setup;
