import type { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from '@/utils/fetcher';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const {
    query: { keyword },
  } = req;
  if (
    typeof process.env.API_URL_ROOT === 'undefined' ||
    keyword === undefined
  ) {
    return;
  }

  const API_URL_ROOT = process.env.API_URL_ROOT;

  const keywordString: string = Array.isArray(keyword)
    ? keyword.join(' ')
    : keyword;

};
export default handler;
