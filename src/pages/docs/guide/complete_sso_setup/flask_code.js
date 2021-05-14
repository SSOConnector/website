function getFlaskCode() {
  const flaskCode = `from flask import Flask, request
import json

app = Flask(__name__)

# Use persistent store here like some DB (Mysql, Redis)
token_store = {}

# This URL receives the secure token from SSOConnector
# It store the token and validate it against the redirect request
@app.route("/login/token", methods = ['POST'])
def token():
  form_data = request.form
  base_auth_creds = request.authorization
  base_auth_username, base_auth_password = base_auth_creds["username"], base_auth_creds["password"]

  # update basic auth creds here
  if base_auth_username == "user" and base_auth_password == "pass":
    token = form_data['token']
    response_id = form_data['response_id']
    token_store[token] = response_id
    return "Hello, World!"
  else:
    return "invalid request"

# This URL receives redirect request with authenticated users credentials
@app.route("/login/callback", methods = ['POST'])
def login():
  form_data = request.form
  email = form_data['email']
  first_name = form_data['_idp_attribute_firstName']  # IDP Attributes
  last_name = form_data['_idp_attribute_lastName']    # IDP Attributes
  sp_flow = form_data['sp_initiated_flow']            # Identifies the SSO request type
  token = form_data['token']                          # Unique security token
  response_id = form_data['response_id']

  # token should be present for the request to be valid
  if token in token_store and token_store[token] == response_id:

    # authentication succesful. Log in the User to your application
    # Below is the custom code to display user name

    res = "<h2>Welcome, " + first_name + " " + last_name + "<h2>"
    res += "<h3>We have successfully logged you in with emailId: " + email + ".<h3>"
    if sp_flow:
      res += "FYI, You have used SP Initiated FLow"
    else:
      res += "FYI, You have used IDP Initiated Flow"

    # deleting the token so that it cannot be used again
    del token_store[token]

    return res

  else:
    return "invalid request"

if __name__ == "__main__":
    app.run(debug=True)
`;

  return {
    python: {
      code: flaskCode,
      formatingLanguage: 'python',
      display: 'Flask'
    }
  };
}

export default getFlaskCode;