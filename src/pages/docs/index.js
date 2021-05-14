import React from 'react';
import Header from '../home/components/header';
import Footer from '../home/components/footer'
import DocsMenu from './components/docs_menu'
import './index.scss';
import {
  Link
} from "react-router-dom";

class Docs extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div class="docs-heading">
            <h1>Welcome to SSOConnector Documentation</h1>
          </div>
          <h3 class="docs-get-started">
            <Link className="colored-anchor" to="/docs/guide/getting-started-saml">Get Started with SSOConnector</Link>
          </h3>
          <div class="docs-menu">
            <DocsMenu name="Setup" link="/docs/setup" description="Step by step guide to setup Single Sign On using SSOConnector with various Identity Provider" />
            <DocsMenu name="Guides" link="/docs/guide" description="Guides for different optimization and use cases of Single Sign On using SSOConnector" />
            <DocsMenu name="API" link="/docs/api" description="Detailed documentation about all the API endpoints of SSOConnector" />
            <DocsMenu name="References" link="/docs/references" description="Description about different terminologies of Single Sign On and SSOConnector" />
          </div>
        </div>
        <div class="sticky-footer-docs"><Footer /></div>
      </div>
    );
  }
}

export default Docs;
