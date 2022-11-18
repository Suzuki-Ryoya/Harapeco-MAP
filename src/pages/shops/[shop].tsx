import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import fetcher from '@/utils/fetcher';
import { Shop } from '@/types/shop';
import styled from 'styled-components';
import useSWR from 'swr';

const Sample: React.FC = () => {
  const router = useRouter();

  // TODO: クエリを読み込むため、再レンダリングをするとshopIdが消えてしまう
  const shopId = String(router.query.shopId);

  const { data: shop } = useSWR(
    `http://localhost:3000/api/shop/?shopId=${encodeURI(shopId)}`,
    fetcher,
  );
  return (
    <>
      <Container>
        {shop ? (
          shop.results.shop.map((shop: Shop) => {
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
      </Container>
    </>
  );
};

export default Sample;

const Container = styled.div``;

const ShopContent = styled.div`
  width: 70%;
  box-shadow: 0 1px 4px rgb(0 0 0 / 20%);

  margin: 3rem auto;
  padding: 40px;

  background-color: #fff;
`;

const ShopInfoContent = styled.div``;

const ShopInfo = styled.div`
  border-bottom: 0.2px solid #595960;
`;

const ShopSection = styled.div`
  display: flex;
`;

const ShopName = styled.div`
  width: 90%;

  font-size: 2.4rem;
  font-weight: bold;
  color: #ffaf69;
`;

const ShopOfficalInfo = styled.div`
  padding: 10px;
`;

const ShopItem = styled.p`
  padding-right: 20px;

  font-weight: bold;
  font-size: 12px;
  color: #595960;
`;

const ShopDetail = styled.div``;

const ShopAirticleContent = styled.div`
  padding-top: 40px;
  border-top: 0.2px solid #595960;
`;

const Image = styled.img`
  width: 60%;
`;

const ShopCatch = styled.h2`
  /* margin: auto 40px; */

  text-align: center;
  color: #13131e;
`;
