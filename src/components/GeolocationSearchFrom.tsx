import { locationFetcher } from '@/utils/geolocation';
import React, { useState } from 'react';
import useSWR from 'swr';
import { SelectOption } from './form/selectOptions';
import styled from 'styled-components';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// フォーム内で必要なprops(現状は指定するエリアの範囲のみ)
interface FromProps {
  range: string;
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

  // geolocation APIを呼び出す
  const { data } = useSWR('utils/geolocation', locationFetcher);

  const { control, handleSubmit } = useForm<FromProps>({
    defaultValues: {
      range: '4',
    },
  });

  const onSubmit: SubmitHandler<FromProps> = (props: FromProps) => {
  if (typeof data === 'undefined' || typeof data.coords === 'undefined') {
    return <div>現在地を取得できません</div>;
  }

  console.log(data.coords.latitude);
  console.log(data.coords.longitude);

  console.log(process.env.NEXT_PUBLIC_API_URL_ROOT);

  const API_URL_ROOT = process.env.NEXT_PUBLIC_API_URL_ROOT;

  const lat = String(data.coords.latitude);
  const lng = String(data.coords.longitude);
    const ran = String(props.range);

  const API_URL =
    typeof lat === 'undefined' || typeof lng === 'undefined'
      ? API_URL_ROOT
      : `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=6c471fbf6c289813&lat=${encodeURI(
          lat,
          )}&lng=${encodeURI(lng)}&range=${encodeURI(ran)}`;
    console.log(JSON.stringify(API_URL));
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="range"
          control={control}
          render={({ field }) => (
            // return (
            //   <ReactSelect
            //     options={rangeOptions}
            //     value={rangeOptions.find((x) => {
            //       x.value;
            //     })}
            //     onChange={(v) => selectOnchange(v?.value)}
            //     // onChange={(v) => console.log(v?.value)}
            //   ></ReactSelect>
            // );
            <FormControl>
              <InputLabel id="range-label">範囲</InputLabel>
              <Select labelId="range-label" label="範囲" {...field}>
                <MenuItem value="" sx={{ color: 'gray' }}>
                  未選択
                </MenuItem>
                <MenuItem value={'1'}>300m</MenuItem>
                <MenuItem value={'2'}>500m</MenuItem>
                <MenuItem value={'3'}>1000m</MenuItem>
                <MenuItem value={'4'}>2000m</MenuItem>
                <MenuItem value={'5'}>3000m</MenuItem>
              </Select>
            </FormControl>
          )}
        />

        <div>
          <Button type="submit">検索する</Button>
        </div>
      </Form>
    </>
  );
};

const Form = styled.form``;

const Button = styled.button``;
