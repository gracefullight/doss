# Doss

Duplicated version of Toss application

![demo](./apps/web/public/demo.jpg)

## structure

```bash
.
├── apps
│   ├── storybook: doss ui storybook
│   └── web: doss web application
└── packages
    ├── config
    │   ├── eslint: Shared ESLint configurations
    │   ├── tailwind: Shared Tailwind CSS configurations
    │   └── ts: Shared typescript configurations
    ├── db: Shared database schema, using Prisma
    └── ui: Shared ui components, using Tailwind and Daisy
```

## stacks

- [nextjs](https://github.com/vercel/next.js)
- [turbo](https://github.com/vercel/turbo)
- [prisma](https://github.com/prisma/prisma)
- [trpc](https://github.com/trpc/trpc)
- [redoc](https://github.com/Redocly/redoc)
- [tailwind](https://github.com/tailwindlabs/tailwindcss)
- [daisyui](https://github.com/saadeghi/daisyui)
- [storybook](https://github.com/storybookjs/storybook)
- [vitest](https://github.com/vitest-dev/vitest)
- [playwright](https://github.com/microsoft/playwright)

## server

```bash
pnpm install
pnpm dev
```

## db

### ERD

You can check [db/README.md](./packages/db/README.md)

### local installation

1. Download [Rancher desktop](https://rancherdesktop.io/)
2. Run Pod
3. Migrate

```bash
docker run -d \
  -e POSTGRES_PASSWORD=default \
  -e POSTGRES_USER=default \
  -e POSTGRES_DB=verceldb \
  -p 5432:5432 \
  --name doss-pg postgres
```

```bash
pnpm migrate:dev
```

## TODO

- [x] [t3-oss/create-t3-turbo](https://github.com/t3-oss/create-t3-turbo)
  - [prisma/deployment-guides](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)
- [trpc/examples-next-app-dir](https://github.com/trpc/examples-next-app-dir)
- [t3-oss/create-t3-turbo](https://github.com/t3-oss/create-t3-turbo/tree/main/apps/nextjs)
