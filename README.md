This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) for an [`interview exercise`](https://chart-app-psi.vercel.app/)

This project also uses [`TRPC`](https://trpc.io/docs/client/nextjs/setup) as an optional exercise

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Notes

This Next.js project uses [`PAGES`](https://nextjs.org/docs/pages) router

I had to override a dependency of a dependency since there was an ESM error see https://github.com/antvis/G2/discussions/5089

    "overrides": {
        "d3-interpolate": "2.0.1"
    }
