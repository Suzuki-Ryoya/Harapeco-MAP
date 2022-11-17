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
import { CiForkAndKnife } from 'react-icons/ci';

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
      <FormPage>
        <FormContainer className="form-container">
          <Title>
            <CiForkAndKnife />
            <Title>はらぺこマップ</Title>
            <CiForkAndKnife />
          </Title>
          <Form onSubmit={handleSubmit(onSubmit)} className="form">
            <UserSelectOption>
              <ReactSelect
                id="select-option"
                placeholder="範囲を選択してください..."
                options={rangeOptions}
                value={rangeOptions.find((x) => {
                  x.value;
                })}
                onChange={(v) => selectOnchange(v?.value)}
              ></ReactSelect>
            </UserSelectOption>
            <SearchButton>
              <Button type="submit"> 検索 </Button>
            </SearchButton>
          </Form>
        </FormContainer>
      </FormPage>
    </>
  );
};

// TODO: レスポンシブ対応に変更する
// TODO: 背景色をthemeに追加
const FormPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f37433;
`;

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  //可変にしないとポジションの関係でエラーが起きる
  width: 45rem;
  height: 30rem;
  background-color: #f37433;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 5rem;
  color: #fff;
  font-weight: bolder;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50%;
`;

const UserSelectOption = styled.div`
  width: 85%;
`;

const SearchButton = styled.div``;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border-color: gray;

  color: #fff;
  font-weight: bolder;
  background-color: gray;
`;
