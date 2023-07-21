import Header from 'components/Header';
import Section from 'components/Section';
import React from 'react';
import StartPageStyled from './StartPage.styled';
import Input from 'components/Input';
import Button from 'components/Button/Button';
import { INPUT_TYPE } from 'components/Input/constants';

const StartPage: React.FC = () => {
  return (
    <>
      <Header />
      <StartPageStyled>
        <Section>
          <Input name="Клиент №:" type={INPUT_TYPE.CLIENT} />
          <Button name="Создать проект" />
          <Input name="Проект №:" type={INPUT_TYPE.PROJECT} />
        </Section>
      </StartPageStyled>
    </>
  );
};

export default StartPage;
