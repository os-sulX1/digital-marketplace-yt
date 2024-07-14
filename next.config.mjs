/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors:true
  },
  images:{
    remotePatterns:[
      {
        hostname:'utfs.io',
        protocol:'https',
        port:''
      }
    ]
  }
};

export default nextConfig;
