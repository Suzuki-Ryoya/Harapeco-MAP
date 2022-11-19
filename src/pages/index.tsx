import SearchPage from './search';

interface Props {
  fallbackData: any;
}

const Home: React.FC<Props> = ({ fallbackData }) => {
  return <SearchPage></SearchPage>;
};

export default Home;
