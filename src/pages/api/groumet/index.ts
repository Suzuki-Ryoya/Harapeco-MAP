import type { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from '@/utils/fetcher';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const {
    query: { keyword },
  } = req;
  if (typeof process.env.API_URL_ROOT === 'undefined') return;

  const data = await fetcher(process.env.API_URL_ROOT);

  res.end(JSON.stringify(data));
};
export default handler;
