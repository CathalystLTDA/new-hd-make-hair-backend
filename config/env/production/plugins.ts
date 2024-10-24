export default ({ env }) => ({
upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: 'hdmh-strapi-s3-bucket.us-east-1.amazonaws.com',
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },
          region: 'us-east-1',
          params: {
            ACL: 'public-read',
            Bucket: 'hdmh-strapi-s3-bucket',
          },
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
