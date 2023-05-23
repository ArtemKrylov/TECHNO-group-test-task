import React from 'react';
import { LoaderStyled } from './Loader.styled';
import { Circles } from 'react-loader-spinner';
import { theme } from 'utils/constants/theme';

const Loader = () => {
  return (
    <LoaderStyled>
      <Circles
        height="150"
        width="150"
        color={`${theme.colors.accent}`}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderStyled>
  );
};

export default Loader;
