import React, { FC, ReactElement } from 'react';
import SectionStyled from './Section.styled';

interface SectionProps {
  title?: string;
  className?: string;
  children: string | ReactElement | ReactElement[];
}

const Section: FC<SectionProps> = ({ title, className, children }) => {
  return (
    <SectionStyled className={`section ${className}`}>
      <>
        {title && <h3 className={`section__title`}>{title}</h3>}
        {children}
      </>
    </SectionStyled>
  );
};

export default Section;
