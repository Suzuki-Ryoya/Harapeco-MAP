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
      <Container>
        <div>
          {shops ? (
            shops.map((shop: Shop) => {
              return (
                <div key={shop.id}>
                  <h1>{shop.name}</h1>
                  <Image src={shop.photo.pc.m} alt={shop.name} />
                  <p>
                    <span>住所:{shop.address}</span>
                  </p>
                  <div>
                    <p>営業時間:{shop.open}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Loading ...</div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Sample;

const Container = styled.div``;

const Image = styled.img``;
