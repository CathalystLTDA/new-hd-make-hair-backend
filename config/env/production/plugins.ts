export default ({ env }) => ({
upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: 'https://hdmh-668682927037.s3-accesspoint.us-east-1.amazonaws.com/HDMH-Images/',
        // rootPath: env('CDN_ROOT_PATH'),
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },
          region: 'us-east-1',
          params: {
            // ACL: env('AWS_ACL', 'public-read'),
            // signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
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
