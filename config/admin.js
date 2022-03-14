module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '56cf156fbff024408b74ed88c0db3dd2'),
  },
});
