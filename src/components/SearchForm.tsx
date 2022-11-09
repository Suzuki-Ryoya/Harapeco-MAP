import React, { useState } from 'react';
import styled from 'styled-components';

export const SearchForm: React.FC = () => {
  const [searchAreaKey, setSearchAreaKey] = useState<string>('');
  const [searchGenreKey, setSearchGenreKey] = useState<string>('');
  return (
    <>
      <Form>
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
