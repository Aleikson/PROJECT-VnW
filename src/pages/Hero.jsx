import styled from 'styled-components';
import { Bigmac, Fries, Icecream } from '../assets/images';
import { useState } from 'react';

const imgs = [
  {
    id: 1,
    imgSrc: Bigmac,
  },
  {
    id: 2,
    imgSrc: Fries,
  },
  {
    id: 3,
    imgSrc: Icecream,
  },
];

const HeroContainer = styled.div`
  display: flex;
  height: 70vh;
  padding: 20px;
  background: #ffc72c;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Image = styled.img`
  width: 25rem;
  height: 25rem;
`;

const Description = styled.p`
  font-size: 5rem;
  font-weight: bold;

  span {
    color: red;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  width: 100%;
  height: 100px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const Hero = () => {
  const [selected, setSelectedImg] = useState(Bigmac);

  const handleClick = (imgSrc) => {
    setSelectedImg(imgSrc);
  };

  return (
    <HeroContainer>
      <TextContainer>
        <Image src={selected} />
        <Description>
          Bateu aquela
          <br />
          <span>#Fome</span> de <span>méqui</span>?
        </Description>
      </TextContainer>
      <IconContainer>
        {imgs.map((img) => (
          <Icon
            key={img.id}
            onClick={() => handleClick(img.imgSrc)}
            src={img.imgSrc}
            alt='Imagem Selecionada'
          />
        ))}
      </IconContainer>
    </HeroContainer>
  );
};

export default Hero;
