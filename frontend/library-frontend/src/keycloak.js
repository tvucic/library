import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: "http://localhost:9080/auth/",
  realm: "library",
  clientId: "library_app",
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
