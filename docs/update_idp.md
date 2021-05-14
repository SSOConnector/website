-----
curl
-----

curl --location --request PUT 'https://demo.ssoconnector.com/api/v1/idp' \
--form 'idp_uuid="a5574143-5d4b-4b93-9100-a329aec40594"' \
--form 'idp_metadata_url="https://dev-4750266.okta.com/app/exk9ihy6ws8xgds5H5d6/sso/saml/metadata"'


----
java
----

OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
  .addFormDataPart("idp_uuid","a5574143-5d4b-4b93-9100-a329aec40594")
  .addFormDataPart("idp_metadata_url","https://dev-4750266.okta.com/app/exk9ihy6ws8xgds5H5d6/sso/saml/metadata")
  .build();
Request request = new Request.Builder()
  .url("https://demo.ssoconnector.com/api/v1/idp")
  .method("PUT", body)
  .build();
Response response = client.newCall(request).execute();


-----
node
----

var request = require('request');
var options = {
  'method': 'PUT',
  'url': 'https://demo.ssoconnector.com/api/v1/idp',
  'headers': {
  },
  formData: {
    'idp_uuid': 'a5574143-5d4b-4b93-9100-a329aec40594',
    'idp_metadata_url': 'https://dev-4750266.okta.com/app/exk9ihy6ws8xgds5H5d6/sso/saml/metadata'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});



----
python
------


import requests

url = "https://demo.ssoconnector.com/api/v1/idp"

payload={'idp_uuid': 'a5574143-5d4b-4b93-9100-a329aec40594',
'idp_metadata_url': 'https://dev-4750266.okta.com/app/exk9ihy6ws8xgds5H5d6/sso/saml/metadata'}
files=[

]
headers = {}

response = requests.request("PUT", url, headers=headers, data=payload, files=files)

print(response.text)



------
ruby
------


require "uri"
require "net/http"

url = URI("https://demo.ssoconnector.com/api/v1/idp")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Put.new(url)
form_data = [['idp_uuid', 'a5574143-5d4b-4b93-9100-a329aec40594'],['idp_metadata_url', 'https://dev-4750266.okta.com/app/exk9ihy6ws8xgds5H5d6/sso/saml/metadata']]
request.set_form form_data, 'multipart/form-data'
response = https.request(request)
puts response.read_body




--------
response
--------
{
    "idp_name": "okta",
    "idp_uuid": "a5574143-5d4b-4b93-9100-a329aec40594",
    "sso_target_url": "https://dev-4750266.okta.com/app/dev-4750266_demosso_3/exk9ihy6ws8xgds5H5d6/sso/saml",
    "cert": "MIIDpjCCAo6gAwIBAgIGAXcMftFvMA0GCSqGSIb3DQEBCwUAMIGTMQswCQYDVQQGEwJVUzETMBEG\nA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEU\nMBIGA1UECwwLU1NPUHJvdmlkZXIxFDASBgNVBAMMC2Rldi00NzUwMjY2MRwwGgYJKoZIhvcNAQkB\nFg1pbmZvQG9rdGEuY29tMB4XDTIxMDExNjE4MzgzM1oXDTMxMDExNjE4MzkzM1owgZMxCzAJBgNV\nBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRYwFAYDVQQHDA1TYW4gRnJhbmNpc2NvMQ0wCwYD\nVQQKDARPa3RhMRQwEgYDVQQLDAtTU09Qcm92aWRlcjEUMBIGA1UEAwwLZGV2LTQ3NTAyNjYxHDAa\nBgkqhkiG9w0BCQEWDWluZm9Ab2t0YS5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\nAQCPqpykywAEQkp9PHLsGL13yYaf74nyPfTNJnOqVbPOr+d5J4vB5n7ueouA8lul7zOpdT9LFqLq\n4ql2vhdBZsCSK3SIr+B1A5srHmFfX++EH21eZOYDDapqhCrG1HRITKGbrpSP/FkEc966nW3fe24+\nUv4hLgBkH+1gc6AAw3gpea5Xrt1P0ZLdhI7BAYSa1M6++NmeDqrQOkpGdlTpaHL3ypcCRVsvPa1G\nEKbvjj0ge8P+ww/1cXJSzKTTBR0zCmzionJIUE5/t3D6wpeUoNKQ+JbzX62rbPB5m8Akf6ewxUEK\nLKd1u8fX0+ARu1l9gdquVpD2HDCcpFQaPUWkLij5AgMBAAEwDQYJKoZIhvcNAQELBQADggEBAEKh\nPh/CZR0fYzo8FttOubOtYFns3oBk+rX/wzd2m/2lHzefjjZt2Ejumujg6+5QNy26pT/rzHqX2+kd\nzilfEi3onN8JoygysB3thRhgnFedbB1jWAEi87BVhQMKx8QmVa4eXT59Y2i3sjLSS8ifRw+Lb2EU\nzAuR3wFsPE/R51PN838URdatMu6gJRuswnUt2d3VLi3SU+mKl4ZVtP1Ek95wj68DLOwpAP1ezPtJ\nLYh0Arhqx0JGThWKhHbGfIOAxTduLTQ96ZWPBc0+HMwVEmXmeebA1Wv/g/JI61krUCnUYdYDH+D7\nHQkZ4wb7IOzAqT74SeKoHCpOOUhow6LKF/s=",
    "assertion_consumer_service_url": "https://demo.ssoconnector.com/api/v1/sso/saml2/callback/a5574143-5d4b-4b93-9100-a329aec40594",
    "sp_entity_id": "https://demo.ssoconnector.com/api/v1/sso/saml2/callback/a5574143-5d4b-4b93-9100-a329aec40594"
}