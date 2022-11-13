import { locationFetcher } from '@/utils/geolocation';
import { url } from 'inspector';
import React from 'react';
import useSWR from 'swr';
import { SelectOption } from './form/selectOptions';
import ReactSelect, { SelectInstance } from 'react-select';
import styled from 'styled-components';

const rangeOptions: SelectOption[] = [
  {
    label: '300m',
    value: '1',
  },
  {
    label: '500m',
    value: '2',
  },
  {
    label: '1000m',
    value: '3',
  },
  {
    label: '2000m',
    value: '4',
  },
  {
    label: '3000m',
    value: '5',
  },
];
export const GeolocationSearchForm: React.FC = () => {
  return (
    <>
      <ReactSelect options={rangeOptions}></ReactSelect>
      <div>sample</div>
    </>
  );
};
