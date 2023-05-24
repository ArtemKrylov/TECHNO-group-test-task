import React from 'react';
import { ErrorMessage } from 'formik';

interface FormErrorMessageInterface {
  name: string;
}

const FormErrorMessage: React.FC<FormErrorMessageInterface> = ({ name }) => {
  return (
    <>
      <ErrorMessage component="div" name={name} />
    </>
  );
};

export default FormErrorMessage;
