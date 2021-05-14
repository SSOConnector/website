function getRedirectTokenURLCode() {
  const curl = `curl --location --request POST 'https://<YOUR_INSTANCE_NAME>/api/v1/admin/setup/redirect-url-token' \ 
  --header 'Authorization: Basic <BASE64_API_KEY>' \ 
  --form 'redirect_token_url="<REDIRECT_TOKEN_URL>"' \ 
  --form 'basic_auth_username="<BASIC_AUTH_USERNAME>"' \ 
  --form 'basic_auth_password="<BASIC_AUTH_PASSWORD>"'
`;

  const pythonCode = `import requests

url = "https://<YOUR_INSTANCE_NAME>/api/v1/admin/setup/redirect-url-token"

payload={'redirect_token_url': '<REDIRECT_TOKEN_URL>',
'basic_auth_username': '<BASIC_AUTH_USERNAME>',
'basic_auth_password': '<BASIC_AUTH_PASSWORD>'}

headers = {
  'Authorization': 'Basic <BASE64_API_KEY>'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)`;

  return {
    curl: {
      code: curl,
      formatingLanguage: 'python',
      display: 'Curl'
    },
    python: {
      code: pythonCode,
      formatingLanguage: 'python',
      display: 'Python'
    }
  };
}

export default getRedirectTokenURLCode;
