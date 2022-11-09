export const userInputKeywordState = atom<string>({
  key: 'UserInputKeyword',
  default: '',
});

//ユーザーが入力したキーワード
export const useUserInputKeywordState = (): string => {
  return useRecoilValue(userInputKeywordState);
};
