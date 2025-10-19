import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["static.crocobet.com", "mediumrare.imgix.net"], // add your external image domain here
  },
};

export default nextConfig;
