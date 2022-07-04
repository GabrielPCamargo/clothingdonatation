import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styled';
import clothes from '../../assets/img/clothes.png';

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
      <div className="link">
        <Link to="/">
          <img src={clothes} alt="" />
        </Link>

        <Link to="/">
          <div>
            <h1>
              Clothing
              <br />
              Donation
            </h1>
          </div>
        </Link>
      </div>
    </Container>
  );
}
