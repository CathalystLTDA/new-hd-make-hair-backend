module.exports =[
    'strapi::errors',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            "connect-src": ["'self'", "https:"],
            "img-src": [
              "'self'",
              "*.com",
              "data:",
              "blob:",
            'https://s3.us-east-1.amazonaws.com',
              `https://${process.env.STRAPI_ADMIN_AWS_BUCKET}.s3.amazonaws.com`,
              "dl.airtable.com",
              "https://market-assets.strapi.io"
            ],
            "media-src": [
                "'self'",
                "data:",
              "blob:",
              "*.com",
            'https://s3.us-east-1.amazonaws.com',
                `https://${process.env.STRAPI_ADMIN_AWS_BUCKET}.s3.amazonaws.com`,
                "dl.airtable.com",
                "https://market-assets.strapi.io"
              ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
];
