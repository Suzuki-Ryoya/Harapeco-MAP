import fetcher from '@/utils/fetcher';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { locationFetcher } from '@/utils/geolocation';
import { ConstructionOutlined } from '@mui/icons-material';
import { Shop, ShopListResponseType } from '@/types/shop';
import styled from 'styled-components';
import Link from 'next/link';
import { GiWalk } from 'react-icons/gi';
import { GrRestaurant } from 'react-icons/gr';

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
    const fetchShops = async () => {
      const response = await fetcher(
        `http://localhost:3000/api/search?lat=${encodeURI(
          lat,
        )}3&lng=${encodeURI(lng)}&ran=${encodeURI(range)}`,
      );
      setShops(response.results.shop);
    };
    fetchShops();
  }, [lat, lng, range]);

  //TODO cssのスタイルとUIの設計を行う
  return (
    <>
      <Container>
        <div>
          {shops ? (
            shops.map((shop: Shop) => {
              return (
              <ShopSection key={shop.id}>
                <Link
                  key={shop.id}
                  href={{
                    pathname: '/shops/[shopId]',
                    query: { shopId: shop.id },
                  }}
                >
                  <ShopCard>
                    <ShopImage>
                    <Image src={shop.photo.pc.l} alt={shop.name} />
                    </ShopImage>
                    <ShopInfo>
                      <Title>{shop.name}</Title>
                      <ShopDetail>
                        <ShopItem>定休日:{shop.close}</ShopItem>
                        <ShopGenre>
                        </ShopGenre>
                          <GrRestaurant />
                        </ShopGenre>
                          {shop.genre.name}
                        </ShopGenre>
                      </ShopDetail>
                      <ShopAccess>
                        <GiWalk />
                        <ShopItem>{shop.access}</ShopItem>
                      </ShopAccess>
                    </ShopInfo>
                  </ShopCard>
                </Link>
              </ShopSection>
              );
            })
          ) : (
          <Loading>Loading ...</Loading>
          )}
        </div>
      </Container>
    </>
  );
};

export default ShopListPage;

const Container = styled.div``;

const Image = styled.img``;
