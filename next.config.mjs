import { withContentlayer } from "next-contentlayer"
import createMDX from "@next/mdx"

const withMDX = createMDX({
  extension: /\.mdx$/
})
import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"]
  },
  experimental: {
    // ppr: true,
    // reactCompiler: true
  },
  future: {
    webpack5: true,   
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,  
      fs: false,
    };
    
    return config;
  },
})

export default withContentlayer(nextConfig)
