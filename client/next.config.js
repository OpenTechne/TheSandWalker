/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    images: { unoptimized: true } , // TODO: in gh ci must be false, to alow dev mode must be true-
}

module.exports = nextConfig
