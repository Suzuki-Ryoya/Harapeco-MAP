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
  const [value, setValue] = useState<string>('');

  const selectOnchange = (value: string | undefined) => {
    if (value === undefined) {
      return;
    }
    setValue(value);
  };

  // geolocation APIを呼び出す
  const { data } = useSWR('utils/geolocation', locationFetcher);
  const { control, handleSubmit } = useForm<FromProps>();
  const onSubmit = () => {
  if (typeof data === 'undefined' || typeof data.coords === 'undefined') {
    return <div>現在地を取得できません</div>;
  }

  console.log(data.coords.latitude);
  console.log(data.coords.longitude);

  console.log(process.env.NEXT_PUBLIC_API_URL_ROOT);

  const API_URL_ROOT = process.env.NEXT_PUBLIC_API_URL_ROOT;

  const lat = String(data.coords.latitude);
  const lng = String(data.coords.longitude);

  const API_URL =
    typeof lat === 'undefined' || typeof lng === 'undefined'
      ? API_URL_ROOT
      : `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=6c471fbf6c289813&lat=${encodeURI(
          lat,
        )}&lng=${encodeURI(lng)}`;

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ReactSelect
          options={rangeOptions}
          value={rangeOptions.find((x) => {
            x.value;
          })}
          onChange={(v) => selectOnchange(v?.value)}
          // onChange={(v) => console.log(v?.value)}
        ></ReactSelect>
        <div>
          <Button type="submit">検索する</Button>
        </div>
      </Form>
    </>
  );
};
