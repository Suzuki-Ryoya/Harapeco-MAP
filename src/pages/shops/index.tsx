import fetcher from '@/utils/fetcher';
import { useShopListSWR } from '@/utils/hooks/useShopDataSWR';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { locationFetcher } from '@/utils/geolocation';
import { ConstructionOutlined } from '@mui/icons-material';
import { Shop, ShopListResponseType } from '@/types/shop';

interface input {
  url: string;
}
const ShopListPage: React.FC = () => {
  const router = useRouter();

  //現在地を呼び出す
  const { data } = useSWR('utils/geolocation', locationFetcher);

  // shopsの配列に取得した店舗を入れていく
  const [shops, setShops] = useState<Shop[]>();

  const lat = String(data?.coords.latitude);
  const lng = String(data?.coords.longitude);
  const range = String(router.query.ran);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetcher(
        `http://localhost:3000/api/search?lat=${encodeURI(
          lat,
        )}3&lng=${encodeURI(lng)}&ran=${encodeURI(range)}`,
      );
      console.log(response.results.shop);
      setShops(response.results.shop);
    };
    fetchUsers();
  }, [lat, lng, range]);

  return (
    <>
      <div>Hello </div>
    </>
  );
};

export default ShopListPage;
