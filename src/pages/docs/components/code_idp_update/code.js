function getCodeConstants(idpMetaDataURLRequired) {

  let curlCode = `curl --location --request PUT 'https://<YOUR_INSTANCE>/api/v1/idp/saml2' \ 
  --header 'Authorization: Basic <BASE64_API_KEY>' \ 
  --form 'idp_uuid="<IDP_UUID>"' \ \n `;

  if(idpMetaDataURLRequired) {
    curlCode += ` --form 'idp_metadata_url="<IDP_METADATA_URL>"'`;
  } else {
    curlCode += ` --form 'cert="<CERT>"' \ 
  --form 'idp_entity_id="<IDP_ENTITY_ID>"' \ 
  --form 'sso_service_url="<SSO_SERVICE_URL>"'`;
  }

  let javaCode = `OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
  .addFormDataPart("idp_uuid","<IDP_UUID>")
  `;

  if(idpMetaDataURLRequired) {
    javaCode += `.addFormDataPart("idp_metadata_url","<IDP_METADATA_URL>")`;
  } else {
    javaCode += `.addFormDataPart("cert","<CERT>")
  .addFormDataPart("idp_entity_id","<IDP_ENTITY_ID>")
  .addFormDataPart("sso_service_url","<SSO_SERVICE_URL>")`;
  }

  javaCode += `
  .build();
Request request = new Request.Builder()
  .url("https://<YOUR_INSTANCE>/api/v1/idp/saml2")
  .method("PUT", body)
  .addHeader("Authorization", "Basic <BASE64_API_KEY>")
  .build();
Response response = client.newCall(request).execute();`;

  let nodeJsCode = `var request = require('request');
var options = {
  'method': 'PUT',
  'url': 'https://<YOUR_INSTANCE>/api/v1/idp/saml2',
  'headers': {
    'Authorization': 'Basic <BASE64_API_KEY>'
  },
  formData: {
    'idp_uuid': '<IDP_UUID>',
    `;

  if(idpMetaDataURLRequired) {
    nodeJsCode += `'idp_metadata_url': '<IDP_METADATA_URL>'`;
  } else {
    nodeJsCode += `'cert': '<CERT>',
    'idp_entity_id': '<IDP_ENTITY_ID>',
    'sso_service_url': '<SSO_SERVICE_URL>'`;
  }

  nodeJsCode += `
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});`;

  let pythonCode = `import requests

url = "https://<YOUR_INSTANCE>/api/v1/idp/saml2"
`;

  if(idpMetaDataURLRequired) {
    pythonCode += `payload={'idp_uuid': '<IDP_UUID>', 'idp_metadata_url': '<IDP_METADATA_URL>'}`;
  } else {
    pythonCode += `payload={'idp_uuid': '<IDP_UUID>', 'cert': '<CERT>', 'sso_service_url': '<SSO_SERVICE_URL>', 'idp_entity_id': '<IDP_ENTITY_ID>'}`;
  }

  pythonCode += `
headers = {
  'Authorization': 'Basic <BASE64_API_KEY>'
}

response = requests.request("PUT", url, headers=headers, data=payload)

print(response.text)`;

  let rubyCode = `require "uri"
require "net/http"

url = URI("https://<YOUR_INSTANCE>/api/v1/idp/saml2")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
request["Authorization"] = "Basic <BASE64_API_KEY>"
`;

if(idpMetaDataURLRequired) {
  rubyCode += `form_data = [['idp_uuid', '<IDP_UUID>'],['idp_metadata_url', '<IDP_METADATA_URL>']]`;
} else {
  rubyCode += `form_data = [['idp_uuid', '<IDP_UUID>'],['cert', '<CERT>'],['sso_service_url', '<SSO_SERVICE_URL>'],['idp_entity_id', '<IDP_ENTITY_ID>']]`;
}

rubyCode += `
request.set_form form_data, 'multipart/form-data'
response = https.request(request)
puts response.read_body`;

  let goCode = `package main

import (
  "fmt"
  "bytes"
  "mime/multipart"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://<YOUR_INSTANCE>/api/v1/idp/saml2"
  method := "PUT"

  payload := &bytes.Buffer{}
  writer := multipart.NewWriter(payload)
  _ = writer.WriteField("idp_uuid", "<IDP_UUID>")
  `;

  if(idpMetaDataURLRequired) {
    goCode += `_ = writer.WriteField("idp_metadata_url", "<IDP_METADATA_URL>")`;
  } else {
    goCode += `_ = writer.WriteField("cert", "<CERT>")
  _ = writer.WriteField("idp_entity_id", "<IDP_ENTITY_ID>")
  _ = writer.WriteField("sso_service_url", "<SSO_SERVICE_URL>")`;
  }

  goCode += `
  err := writer.Close()
  if err != nil {
    fmt.Println(err)
    return
  }


  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Authorization", "Basic <BASE64_API_KEY>")

  req.Header.Set("Content-Type", writer.FormDataContentType())
  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}`;

  return {
    curl: {
      code: curlCode,
      formatingLanguage: 'java',
      display: 'Curl'
    },
    java: {
      code: javaCode,
      formatingLanguage: 'java',
      display: 'Java'
    },
    nodeJs: {
      code: nodeJsCode,
      formatingLanguage: 'js',
      display: 'Node'
    },
    python: {
      code: pythonCode,
      formatingLanguage: 'python',
      display: 'Python'
    },
    go: {
      code: goCode,
      formatingLanguage: 'go',
      display: 'Go'
    },
    ruby: {
      code: rubyCode,
      formatingLanguage: 'ruby',
      display: 'Ruby'
    }
  };
}

export default getCodeConstants;
