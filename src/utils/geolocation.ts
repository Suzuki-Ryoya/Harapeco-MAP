import { PositionError, Position } from '@/types/geolocation';

// geolocation APIをラップ化してfetcherとしてuseSWRで呼び出す
// TODO: APIディレクトリに入れたい
export const locationFetcher = () => {
  return new Promise(
    (res: (value?: Position) => void, rej: (reson?: PositionError) => void) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    },
  );
};
