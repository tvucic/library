const constants = {
  // API
  API_GATEWAY: "http://localhost:9091",
  API_AUTH: "http://localhost:9090/auth",
  API_TOKEN:
    "http://localhost:9080/auth/realms/library/protocol/openid-connect/token",

  // OAuth2
  OAUTH2_REALM: "library",
  OAUTH2_CLIENT_ID: "library_app",
  OAUTH2_CLIENT_SECRET: "e52a6f94-531d-4585-9e85-5126f7d336ef",
  OAUTH2_CLIENT_SECRET: "5WV50lrr74XTM0vnsiCb2opEVh77RvCe",
  OAUTH2_GRANT_TYPE: {
    PASSWORD: "password",
    REFRESH_TOKEN: "refresh_token",
  },

  // Local storage keys
  KEY_ACCESS_TOKEN: "access_token",
  KEY_REFRESH_TOKEN: "refresh_token",
  KEY_EXPIRES_IN: "expires_in",
  KEY_LOGGED_BEFORE: "logged_before",
};

module.exports = constants;
