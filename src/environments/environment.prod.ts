export const environment = {
  production: true,
  auth: {
    CLIENT_ID: 'oG9khmjGjziUJRu0miHvtqF5tNeWK833',
    CLIENT_DOMAIN: 'wallettopup.auth0.com', // e.g., 'you.auth0.com'
    AUDIENCE: 'https://wallettopup.auth0.com/api/v2/',
    REDIRECT: 'http://localhost:4200/callback', // for production this has to be production address, and it has to be added to configuration on auth0 dashboard
    LOGOUT_URL: 'http://localhost:4200' // and this
  }
};
