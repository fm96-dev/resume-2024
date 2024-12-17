# Federico Mameli - Resume

[![Netlify Status](https://api.netlify.com/api/v1/badges/3949216f-58a0-40be-b632-4b8c83afe1d1/deploy-status)](https://app.netlify.com/sites/federico-mameli-resume/deploys)

This is the project of my online resume, built with nuxt.js.

## Setup

This project is built using devcontainers and pnpm as package manager.

If you use devcontainers, run `pnpm dev:install` to install dependencies,
otherwise use normal `pnpm install`.

When using devcontainers ensure you have a docker volume named `pnpm-store`,
this module will be used as pnpm-store folder to share pacakges between devcontainer projects.

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
