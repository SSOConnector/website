function apiResponse(idpName) {
  return `{
  "idp_name": "${idpName}",
  "idp_uuid": "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  "sso_target_url": null,
  "cert": null,
  "assertion_consumer_service_url": "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  "sp_entity_id": "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  "idp_entity_id": "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  "active": true
}`;
}

export default apiResponse;