create of new idp


-------
curl
------

curl --location --request POST 'https://demo.ssoconnector.com/api/v1/idp' \
--form 'idp_name="okta"'

--------
JAVA
--------

OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
  .addFormDataPart("idp_name","okta")
  .build();
Request request = new Request.Builder()
  .url("https://demo.ssoconnector.com/api/v1/idp")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();


-------
Node
-------
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://demo.ssoconnector.com/api/v1/idp',
  'headers': {
  },
  formData: {
    'idp_name': 'okta'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


-------
python
-------

import requests

url = "https://demo.ssoconnector.com/api/v1/idp"

payload={'idp_name': 'okta'}
files=[

]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)


--------
ruby
-------

require "uri"
require "net/http"

url = URI("https://demo.ssoconnector.com/api/v1/idp")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
form_data = [['idp_name', 'okta']]
request.set_form form_data, 'multipart/form-data'
response = https.request(request)
puts response.read_body



--------
Response
--------

{
    "idp_name": "okta",
    "idp_uuid": "a5574143-5d4b-4b93-9100-a329aec40594",
    "sso_target_url": null,
    "cert": null,
    "assertion_consumer_service_url": "https://demo.ssoconnector.com/api/v1/sso/saml2/callback/a5574143-5d4b-4b93-9100-a329aec40594",
    "sp_entity_id": "https://demo.ssoconnector.com/api/v1/sso/saml2/callback/a5574143-5d4b-4b93-9100-a329aec40594"
}