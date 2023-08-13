import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.bank.upsert({
    where: { code: '092' },
    update: {},
    create: {
      code: '092',
      name: '도스뱅크',
      icon: 'https://raw.githubusercontent.com/gracefullight/doss/main/apps/web/public/favicon-32x32.png',
    },
  });

  const usMarket = await prisma.market.upsert({
    where: { code: 'US' },
    update: {},
    create: {
      code: 'US',
      name: '미국주식',
    },
  });

  const krMarket = await prisma.market.upsert({
    where: { code: 'KR' },
    update: {},
    create: {
      code: 'KR',
      name: '한국주식',
    },
  });

  const fxMarket = await prisma.market.upsert({
    where: { code: 'FX' },
    update: {},
    create: {
      code: 'FX',
      name: '환율',
    },
  });

  const marketIndices = [
    { marketId: krMarket.id, name: '코스피', ticker: 'KOSPI' },
    { marketId: krMarket.id, name: '코스닥', ticker: 'KOSDAQ' },
    { marketId: usMarket.id, name: '나스닥', ticker: 'NASDAQ' },
    { marketId: usMarket.id, name: 'S&P500', ticker: 'SPX' },
    { marketId: usMarket.id, name: '다우존스', ticker: 'DJIA' },
    { marketId: fxMarket.id, name: '원달러 환율', ticker: 'USDKRW' },
  ];

  for (const index of marketIndices) {
    await prisma.marketIndex.upsert({
      where: { marketId_ticker: { marketId: index.marketId, ticker: index.ticker } },
      update: {},
      create: index,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
