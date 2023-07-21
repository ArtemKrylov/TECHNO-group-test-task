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
const StartPage = lazy(() => import('pages/StartPage'));

const basename = '/';

//setting router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />} errorElement={<NoMatchPage />}>
      <Route index element={<StartPage />} />
    </Route>
  ),
  { basename }
);

const App: FC = () => {
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
