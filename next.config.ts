import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = config.resolve.alias || {};

    config.resolve.alias['sbs-affordability-types'] = false;
    return config;
  }
};

export default nextConfig;
