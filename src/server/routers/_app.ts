import { z } from 'zod';
import { procedure, router } from '../trpc';
import axios from 'axios';
import { CoronaResponse } from '@/utils/types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const appRouter = router({
  getCoronaData: procedure.query(async () => {
    const response = await axios.get<CoronaResponse>(`https://api.coronavirus.data.gov.uk/v1/data`);
    const data = response.data.data;
    const derivedItems = data.slice(0, 5);

    return {
      data: derivedItems,
    };
  }),
  setFavoriteChart: procedure
    .input(z.object({ chartId: z.number(), value: z.boolean() }))
    .mutation(async ({ input }) => {
      const { chartId, value } = input;

      const data = await prisma.favoriteCharts.update({
        where: {
          id: chartId,
        },
        data: {
          isFavorite: value,
        },
      });

      return data;
    }),
  getFavoriteCharts: procedure.query(async () => {
    const favoriteCharts = await prisma.favoriteCharts.findMany();
    return {
      data: favoriteCharts,
    };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
