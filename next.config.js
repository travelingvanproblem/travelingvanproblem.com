// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  async redirects() {
    return [
      // Preserve the old hugo urls in this blog
      {
        source: '/docs/remote-work/affordable-4g-data/',
        destination: '/affordable-4g-data/',
        permanent: true
      },
      {
        source: '/docs/living-in-the-van/',
        destination: '/living-in-a-van/',
        permanent: true
      },
      {
        source: '/docs/europe/',
        destination: '/europe/',
        permanent: true
      },
      {
        source: '/docs/remote-work/',
        destination: '/working-remotely/',
        permanent: true
      },
    ]
  }
})
