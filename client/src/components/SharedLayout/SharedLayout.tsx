import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import HeaderStyled from 'components/Header/Header';

const SharedLayout: React.FC = () => {
  return (
    <>
      <HeaderStyled />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
