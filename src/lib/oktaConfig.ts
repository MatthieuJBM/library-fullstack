export const oktaConfig = {
  clientId: "0oab35fbv8tL1b4ot5d7",
  issuer: "https://dev-05776184.okta.com/oauth2/default",
  redirectUri: "https://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
