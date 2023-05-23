import React, { FC, ReactElement } from 'react';
import { Container } from 'components/App/App.styled';
import SectionStyled from './Section.styled';

interface SectionProps {
  title: string;
  className?: string;
  children: string | ReactElement | ReactElement[];
}

const Section: FC<SectionProps> = ({ title, className, children }) => {
  return (
    <SectionStyled className={`section ${className}`}>
      <Container className="container">
        <>
          {title && <h3 className={`section__title`}>{title}</h3>}
          {children}
        </>
      </Container>
    </SectionStyled>
  );
};

export default Section;
