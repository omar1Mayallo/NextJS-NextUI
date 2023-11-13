/** @type {import('next').NextConfig} */
const nextConfig = {
  // @Desc | Portal Application is A Administrative panel It Not Have Home Page So Here We Make A "login" page as a main page
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
