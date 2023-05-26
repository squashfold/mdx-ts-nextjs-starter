This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What is this for?

This is a boilerplate for creating blogs using MDX and NextJS with Typescript. Feel free to use this as a starting point for your projects.

### Features

-Write posts in MDX format
-Built-in post caching
-Fuzzy search
-Minimal styling (SCSS)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Caching Posts

Posts are cached in order for the search API to work. Posts should cache automatically on pre-commit, but if they don't or you need to manually cache posts for testing run:

```bash
npm run cache-posts
```

## TODO

- [x] Implement Fuzzy search  
- [ ] Add tags to search filters  
- [ ] Add breadcrumbs

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Credits and Acknowledgements
This starter uses Rose Chege's [static-nextjs-blog-with-typescript-mdx-tailwindcss](https://github.com/Rose-stack/static-nextjs-blog-with-typescript-mdx-tailwindcss) as a base

With search implementation inspired by Mat Swainson's [nextjs-blog-search-api](https://github.com/matswainson/nextjs-blog-search-api/tree/master), but now fuzzy
