import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/auth",
 realm: "TestRealm1",
 clientId: "testclient",
 "check-sso": true
});

export default keycloak;