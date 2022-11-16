import fetcher from '@/utils/fetcher';
import { useShopListSWR } from '@/utils/hooks/useShopDataSWR';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { locationFetcher } from '@/utils/geolocation';

interface input {
  url: string;
}
const ShopListPage: React.FC = () => {
  const router = useRouter();

  //現在地を呼び出す
  const { data } = useSWR('utils/geolocation', locationFetcher);

  const data = useShopListSWR(url);

  // console.log(data?.result);

  data.then((res) => console.log(res));

  return (
    <>
      <div>Hello </div>
    </>
  );
};

export default ShopListPage;
