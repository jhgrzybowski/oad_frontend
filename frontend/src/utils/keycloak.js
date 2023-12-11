import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://10.9.0.1:8080",
  realm: "once_a_day",
  clientId: "OAD",
});

export default keycloak;
