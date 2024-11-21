import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleCadastro,
  SubtitleCadastro,
  EsqueciText,
  CriarText,
  Row,
  Wrapper,
  TermsText,
  LoginLink,
} from "./styles";

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      // Aqui você pode enviar os dados do cadastro para o backend
      alert("Cadastro realizado com sucesso!");
      navigate("/feed");
    } catch (e) {
      alert("Erro ao cadastrar o usuário");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>Crie sua conta e make the change.</SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                leftIcon={<MdEmail />}
                name="nome"
                control={control}
              />
              {errors.nome && <span>Nome é obrigatório</span>}

              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}

              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}

              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            <TermsText>
              Ao clicar em "Criar minha conta grátis", declaro que aceito as{" "}
              <a href="#privacidade">Políticas de Privacidade</a> e os{" "}
              <a href="#termos">Termos de Uso</a> da DIO.
            </TermsText>
            <LoginLink>
              Já tenho conta. <a href="/login">Fazer login</a>
            </LoginLink>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
