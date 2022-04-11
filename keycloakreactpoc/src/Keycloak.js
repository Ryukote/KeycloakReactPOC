import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/auth",
 realm: "MUP-RECORD",
 clientId: "mup-test-client",
 "check-sso": true
});

export default keycloak;