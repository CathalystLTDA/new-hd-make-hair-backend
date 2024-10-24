export default ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ['self', 'unsafe-inline', 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            `https://hdmh-strapi-s3-bucket.s3.amazonaws.com`,
            'dl.airtable.com',
            'market-assets.strapi.io'
          ],
            'media-src': [
            "'self'",
            'data:',
            'blob:',
            `https://hdmh-strapi-s3-bucket.s3.amazonaws.com`,
            'dl.airtable.com',
            'market-assets.strapi.io'
        ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
