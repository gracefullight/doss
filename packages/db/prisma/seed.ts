import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.bank.create({
    data: {
      name: '도스뱅크',
      icon: 'https://raw.githubusercontent.com/gracefullight/doss/main/apps/web/public/favicon-32x32.png',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
