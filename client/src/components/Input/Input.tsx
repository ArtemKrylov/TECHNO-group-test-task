import React, { useState, useEffect } from 'react';
import { InputStyled } from './Input.styled';
import { INPUT_TYPE } from './constants';
import { TechnoApp_API } from 'API/DeliveryApp_API';

type InputType = 'client' | 'project';

interface InputInterface {
  name: string;
  type: InputType;
}

const Input: React.FC<InputInterface> = ({ name, type }) => {
  const [options, setOptions] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchOptions: (type: InputType) => Promise<void> = async () => {
      let data: any;
      switch (type) {
        case INPUT_TYPE.CLIENT:
          data = await TechnoApp_API.getClients();
          setOptions(data);
          break;
        case INPUT_TYPE.PROJECT:
          data = await TechnoApp_API.getProjects();
          setOptions(data);
          break;
      }
    };
    fetchOptions(type);
  }, [type]);

  return (
    <InputStyled>
      <div className="input__name">
        <span>{name}</span>
      </div>
      {options && (
        <select className="input__select">
          <option value="test" className="input__option">
            test
          </option>
        </select>
      )}
    </InputStyled>
  );
};

export default Input;
