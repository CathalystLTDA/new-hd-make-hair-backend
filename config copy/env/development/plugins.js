module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_U9tmy6lQ9wgonuGkNtIFmfZWcYsa/5pyQEaGzdM",
      apiToken: "9k74XzT7Fn6VBBCxIvFYHq00",
      appFilter: "new-hd-make-hair-backend",
      teamFilter: "team_B3QJC70vrWDQC0p6ptCtNr5y",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    }
  },
});
