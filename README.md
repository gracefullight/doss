# Doss

Duplicated version of Toss application

![demo](./public/demo.jpg)

## server

```bash
pnpm install
pnpm dev
```

## db

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

- [t3-oss/create-t3-turbo](https://github.com/t3-oss/create-t3-turbo)
- [trpc/examples-next-app-dir](https://github.com/trpc/examples-next-app-dir)
