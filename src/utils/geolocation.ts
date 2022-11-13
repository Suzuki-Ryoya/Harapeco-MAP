import { PositionError, Position } from '@/types/geolocation';
import { resolve } from 'path';
import { env } from 'process';
import { useEffect, useState, useRef } from 'react';

// geolocation APIをラップ化してfetcherとしてuseSWRで呼び出す
export const fetcher = () => {
  return new Promise(
    (res: (value?: Position) => void, rej: (reson?: PositionError) => void) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    },
  );
};

// TODO: 現在地取得に加えて範囲を指定したい
export const geoFetcher = () => {
  return new Promise((res, rej) => {
    const onSuccess = async (position: any) => {
      const latitude = String(position?.coords?.latitude);
      const longitude = String(position?.coords?.longitude);
      const result = await fetch(
        `${env.API_URL_ROOT}&lat=${encodeURI(latitude)}&lng=${encodeURI(
          longitude,
        )}`,
      );
      const data = await result.json();
      resolve(data);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, rej);
  });
};
