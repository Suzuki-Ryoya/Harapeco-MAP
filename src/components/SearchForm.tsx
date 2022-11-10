import { useShopDataSWR } from '@/utils/hooks/useShopDataSWR';
import { useUserInputKeywordMutator } from '@/utils/recoil/useUserInputKeywordState';
import { fetcher } from '@/utils/fetcher';
import React, { useState } from 'react';
import styled from 'styled-components';

interface SearchFormProps {
  userSetKeyword: string;
  fallbackData: any;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  userSetKeyword,
  fallbackData,
}) => {
  const { setSearchKeyword } = useUserInputKeywordMutator();

  const { mutate } = useShopDataSWR(userSetKeyword, fallbackData);

  const formRef: React.RefObject<HTMLFormElement> =
    React.useRef<HTMLFormElement>(null);

  const handlerOnSubmitSearch = async (
    e: React.SyntheticEvent,
  ): Promise<void> => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      seachWord: { value: string };
    };

    // ユーザーが入力するキーワード
    const seachWordValue: string = target.seachWord.value;

    setSearchKeyword(seachWordValue);

    const mutationData = await fetcher(`api/groumet/${seachWordValue}`);

    mutate(mutationData).catch((error) => {
      throw error;
    });
  };

  const [searchAreaKey, setSearchAreaKey] = useState<string>('');
  const [searchGenreKey, setSearchGenreKey] = useState<string>('');
  return (
    <>
      <form ref={formRef} onSubmit={handlerOnSubmitSearch}>
        <input type="search" name="seachWord" placeholder="Enter keyword …" />
        <button>click</button>
      </form>
        <div>
          <Label id="serach_area">エリア</Label>
          <TextField
            id="search_area"
            value={searchAreaKey}
            placeholder="市、地区"
            onChange={(v) => setSearchAreaKey(v.target.value)}
          ></TextField>
        </div>
        <div>
          <Label id="serach_area">ジャンル</Label>
          <TextField
            id="search_area"
            value={searchGenreKey}
            placeholder="例)居酒屋"
            onChange={(v) => setSearchGenreKey(v.target.value)}
          ></TextField>
        </div>
        <SearchButton>検索</SearchButton>
      </Form>
    </>
  );
};

const Form = styled.form``;

const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: bold;
  color: #172621;
`;

const TextField = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
`;

const SearchButton = styled.button``;
