# Siwa Wellness Resort 2025

Official website for the Siwa Wellness Resort project.

## Setup for Automatic Deployments

To enable automatic deployments to Vercel when pushing to GitHub:

1. Create a new Vercel project and link it to your GitHub repository
2. Add the following secrets to your GitHub repository:
   - `VERCEL_TOKEN`: Your Vercel API token (generate from Vercel account settings)
   - `VERCEL_ORG_ID`: Your Vercel organization ID (find in Vercel project settings)
   - `VERCEL_PROJECT_ID`: Your Vercel project ID (find in Vercel project settings)

3. Push to the main branch to trigger a deployment.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

- `/src/app/` - Next.js app router pages
- `/src/components/` - Reusable React components
- `/public/` - Static assets (images, etc.)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
