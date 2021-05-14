function getRedirectURLCode() {
  const curl = `curl --location --request POST 'https://<YOUR_INSTANCE_NAME>/api/v1/admin/setup/redirect-url' \ 
  --header 'Authorization: Basic <BASE64_API_KEY>' \ 
  --form 'redirect_url="<REDIRECT_URL>"'
`;

const pythonCode = `import requests

url = "https://<YOUR_INSTANCE_NAME>/api/v1/admin/setup/redirect-url-token"

payload={'redirect_token_url': '<REDIRECT_URL>'}

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

export default getRedirectURLCode;
