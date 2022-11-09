import React from 'react';
import {
  atom,
  SetterOrUpdater,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

//ユーザーのキーワードを定義する
export const userInputKeywordState = atom<string>({
  key: 'UserInputKeyword',
  default: '',
});

//ユーザーが入力したキーワード
export const useUserInputKeywordState = (): string => {
  return useRecoilValue(userInputKeywordState);
};

interface UseUserInputKeywordMutatorType {
  setSearchKeyword: (s: string) => void;
}

//ユーザーが入力したキーワードをセットする関数
export const useUserInputKeywordMutator =
  (): UseUserInputKeywordMutatorType => {
    const setState: SetterOrUpdater<string> = useSetRecoilState(
      userInputKeywordState,
    );
    const setSearchKeyword = React.useCallback(
      (s: string) => {
        setState(s);
      },
      [setState],
    );

    return { setSearchKeyword };
  };
