import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBeer } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { signUp } from "../services/authApi";

export default function SignUp() {

  const navigate = useNavigate();
  const [completeName, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    completeName, cpf, phone, email, password
  }

  async function postUser(e) {
    e.preventDefault();

    try {
      const result = await signUp(user);
      console.log(result);
      navigate("/");

    } catch (err) {
      alert("Email Já Existente")
      console.log(err);
    }
  }


  return (
    <Container>
      <DesignSignUp>
        <Form onSubmit={postUser}>
          <Logo>
            <FaBeer size={100} color={'#f99d52'} />
          </Logo>
          <FormContent>
            <h2>Tela de Cadastro</h2>
            <Input
              id="name"
              type="name"
              value={completeName}
              onChange={(e) => setName(e.target.value)}
              placeholder=" Nome"
              required
            />
            <Input
              id="cpf"
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="CPF"
              required />
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Telefone"
              required />
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" E-mail"
              required
            />
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" Senha"
              required
            />

            <Button type="submit">Cadastrar</Button>
            <Link to={"/"} style={{ textDecoration: 'underline #f99d52 2px' }}> <RedirectText>Já tenho cadastro!</RedirectText> </Link>
          </FormContent>
        </Form>
      </DesignSignUp>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f99d52;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f9f9f9;
  height: 100%;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  h2{
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #b2b2b2;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #d6d6d6;
`;

const Button = styled.button`
  background-color: #f99d52;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
`;

const RedirectText = styled.div`
    margin-top: 30px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #f99d52;
`
const DesignSignUp = styled.div`
  height: 100%;
  width: 100%;
`

const Logo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`
const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  margin-top: -50px;
`