import { z } from 'zod';
import { procedure, router } from '../trpc';
import axios from 'axios';
import { CoronaResponse } from '@/utils/types';

export const appRouter = router({
  getCoronaData: procedure.query(async () => {
    const response = await axios.get<CoronaResponse>(`https://api.coronavirus.data.gov.uk/v1/data`);
    const data = response.data.data;
    const derivedItems = data.slice(0, 5);

    return {
      data: derivedItems,
    };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
