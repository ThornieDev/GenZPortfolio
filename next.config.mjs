/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',           // crucial for static export
    images: { unoptimized: true }, // GH Pages lacks the image optimizer
    // basePath: 'https://github.com/ThornieDev/thornieportfolio',  // uncomment if deploying to user.github.io/<repo-name>
};

export default nextConfig;
