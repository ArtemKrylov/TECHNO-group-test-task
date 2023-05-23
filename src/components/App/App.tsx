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

//setting lazy loading
const ShopsPage = lazy(() => import('pages/ShopsPage'));
const ShoppingCartPage = lazy(() => import('pages/ShoppingCartPage'));

const basename = '/delivery_app_ET-school';

//setting router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />} errorElement={<NoMatchPage />}>
      <Route index element={<ShopsPage />} />
      <Route path="/tweets" element={<ShoppingCartPage />} />
    </Route>
  ),
  { basename }
);

const App: FC = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
      <GlobalStyle />
    </div>
  );
};
export default App;
