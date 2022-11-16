import fetcher from '@/utils/fetcher';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const {
    query: { shopId },
  } = req;

  if (typeof process.env.API_URL_ROOT === 'undefined' || shopId === undefined) {
    return;
  }

  const API_URL_ROOT = process.env.NEXT_PUBLIC_API_URL_ROOT;

  const shopIdString: string = Array.isArray(shopId)
    ? shopId.join(' ')
    : shopId;

  const API_URL =
    typeof shopId === 'undefined' || shopId == null
      ? API_URL_ROOT
      : `${API_URL_ROOT}&id=${encodeURI(shopIdString)}`;

  const data = await fetcher(API_URL);
  res.end(JSON.stringify(data));
};
export default handler;
