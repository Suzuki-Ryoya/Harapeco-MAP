import { GeolocationSearchForm } from '@/components/GeolocationSearchFrom';
import { SearchForm } from '@/components/SearchForm';
import { NextPage } from 'next';
import React from 'react';

const SearchPage: NextPage = () => {
  return (
    <>
      <GeolocationSearchForm></GeolocationSearchForm>
    </>
  );
};

export default SearchPage;
