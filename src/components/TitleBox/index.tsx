import React from 'react';
import clothes from '../../assets/img/clothes.png';
import { Container } from './styled';

interface Props {
  justifyContent?: string;
  imageHeight?: string;
}

export function TitleBox({
  justifyContent = 'start',
  imageHeight = '100%',
}: Props) {
  return (
    <Container justifyContent={justifyContent} imageHeight={imageHeight}>
      <img src={clothes} alt="" />
      <div>
        <h1>
          Clothing
          <br />
          Donation
        </h1>
      </div>
    </Container>
  );
}
