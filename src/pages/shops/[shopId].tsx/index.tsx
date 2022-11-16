import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import fetcher from '@/utils/fetcher';
import { Shop, ShopDetail } from '@/types/shop';
import styled from 'styled-components';

const Sample: React.FC = () => {
  const router = useRouter();
  const shopId = String(router.query.shopId);
  const [shops, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    const fetchShops = async () => {
      const response = await fetcher(
        `http://localhost:3000/api/shop/?shopId=${encodeURI(shopId)}`,
      );
      setShops(response.results.shop);
    };
    fetchShops();
  }, [shopId]);

  return (
    <>
      <div>sample</div>
    </>
  );
};

export default Sample;

const Container = styled.div``;

const Image = styled.img``;
