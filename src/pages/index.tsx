import { SearchForm } from '@/components/SearchForm';
import { useShopDataSWR } from '@/utils/hooks/useShopDataSWR';
import { useUserInputKeywordState } from '@/utils/recoil/useUserInputKeywordState';
import SearchPage from './search';

interface Props {
  fallbackData: any;
}

const Home: React.FC<Props> = ({ fallbackData }) => {
  return <SearchPage></SearchPage>;
};

export default Home;
