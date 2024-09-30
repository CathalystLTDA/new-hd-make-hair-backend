// path: /config/env/production/server.ts
export default ({ env }) => ({
     proxy: true,
     url: env('APP_URL'), // Sets the public URL of the application.
     app: {
       keys: env.array('APP_KEYS', ["g/nS+XTBDFlL0p7vpONB3g==","gVS5uncNzmm2Bmjml0G+Zg==","6NIFFFnAHRczrDTvKySR9g==","obzNIttGzSzOcdAe2TQXOw=="])
     },
 });
