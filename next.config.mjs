/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const withMDX = createMDX({})

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (
  process.env.GITHUB_ACTIONS && repositoryName && !repositoryName.endsWith('.github.io')
    ? `/${repositoryName}`
    : ''
)

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default withMDX(nextConfig)
