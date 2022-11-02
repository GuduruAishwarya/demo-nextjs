/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false, // React Strict Mode is off
  redirects:async()=>
  {
    return[
      {
        source:'/layout',
        destination:'/',
        permanent:true
      },
      // {
      //   source:'/posts/:id',
      //   destination:'/api/comments/:id',
      //   permanent:true
      // },
      
    ]
  }
}

module.exports = nextConfig
