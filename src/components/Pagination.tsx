import { ConstructionOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { start } from 'repl';

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
    <div className="flex px-3 my-12">
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
    </div>
  );
};
