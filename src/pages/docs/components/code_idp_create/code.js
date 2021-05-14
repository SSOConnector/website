function getCodeConstants(idpName) {

  const curlCode = `curl --location --request POST 'https://<YOUR_INSTANCE>/api/v1/idp/saml2' \ 
  --header 'Authorization: Basic <BASE64_API_KEY>' \ 
  --form 'idp_name="${idpName}"'`;

  const javaCode = `OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
  .addFormDataPart("idp_name","${idpName}")
  .build();
Request request = new Request.Builder()
  .url("https://<YOUR_INSTANCE>/api/v1/idp/saml2")
  .method("POST", body)
  .addHeader("Authorization", "Basic <BASE64_API_KEY>")
  .build();
Response response = client.newCall(request).execute();`;

  const nodeJsCode = `var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://<YOUR_INSTANCE>/api/v1/idp/saml2',
  'headers': {
    'Authorization': 'Basic <BASE64_API_KEY>'
  },
  formData: {
    'idp_name': '${idpName}'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});`;

  const pythonCode = `import requests

url = "https://<YOUR_INSTANCE>/api/v1/idp/saml2"

payload={'idp_name': '${idpName}'}
headers = {
  'Authorization': 'Basic <BASE64_API_KEY>'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)`;

  const rubyCode = `require "uri"
require "net/http"

url = URI("https://<YOUR_INSTANCE>/api/v1/idp/saml2")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = "Basic <BASE64_API_KEY>"
form_data = [['idp_name', '${idpName}']]
request.set_form form_data, 'multipart/form-data'
response = https.request(request)
puts response.read_body`;

  const goCode = `package main

import (
  "fmt"
  "bytes"
  "mime/multipart"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://<YOUR_INSTANCE>/api/v1/idp/saml2"
  method := "POST"

  payload := &bytes.Buffer{}
  writer := multipart.NewWriter(payload)
  _ = writer.WriteField("idp_name", "${idpName}")
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
