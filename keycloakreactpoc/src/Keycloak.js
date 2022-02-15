import Keycloak from "keycloak-js";
const keycloak = Keycloak({
    "realm": "TestRealm1",
    "auth-server-url": "http://localhost:8080/auth/",
    "ssl-required": "external",
    "resource": "account-console",
    "clientId": "account-console",
    "public-client": true,
    "confidential-port": 0
  });

export default keycloak;