import { CoronaResponse } from '@/utils/types';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await axios.get<CoronaResponse>(`https://api.coronavirus.data.gov.uk/v1/data`);
  const data = response.data.data;
  const derivedItems = data.slice(0, 5);

  res.status(200).json(derivedItems);
}
