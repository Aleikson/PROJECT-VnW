/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';
import { Card1, Card2, Card3 } from '../assets/images';

const cards = [
  {
    id: 1,
    imgSrc: Card1,
    titulo: 'Que tal um #MéquiNoSofá?',
  },
  {
    id: 2,
    imgSrc: Card2,
    titulo: 'Venha conhecer nossa nova loja',
  },
  {
    id: 3,
    imgSrc: Card3,
    titulo: 'Confira as medidas que o Méqui adotou!',
  },
];

const Global = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  padding: 1rem;
  background: #ffbc0d;
  justify-content: flex-end;

  h1{
    color: #FFFF;
  }
`;

const Container = styled.div`
  display: flex;
  height: 50vh;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #ffff;
  border-radius: 5px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
  text-align: center;
`;

const RentButton = styled.button`
  background: #ffbc0d;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 10px;

  &:hover {
    opacity: 70%o;
  }
`;

const CardRent = styled.div`
  width: 450px;

  img {
    width: 100%;
  }
`;

const Card = ({ card, onClick }) => {
  const handleClick = () => {
    onClick(card.imgSrc);
  };

  return (
    <CardContainer>
      <CardImg src={card.imgSrc} alt={card.titulo} />
      <CardTitle>{card.titulo}</CardTitle>
      <RentButton onClick={handleClick}>Clique Aqui</RentButton>
    </CardContainer>
  );
};

const CarList = () => {
  const [selectedCardImg, setSelectedCardImg] = useState(null);

  const handleClick = (imgSrc) => {
    setSelectedCardImg(imgSrc);
  };

  return (
    <Global>
      <h1>Promoções</h1>
      <CardRent>
        <img src={selectedCardImg} />
      </CardRent>
      <Container>
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleClick} />
        ))}
      </Container>
    </Global>
  );
};

export default CarList;
