module.exports = ({ env }) => ({
          upload: {
            config: {
              provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('STRAPI_ADMIN_AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('STRAPI_ADMIN_AWS_ACCESS_SECRET'),
        },
        region: env('STRAPI_ADMIN_AWS_REGION'),
        baseUrl: `https://s3.${env('STRAPI_ADMIN_AWS_REGION')}.amazonaws.com/${env('STRAPI_ADMIN_AWS_BUCKET')}`,
        params: {
          ACL: 'private',
          Bucket: env('STRAPI_ADMIN_AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
