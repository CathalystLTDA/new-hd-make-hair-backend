const parse = require("pg-connection-string").parse;

// const { host, port, database, user, password } = parse(
//    process.env.POSTGRES_URL
//  );

export default ({ env }) => ({
  connection: {
    connectionString:"postgres://default:PtgBL5qHn9NS@ep-wild-poetry-a404wid3.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  },
});
