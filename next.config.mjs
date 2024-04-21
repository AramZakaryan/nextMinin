import 'dotenv/config'
/** @type {import('next').NextConfig} */



const nextConfig = {
    env: {
        API_URL: process.env.API_URL
    }
};


console.log(process.env)

export default nextConfig;
