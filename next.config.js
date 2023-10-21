/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    ENDPOINT: process.env.ENDPOINT,
    API_KEY: process.env.API_KEY
  }
}

module.exports = nextConfig
