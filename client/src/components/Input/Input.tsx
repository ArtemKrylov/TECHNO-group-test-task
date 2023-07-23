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
  // const [options, setOptions] = useState<
  //   ClientInterface[] | ProjectInterface[] | null
  // >(null);

  // useEffect(() => {
  //   const fetchOptions: (type: InputType) => Promise<void> = async () => {
  //     let response;
  //     try {
  //       switch (type) {
  //         case INPUT_TYPE.CLIENT:
  //           response = await TechnoApp_API.getClients();
  //           setOptions(response.data);
  //           break;
  //         case INPUT_TYPE.PROJECT:
  //           if (!id_dep_client) return;

  //           response = await TechnoApp_API.getProjects(id_dep_client);
  //           setOptions(response.data);
  //           break;
  //       }
  //     } catch (error) {
  //       console.dir(error);
  //     }
  //   };
  //   fetchOptions(type);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [type, id_dep_client]);

  const onClientInputChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void = event => {
    if (!onChange) return;
    onChange(event.target.value, type);
  };

  return (
    <InputStyled>
      <div className="input__name">
        <span>{name}</span>
      </div>
      {options && options.length > 0 ? (
        <select className="input__select" onChange={onClientInputChange}>
          <option className="input__option">Select some option</option>
          {options.map((option: any) => {
            const clientId = option.id_dep_client;
            const projectId = option.id_project;
            return (
              <option
                key={options.indexOf(option)}
                value={clientId}
                className="input__option"
              >
                {type === INPUT_TYPE.CLIENT ? clientId : projectId}
              </option>
            );
          })}
        </select>
      ) : (
        'No options'
      )}
    </InputStyled>
  );
};

export default Input;
