import React, { useState, useEffect } from 'react';
import { InputStyled } from './Input.styled';
import { INPUT_TYPE } from './constants';
import { TechnoApp_API } from 'API/TechnoApp_API';
import { ClientInterface } from 'utils/models/client';
import { ProjectInterface } from 'utils/models/project';

type InputType = 'client' | 'project';

interface InputInterface {
  name: string;
  type: InputType;
  clientId?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputInterface> = ({
  name,
  type,
  clientId,
  onChange,
}) => {
  const [options, setOptions] = useState<
    ClientInterface[] | ProjectInterface[] | null
  >(null);

  useEffect(() => {
    const fetchOptions: (type: InputType) => Promise<void> = async () => {
      let response;
      try {
        switch (type) {
          case INPUT_TYPE.CLIENT:
            response = await TechnoApp_API.getClients();
            setOptions(response.data);
            if (!onChange) return;
            onChange(response.data[0].id_dep_client);
            break;
          case INPUT_TYPE.PROJECT:
            if (!clientId) return;
            response = await TechnoApp_API.getProjects(clientId);
            setOptions(response.data);
            break;
        }
      } catch (error) {
        console.dir(error);
      }
    };
    fetchOptions(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, clientId]);

  const onClientInputChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void = event => {
    if (!onChange) return;
    onChange(event.target.value);
  };

  return (
    <InputStyled>
      <div className="input__name">
        <span>{name}</span>
      </div>
      {options && (
        <select className="input__select" onChange={onClientInputChange}>
          {options.map(option => {
            const clientId = option.id_dep_client;
            return (
              <option key={clientId} value={clientId} className="input__option">
                {clientId}
              </option>
            );
          })}
        </select>
      )}
    </InputStyled>
  );
};

export default Input;
