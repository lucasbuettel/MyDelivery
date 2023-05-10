import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBeer } from 'react-icons/fa';
import { useContext, useState } from "react";
import { signIn } from "../services/authApi";
import { toast } from "react-toastify";
import UserContext from "../contexts/contextApi";
import { findByAddressId } from "../services/addresApi";
import jwtDecode from "jwt-decode";

export default function SignIn() {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  async function postSession(e) {
    e.preventDefault();

    const user = {
      email, password
    }

    try {
      const result = await signIn(user);
      setUserData(result)
      localStorage.setItem('myToken', JSON.stringify(result));

      const token = JSON.parse(localStorage.getItem('myToken'));
      const { userId } = jwtDecode(token);

    /*   toast.success("Login Efetuado com sucesso!", {
        position: toast.POSITION.TOP_CENTER
      }) */
      const addressExists = await findByAddressId(token, userId);
      
      if(addressExists.length !== 0 ){
        navigate("/products");
      } else{
        navigate("/enrollment");
      }
      
    } catch (err) {
      alert("Usuário ou senha inválidos!")
      /* toast.error("Usuário ou senha inválidos!", {
        position: toast.POSITION.TOP_CENTER
      }) */

    }

  }

  return (
    <Container>
      <DesignSignIn>
        <Form onSubmit={postSession}>
          <Logo>
            <FaBeer size={100} color={'#f99d52'} />
          </Logo>
          <FormContent>
            <h2>Login</h2>
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
            <Button type="submit">Entrar</Button>
            <Link to={"/signup"} style={{ textDecoration: 'underline #f99d52 2px' }}> <RedirectText>Ainda não tenho cadastro!</RedirectText> </Link>
          </FormContent>
        </Form>
      </DesignSignIn>
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
const DesignSignIn = styled.div`
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