import React from 'react';
import { Navigate } from 'react-router-dom';

const NoMatchPage: React.FC = () => {
  return <Navigate to={'/'} />;
};

export default NoMatchPage;
