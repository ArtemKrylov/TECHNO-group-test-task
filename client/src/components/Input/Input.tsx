import React from 'react';
import { InputStyled } from './Input.styled';
import { INPUT_TYPE } from './constants';
import { ClientInterface } from 'utils/models/client';
import { ProjectInterface } from 'utils/models/project';

export type InputType = 'client' | 'project';

interface InputInterface {
  name: string;
  type: InputType;
  id_dep_client: string;
  onChange?: (value: string, type: InputType) => void;
  options: ClientInterface[] | ProjectInterface[] | undefined;
}

const Input: React.FC<InputInterface> = ({
  name,
  type,
  id_dep_client,
  onChange,
  options,
}) => {
  const onClientInputChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void = event => {
    if (!onChange) return;
    onChange(event.target.value, type);
  };

  if (options && options.length > 0) {
    return (
      <InputStyled>
        <div className="input__name">
          <span>{name}</span>
        </div>

        <select className="input__select" onChange={onClientInputChange}>
          {type === INPUT_TYPE.CLIENT && (
            <option className="input__option">Select some option</option>
          )}
          {options.reverse().map((option: any, index: number) => {
            const clientId = option.id_dep_client;
            const projectId = option.id_project;

            return (
              <option
                key={options.indexOf(option)}
                value={clientId}
                className="input__option"
              >
                {type === INPUT_TYPE.CLIENT
                  ? clientId
                  : `${index + 1}-${projectId}`}
              </option>
            );
          })}
        </select>
      </InputStyled>
    );
  } else {
    return null;
  }
};

export default Input;
