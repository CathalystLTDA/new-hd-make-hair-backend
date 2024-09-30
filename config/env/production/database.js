 // path: /config/env/production/database.ts
 export default ({ env }) => ({
   connection: {
     client: 'postgres',
     connection: {
       host: "ep-wild-poetry-a404wid3.us-east-1.aws.neon.tech",
       port: 5432,
       database: "verceldb",
       user: "default",
       password: "PtgBL5qHn9NS",
       ssl: {
         rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
       },
     },
     debug: true,
   },
 });


//  DATABASE_HOST=ep-wild-poetry-a404wid3.us-east-1.aws.neon.tech
// DATABASE_PORT=5432
// DATABASE_NAME=verceldb
// DATABASE_USERNAME=default
// DATABASE_PASSWORD=PtgBL5qHn9NS
