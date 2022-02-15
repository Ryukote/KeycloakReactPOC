import Keycloak from "keycloak-js";
const keycloak = Keycloak({
    "realm": "Realm1",
    "auth-server-url": "http://localhost:8080/auth/",
    "ssl-required": "external",
    "resource": "accountconsole",
    "clientId": "accountconsole",
    "public-client": true,
    "confidential-port": 0
  });

export default keycloak;