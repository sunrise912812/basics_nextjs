/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['www.seekpng.com'] // Указываем домены откуда могут быть картинки
  }
}

module.exports = nextConfig
