Live demo: [https://mdx-ts-nextjs-starter.vercel.app/](https://mdx-ts-nextjs-starter.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What is this for?

This is a boilerplate for creating blogs using MDX and NextJS with Typescript. Feel free to use this as a starting point for your projects.

### Features

- Write posts in MDX format
- Built-in post caching
- Fuzzy search
- Minimal styling (SCSS)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/search](http://localhost:3000/api/search). This endpoint can be edited in `pages/api/search.ts`.

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
- [ ] SEO OG tags
  - [x] og:title for all pages/posts
  - [x] og:description for all pages/posts
  - [x] og:image for posts
  - [ ] og:type data for posts


## Credits and Acknowledgements
This starter is inspired by Rose Chege's [static-nextjs-blog-with-typescript-mdx-tailwindcss](https://github.com/Rose-stack/static-nextjs-blog-with-typescript-mdx-tailwindcss)

With search implementation inspired by Mat Swainson's [nextjs-blog-search-api](https://github.com/matswainson/nextjs-blog-search-api/tree/master), but now fuzzy
