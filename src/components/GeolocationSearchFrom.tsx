import { locationFetcher } from '@/utils/geolocation';
import React, { useState } from 'react';
import useSWR from 'swr';
import styled from 'styled-components';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import Router, { useRouter } from 'next/router';
import fetcher from '@/utils/fetcher';
import ReactSelect from 'react-select';

// フォーム内で必要なprops(現状は指定するエリアの範囲のみ)

interface SelectOption {
  label: string;
  value: string;
}

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
  const [value, setValue] = useState<string>('');

  const selectOnchange = (value: string | undefined) => {
    if (value === undefined) {
      return;
    }
    setValue(value);
  };

  const router = useRouter();

  const { handleSubmit } = useForm({
    defaultValues: {
      range: '4',
    },
  });

  const onSubmit = () => {
    const ran = value;
    router.push({ pathname: '/shops', query: { ran } });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ReactSelect
          options={rangeOptions}
          value={rangeOptions.find((x) => {
            x.value;
          })}
          onChange={(v) => selectOnchange(v?.value)}
        ></ReactSelect>
        <div>
          <Button type="submit">検索する</Button>
        </div>
      </Form>
    </>
  );
};

const Form = styled.form``;

const Button = styled.button``;
