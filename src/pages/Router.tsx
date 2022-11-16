import { GeolocationSearchForm } from '@/components/GeolocationSearchFrom';
import { SearchForm } from '@/components/SearchForm';
import { BrowserRouter, Route } from 'react-router-dom';
import ShopListPage from './shops';

const Routers = () => {
  return (
    <BrowserRouter>
      <Route>
        <Route path="/search" element={<GeolocationSearchForm />} />
        <Route path="/shops" element={<ShopListPage />} />
      </Route>
    </BrowserRouter>
  );
};

export default Routers;
