/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    github: {
      token: process.env.GITHUB_TOKEN,
      api: process.env.GITHUB_API,
      rawContent: process.env.GITHUB_RAW_CONTENT,
    },
  },
}

module.exports = nextConfig
