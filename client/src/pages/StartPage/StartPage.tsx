import Header from 'components/Header';
import Section from 'components/Section';
import React, { useState } from 'react';
import StartPageStyled from './StartPage.styled';
import Input from 'components/Input';
import Button from 'components/Button/Button';
import { INPUT_TYPE } from 'components/Input/constants';

const StartPage: React.FC = () => {
  const [clientId, setClientId] = useState<string>();
  const [newProjectNumber, setNewProjectNumber] = useState<string>();

  const onClientInputChange: (value: string) => void = value => {
    setClientId(value);
  };

  const onCreateProjectButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    clientId: string | undefined
  ) => void = (event, clientId) => {
    if (!clientId) {
      console.log('Undefined client!');
      return;
    }
    const currentDate = new Date();
    const dateChunk = `${currentDate.getDate()}${String(
      currentDate.getMonth() + 1
    ).padStart(2, '0')}${String(currentDate.getFullYear())}`;
    const projectNumber = `${clientId}-${dateChunk}`;
    console.log('projectNumber: ', projectNumber);
    setNewProjectNumber(projectNumber);
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
          />
          <Button clientId={clientId} onClick={onCreateProjectButtonClick}>
            Создать проект
          </Button>
          <Input
            name="Проект №:"
            type={INPUT_TYPE.PROJECT}
            clientId={clientId}
          />
        </Section>
      </StartPageStyled>
    </>
  );
};

export default StartPage;
