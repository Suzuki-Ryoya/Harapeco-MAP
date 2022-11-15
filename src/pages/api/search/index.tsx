import type { NextApiRequest, NextApiResponse } from 'next';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import { locationFetcher } from '@/utils/geolocation';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  // http;//localhost:3000/api/search?lat={}&lng={}&ran={}
  const lat = req.query.lat;
  const lng = req.query.lng;
  const ran = req.query.ran;

  if (
    typeof process.env.API_URL_ROOT === 'undefined' ||
    typeof lat === 'undefined' ||
    typeof lng === 'undefined' ||
    typeof ran === 'undefined'
  ) {
    return;
  }

  const latString: string = Array.isArray(lat) ? lat.join(' ') : lat;
  const lngString: string = Array.isArray(lng) ? lng.join(' ') : lng;
  const ranString: string = Array.isArray(ran) ? ran.join(' ') : ran;


  console.log(API_URL);

  // 変更するURLを入れないといけない
  if (typeof API_URL === 'undefined') return;

  const data = await fetcher(API_URL);
  console.log(data);

  res.send(JSON.stringify(data));
};
export default handler;
