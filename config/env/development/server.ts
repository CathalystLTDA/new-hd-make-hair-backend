export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["g/nS+XTBDFlL0p7vpONB3g==","gVS5uncNzmm2Bmjml0G+Zg==","6NIFFFnAHRczrDTvKySR9g==","obzNIttGzSzOcdAe2TQXOw=="])
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
