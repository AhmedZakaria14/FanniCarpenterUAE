import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  images: { remotePatterns: [
    { protocol: 'https', hostname: 'picsum.photos', port: '', pathname: '/**' },
    { protocol: 'https', hostname: 'res.cloudinary.com', port: '', pathname: '/**' },
    { protocol: 'https', hostname: 'd8j0ntlcm91z4.cloudfront.net', port: '', pathname: '/**' },
    { protocol: 'https', hostname: 'cdnmf.picsart.com', port: '', pathname: '/**' },
  ] },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => { if (dev && process.env.DISABLE_HMR === 'true') config.watchOptions = { ignored: /.*/ }; return config; },
};

export default nextConfig;
