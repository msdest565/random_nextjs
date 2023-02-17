/** @type {import('next').NextConfig} */
<<<<<<< HEAD

const withLess = require('next-with-less')

const nextConfig = withLess({
  reactStrictMode: true,
  transpilePackages: ['@arco-design/web-react'],

  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        // "arcoblue-6": "#f85959",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.byteimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
})
=======
const nextConfig = {
  reactStrictMode: true,
}
>>>>>>> 3f80defba1e300d2adb7c0ce8d4b57a85b99becf

module.exports = nextConfig
