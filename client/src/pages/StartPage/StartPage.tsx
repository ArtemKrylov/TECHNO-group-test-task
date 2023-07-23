import Header from 'components/Header';
import Section from 'components/Section';
import React, { useEffect, useState } from 'react';
import StartPageStyled from './StartPage.styled';
import Input from 'components/Input';
import Button from 'components/Button/Button';
import { INPUT_TYPE } from 'components/Input/constants';
import { TechnoApp_API } from 'API/TechnoApp_API';
import { ClientInterface } from 'utils/models/client';
import { ProjectInterface } from 'utils/models/project';
import { InputType } from 'components/Input/Input';
import { AxiosResponse } from 'axios';

const StartPage: React.FC = () => {
  const [id_dep_client, setId_dep_client] = useState<string>();
  const [id_project, setId_project] = useState<string>();
  const [clients, setClients] = useState<ClientInterface[]>();
  const [projects, setProjects] = useState<ProjectInterface[]>();

  useEffect(() => {
    const fetchClients: () => Promise<void> = async () => {
      const response = await TechnoApp_API.getClients();
      setClients(response.data);
    };
    fetchClients();
  }, [id_project]);

  useEffect(() => {
    const fetchProjects: () => Promise<void> = async () => {
      if (!id_dep_client) return;
      const response = await TechnoApp_API.getProjects(id_dep_client);
      setProjects(response.data);
    };
    fetchProjects();
  }, [id_dep_client]);

  const onClientInputChange: (value: string, type: InputType) => void = (
    value,
    type
  ) => {
    console.log(value, type);
    if (type === INPUT_TYPE.CLIENT) {
      setId_dep_client(value);
    }
    if (type === INPUT_TYPE.PROJECT) {
      setId_project(value);
    }
  };

  const onCreateProjectButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    clientId: string | undefined
  ) => void = async (event, id_dep_client) => {
    if (!id_dep_client) {
      console.log('Undefined client!');
      return;
    }
    const currentDate = new Date();
    const dateChunk = `${currentDate.getDate()}${String(
      currentDate.getMonth() + 1
    ).padStart(2, '0')}${String(currentDate.getFullYear())}`;
    const newId_project = `${id_dep_client}-${dateChunk}`;
    setId_project(newId_project);
    const newProject: AxiosResponse<ProjectInterface> =
      await TechnoApp_API.createProject(id_dep_client, newId_project);
    setProjects(prev => {
      if (!prev) return [newProject.data];
      return [newProject.data, ...prev];
    });
  };

  return (
    <>
      <Header />
      <StartPageStyled>
        <Section>
          <Input
            name="Клиент №:"
            type={INPUT_TYPE.CLIENT}
            onChange={onClientInputChange}
            id_dep_client={id_dep_client ?? ''}
            options={clients}
          />

          <Button clientId={id_dep_client} onClick={onCreateProjectButtonClick}>
            Создать проект
          </Button>
          <Input
            name="Проект №:"
            type={INPUT_TYPE.PROJECT}
            id_dep_client={id_dep_client ?? ''}
            options={projects}
          />
        </Section>
      </StartPageStyled>
    </>
  );
};

export default StartPage;
