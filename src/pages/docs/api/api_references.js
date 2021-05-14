function getFieldDescription(field) {
  const fieldDescription = {
    idp_uuid: "Unique Id of the IDP data on SSOConnector",
    idp_name: "Name of IDP. Should be one of the output of GET /idp/saml2/supported",
    sso_service_url: "Single Sign On service URL of the IDP",
    cert: "X.509 certificate of the IDP",
    assertion_consumer_service_url: "ACS URL to be stored on IDP",
    sp_entity_id: "Entity ID of Service Provider",
    idp_entity_id: "Entity ID of Identiy Provider",
    idp_metadata_url: "IDP Metadata URL",
    redirect_url: "Redirect URL which will be used post successful authentication",
    redirect_token_url: "URL where we POST the token before redirect post succesful authentication",
    basic_auth_username: "Username to be used for Basic Auth",
    basic_auth_password: "Password to be used for Basic Auth",
  };
  return fieldDescription[field];
}

function apiReferences() {
  const apiRef = {
    v1: [
      {
        httpMethod: 'GET',
        endpoint: '/idp/saml2/supported',
        description: 'Get list of IDPs supported by SSOConnector',
        headers: basicAuthHeader(),
        body: [],
        response: []
      },
      {
        httpMethod: 'GET',
        endpoint: '/idp/saml2',
        description: 'Get the details of specified Id',
        headers: basicAuthHeader(),
        body: [
          {
            name: "idp_uuid",
            description: getFieldDescription("idp_uuid"),
            optional: false
          }
        ],
        response: idpMetaData()
      },
      {
        httpMethod: 'POST',
        endpoint: '/idp/saml2',
        description: 'Create a new IDP on SSOConnector',
        headers: basicAuthHeader(),
        body: [
          {
            name: "idp_name",
            description: getFieldDescription("idp_name"),
            optional: false
          }
        ],
        response: idpMetaData()
      },
      {
        httpMethod: 'PUT',
        endpoint: '/idp/saml2',
        description: 'Update existing IDP on SSOConnector',
        headers: basicAuthHeader(),
        body: [
          {
            name: "idp_uuid",
            description: getFieldDescription("idp_uuid"),
            optional: false
          },
          {
            name: "idp_metadata_url",
            description: getFieldDescription("idp_metadata_url"),
            optional: true
          },
          {
            name: "sso_target_url",
            description: getFieldDescription("sso_target_url"),
            optional: true
          },
          {
            name: "cert",
            description: getFieldDescription("cert"),
            optional: true
          },
          {
            name: "idp_entity_id",
            description: getFieldDescription("idp_entity_id"),
            optional: true
          }
        ],
        response: idpMetaData()
      },
      {
        httpMethod: 'DELETE',
        endpoint: '/idp/saml2',
        description: 'Delete existing IDP on SSOConnector',
        headers: basicAuthHeader(),
        body: [
          {
            name: "idp_uuid",
            description: getFieldDescription("idp_uuid"),
            optional: false
          }
        ],
        response: []
      },
      {
        httpMethod: 'POST',
        endpoint: '/admin/setup/token',
        description: 'Generates a new <API_KEY>',
        headers: basicAuthHeader(),
        body: [],
        response: [
          {
            name: "token",
            description: "New <API_KEY>"
          }
        ]
      },
      {
        httpMethod: 'GET',
        endpoint: '/admin/setup/redirect-url',
        description: 'Returns the redirect url which will be used post successful authentication',
        headers: basicAuthHeader(),
        body: [],
        response: [
          {
            name: "redirect_url",
            description: getFieldDescription("redirect_url")
          }
        ]
      },
      {
        httpMethod: 'POST',
        endpoint: '/admin/setup/redirect-url',
        description: 'Update the redirect url which will be used post successful authentication',
        headers: basicAuthHeader(),
        body: [
          {
            name: "redirect_url",
            description: getFieldDescription("redirect_url"),
            optional: false
          }
        ],
        response: [
          {
            name: "redirect_url",
            description: getFieldDescription("redirect_url")
          }
        ]
      },
      {
        httpMethod: 'GET',
        endpoint: '/admin/setup/redirect-url-token',
        description: 'Returns the URL where to POST token before redirect which will be used post successful authentication',
        headers: basicAuthHeader(),
        body: [],
        response: [
          {
            name: "redirect_token_url",
            description: getFieldDescription("redirect_token_url")
          },
          {
            name: "basic_auth_username",
            description: getFieldDescription("basic_auth_username")
          },
          {
            name: "basic_auth_password",
            description: getFieldDescription("basic_auth_password")
          }
        ]
      },
      {
        httpMethod: 'POST',
        endpoint: '/admin/setup/redirect-url-token',
        description: 'Update the URL where to POST token before redirect which will be used post successful authentication',
        headers: basicAuthHeader(),
        body: [
          {
            name: "redirect_token_url",
            description: getFieldDescription("redirect_token_url"),
            optional: false
          },
          {
            name: "basic_auth_username",
            description: getFieldDescription("basic_auth_username"),
            optional: true
          },
          {
            name: "basic_auth_password",
            description: getFieldDescription("basic_auth_password"),
            optional: true
          }
        ],
        response: [
          {
            name: "redirect_token_url",
            description: getFieldDescription("redirect_token_url")
          }
        ]
      },
      {
        httpMethod: 'GET or POST',
        endpoint: '/sso/saml2/login/:idp_uuid',
        description: 'Initiate SP Initiated SSO for specified :idp_uuid',
        body: [
          {
            name: "email",
            description: "Email ID of the user for which SSO is initiated",
            optional: true
          }
        ]
      }
    ]
  };

  return apiRef;
}

function basicAuthHeader() {
  return [
    {
      value: 'Authorization: Basic <BASE64_API_KEY>',
      description: 'Basic auth is required for this API'
    }
  ];
}

function idpMetaData() {
  return [
    {
      name: "idp_name",
      description: "Identity Provider Name"
    },
    {
      name: "idp_uuid",
      description: getFieldDescription("idp_uuid")
    },
    {
      name: "sso_service_url",
      description: getFieldDescription("sso_service_url")
    },
    {
      name: "cert",
      description: getFieldDescription("cert")
    },
    {
      name: "assertion_consumer_service_url",
      description: getFieldDescription("assertion_consumer_service_url")
    },
    {
      name: "sp_entity_id",
      description: getFieldDescription("sp_entity_id")
    },
    {
      name: "idp_entity_id",
      description: getFieldDescription("idp_entity_id")
    },
    {
      name: "active",
      description: "Boolean field describing whether IDP is active or not."
    }
  ];
}

export default apiReferences;
