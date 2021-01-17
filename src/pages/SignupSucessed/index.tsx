import React, { FC, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import Header from '../../components/Header';
import TitleContentInfo from '../../components/TitleContentInfo';

import { Container, Background, Footer } from './styles';

const SignupSucessed: FC = () => {
  const history = useHistory();

  const handleNavigationToHelcome = useCallback(() => {
    history.push('/logged/helcome');
  }, [history]);

  return (
    <>
      <Container>
        <Header goBackHome />

        <div className="page-content">
          <TitleContentInfo title="Parabéns!">
            <h3>Você agora faz parte do Thrilhaê</h3>

            <p>
              Faça o login para começar sua jornada em busca do conhecimento.
              Complete os desafios dessa trilha e ganhe pontos que podem ser
              trocados por prêmios.
            </p>
          </TitleContentInfo>

          <Button onClick={handleNavigationToHelcome} uppercase>
            Começar
          </Button>

          <Link to="/">Voltar para Página Inicial</Link>
        </div>

        <Background />
      </Container>

      <Footer />
    </>
  );
};

export default SignupSucessed;
