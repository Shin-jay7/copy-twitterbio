/** @type {import('next').NextConfig} */
module.exports = {
    async redirects() {
      return [
        {
          source: '/github',
          destination: 'https://github.com/Shin-jay7/copy-twitterbio',
          permanent: false,
        },
        {
          source: '/deploy',
          destination: 'https://vercel.com/templates/next.js/twitter-bio',
          permanent: false,
        },
      ];
    },
  };