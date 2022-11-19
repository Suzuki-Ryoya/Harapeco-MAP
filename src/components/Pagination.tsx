import Link from 'next/link';
import styled from 'styled-components';

interface props {
  currentPageNumber: number;
  maxpageNumber?: number;
  range: string;
  startNumber: number;
}

export const Pagination: React.FC<props> = ({
  currentPageNumber,
  maxpageNumber,
  range,
  startNumber,
}) => {
  const ran = String(range);

  const start = startNumber + 10;

  return (
    <Component>
      {currentPageNumber !== 1 && (
        <Link
          href={{
            pathname: `shops/`,
            query: { ran, start },
          }}
        >
          前のページ
        </Link>
      )}
      {currentPageNumber !== maxpageNumber && (
        <Link href={{ pathname: `shops/`, query: { ran, start } }}>
          次のページ
        </Link>
      )}
    </Component>
  );
};

const Component = styled.div`
  width: 100%;
  height: 100px;

  text-align: center;
  color: #595960;
`;
