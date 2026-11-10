/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const withMDX = createMDX({})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default withMDX(nextConfig)
