import React, { FC, lazy } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import NoMatchPage from 'pages/NoMatchPage/NoMatchPage';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Toaster } from 'react-hot-toast';
import { GlobalContextProvider } from 'utils/globalContext/globalContext';

//setting lazy loading
const ShopsPage = lazy(() => import('pages/ShopsPage'));
const ShoppingCartPage = lazy(() => import('pages/ShoppingCartPage'));

const basename = '/delivery_app_ET-school';

//setting router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />} errorElement={<NoMatchPage />}>
      <Route index element={<ShopsPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
    </Route>
  ),
  { basename }
);

const App: FC = () => {
  // //shop index, which products are in cart
  // const [orderShop, setOrderShop] = useState<number | null>(null);
  // const productsInLocalStorage = useMemo(() => {
  //   return JSON.parse(localStorage.getItem('cart') ?? '[]');
  // }, []);

  // const [productsInCart, setProductsInCart] = useState<IProduct[]>(
  //   productsInLocalStorage
  // );

  return (
    <div className="app">
      <Toaster />
      <GlobalContextProvider>
        <RouterProvider router={router} />
      </GlobalContextProvider>
      <GlobalStyle />
    </div>
  );
};
export default App;
