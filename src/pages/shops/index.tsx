import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { locationFetcher } from '@/utils/geolocation';
import { Shop } from '@/types/shop';
import styled from 'styled-components';
import Link from 'next/link';
import { GiWalk } from 'react-icons/gi';
import { GrRestaurant } from 'react-icons/gr';
import { Pagination } from '@/components/Pagination';

const ShopListPage: React.FC = () => {
  const router = useRouter();

  //現在地を呼び出す
  const { data } = useSWR('utils/geolocation', locationFetcher);

  const lat = String(data?.coords.latitude);
  const lng = String(data?.coords.longitude);
  const range = String(router.query.ran);
  const start = String(router.query.start);
  const startNumber = Number(router.query.start);

  const currentPageNumber =
    startNumber === 1 ? startNumber : (startNumber - 1) / 10 + 1;

  // shopsの配列に取得した店舗を入れていく
  const [shops, setShops] = useState<Shop[]>();
  useEffect(() => {
    const fetchShops = async () => {
      const response = await fetcher(
        `http://localhost:3000/api/search?lat=${encodeURI(lat)}&lng=${encodeURI(
      lng,
    )}&ran=${encodeURI(range)}&start=${encodeURI(start)}`,
  );
      setShops(response.results.shop);
      console.log(response);
    };
    fetchShops();
  }, [lat, lng, range, start]);

  //TODO cssのスタイルとUIの設計を行う
  return (
    <>
      <Container>
        <ShopNumber>
          {shops ? shops.results.results_available : <span>0</span>}件
        </ShopNumber>
        {shops ? (
          shops.map((shop: Shop) => {
            return (
              <ShopSection key={shop.id}>
                <Link
                  key={shop.id}
                  href={{
                    pathname: `shops/${shop.id}`,
                    query: { shopId: shop.id },
                  }}
                >
                  <ShopCard>
                    <ShopImage>
                      <Image src={shop.photo.pc.l} alt={shop.name} />
                    </ShopImage>
                    <ShopInfo>
                      <ShopName>{shop.name}</ShopName>
                      <ShopDetail>
                        <ShopItem>定休日:{shop.close}</ShopItem>
                        <ShopGenre>
                          <GrRestaurant />
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
        <Pagination
          currentPageNumber={currentPageNumber}
          maxpageNumber={Math.ceil(
            shops ? Number(shops.results.results_available) / 9 : 0,
          )}
          range={range}
          startNumber={startNumber}
        ></Pagination>
      </Container>
    </>
  );
};

export default ShopListPage;

const Container = styled.div`
  background-color: #fef9e8;
  height: 100vh;
`;

const ShopNumber = styled.p`
  text-align: center;
`;

const ShopSection = styled.div`
  box-shadow: 0 1px 4px rgb(0 0 0 / 20%);
  width: 70%;
  margin: 0 auto 1.5rem;

  color: #595960;
`;

const ShopCard = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;

  background-color: #fff;
`;

const ShopInfo = styled.div`
  width: 100%;
`;
const ShopName = styled.h1`
  color: #ffaf69;
`;

const ShopDetail = styled.div`
  display: flex;
  justify-content: space-between;

  //要素が増えたら変更したい
  padding-bottom: 30px;
`;

const ShopGenre = styled.div`
  display: flex;
  align-items: center;
`;

const ShopImage = styled.div`
  display: inline-block;
  width: 50%;
  height: 15rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ShopAccess = styled.div`
  display: flex;
  align-items: center;
`;

const ShopItem = styled.div`
  font-size: 18px;
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;

  background-color: #fff;
  font-size: 5rem;
`;
