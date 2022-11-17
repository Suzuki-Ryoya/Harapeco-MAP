import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import fetcher from '@/utils/fetcher';
import { Shop } from '@/types/shop';
import styled from 'styled-components';

const Sample: React.FC = () => {
  const router = useRouter();

  // TODO: クエリを読み込むため、再レンダリングをするとshopIdが消えてしまう
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
              <ShopContent key={shop.id}>
                <ShopInfoContent key={shop.id}>
                  <ShopInfo>
                    <ShopName>{shop.name}</ShopName>
                    <ShopSection>
                      <ShopItem>最寄り駅:{shop.station_name}駅</ShopItem>
                      <ShopItem>ジャンル:{shop.genre.name}</ShopItem>
                    </ShopSection>
                  </ShopInfo>
                  <ShopDetail>
                    <ShopOfficalInfo>
                      <ShopItem>
                        {shop.open} / {shop.close}
                      </ShopItem>
                      <ShopItem>予算:{shop.budget.name}</ShopItem>
                      <ShopItem>住所:{shop.address}</ShopItem>
                    </ShopOfficalInfo>
                  </ShopDetail>
                </ShopInfoContent>
                <ShopAirticleContent key={shop.id}>
                  <Image
                    src={`${shop.photo.pc.l}`}
                    alt="画像がありません"
                  ></Image>
                  <ShopCatch>{shop.catch}</ShopCatch>
                </ShopAirticleContent>
              </ShopContent>
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
