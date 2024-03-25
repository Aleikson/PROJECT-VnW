import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CarList from './pages/CardList';
import Hero from './pages/Hero';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  animation: ${fadeIn} 1s ease-in-out;
`;

const LoadingText = styled.h1`
  font-size: 24px;
  color: #333333;
  margin-bottom: 20px;
`;

const GitHubLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen>
          <LoadingText>Desenvolvido por Aleikson Silva</LoadingText>
          <GitHubLink
            href='https://github.com/Aleikson'
            target='_blank'
          >
            Siga-me no GitHub e veja mais projetos
          </GitHubLink>
        </LoadingScreen>
      ) : (
        <>
          <Header />
          <Hero />
          <CarList />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
