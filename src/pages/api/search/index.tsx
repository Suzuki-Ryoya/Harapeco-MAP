import type { NextApiRequest, NextApiResponse } from 'next';
import fetcher from '@/utils/fetcher';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const API_URL_ROOT = process.env.NEXT_PUBLIC_API_URL_ROOT;

  const lat = req.query.lat;
  const lng = req.query.lng;
  const ran = req.query.ran;
  const start = req.query.start;

  if (
    typeof process.env.API_URL_ROOT === 'undefined' ||
    typeof lat === 'undefined' ||
    typeof lng === 'undefined' ||
    typeof ran === 'undefined' ||
    typeof start === 'undefined'
  ) {
    return;
  }

  const latString: string = Array.isArray(lat) ? lat.join(' ') : lat;
  const lngString: string = Array.isArray(lng) ? lng.join(' ') : lng;
  const ranString: string = Array.isArray(ran) ? ran.join(' ') : ran;
  const startString: string = Array.isArray(start) ? start.join(' ') : start;

  const API_URL =
    typeof lat === 'undefined' || typeof lng === 'undefined'
      ? API_URL_ROOT
      : `${API_URL_ROOT}&lat=${encodeURI(latString)}&lng=${encodeURI(
          lngString,
        )}&range=${encodeURI(ranString)}&start=${encodeURI(startString)}`;

  if (typeof API_URL === 'undefined') return;

  const data = await fetcher(API_URL);

  res.end(JSON.stringify(data));
};
export default handler;
