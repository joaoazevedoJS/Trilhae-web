import React, { FC, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import TitleContentInfo from '../../components/TitleContentInfo';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  Page,
  Background,
  Container,
  ButtonContainerFixed,
  FooterBackground,
} from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

const Home: FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleNavigateToSignup = useCallback(() => {
    history.push('/signup');
  }, [history]);

  const handleNavigateToSignin = useCallback(() => {
    history.push('/signin');
  }, [history]);

  const handleSubmit = useCallback(
    async data => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          phone: Yup.string().required('Telefone obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Informe um e-mail válido'),
          message: Yup.string().required('Digite sua mensagem'),
        });

        await schema.validate(data, { abortEarly: false });

        history.push('/sucess/mail');
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [history],
  );

  return (
    <Page>
      <Container>
        <Header>
          <Button blue onClick={handleNavigateToSignin} transparent uppercase>
            Entrar
          </Button>
        </Header>

        <main>
          <div>
            <h1>
              O seu caminho de aprimoramento em habilidades socioemocionais
            </h1>

            <p>
              Quer ter as ferramentas necessárias para participar do mercado de
              trabalho? Vem com a gente!
            </p>

            <ButtonContainerFixed>
              <Button onClick={handleNavigateToSignup} uppercase>
                Cadastre-se
              </Button>
            </ButtonContainerFixed>
          </div>

          <Background />
        </main>

        <section>
          <TitleContentInfo title="Quem Somos">
            <p>
              A Trilhaê é uma plataforma que oferece desafios para aprimorar as
              habilidades socioemocionais de seus usuários, preocupada em
              auxiliar os jovens nos seus futuros profissionais. As empresas
              buscam colaboradores que sejam capazes de manter bons
              relacionamentos, de dialogar e compreender o outro e o mundo ao
              seu redor. Então, comece a sua jornada de aprimorameto no Trilhaê,
              e vamos juntos abrir novas trilhas para o seu futuro profissional.
            </p>
          </TitleContentInfo>

          <TitleContentInfo title="O que Fazemos">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>
          </TitleContentInfo>

          <div className="lastContent">
            <TitleContentInfo title="Contato">
              <p>
                Caso tenha alguma dúvida ou queira saber mais informações de
                como participar, entre em contato com a nossa equipe.
              </p>
            </TitleContentInfo>
          </div>
        </section>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome: " />
          <Input name="phone" placeholder="Telefone: " />
          <Input name="email" placeholder="E-mail: " />

          <div className="textarea">
            <Textarea name="message" placeholder="Mensagem: " />

            <FooterBackground />
          </div>

          <Button type="submit" uppercase>
            Enviar
          </Button>
        </Form>
      </Container>

      <Footer />
    </Page>
  );
};

export default Home;
