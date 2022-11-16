import { PositionError, Position } from '@/types/geolocation';
import { resolve } from 'path';
import { env } from 'process';
import { useEffect, useState, useRef } from 'react';

// geolocation APIをラップ化してfetcherとしてuseSWRで呼び出す
// TODO: APIディレクトリに入れたい
export const locationFetcher = () => {
  return new Promise(
    (res: (value?: Position) => void, rej: (reson?: PositionError) => void) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    },
  );
};
