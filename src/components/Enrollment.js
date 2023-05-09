import styled from "styled-components";
import { FaAddressCard } from 'react-icons/fa';
import { useState } from "react";
import { postAddress } from "../services/addresApi";
import { useNavigate } from "react-router-dom";


export default function Enrollment() {
  const navigate = useNavigate();
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const token = JSON.parse(localStorage.getItem('myToken'));
  

  async function createAddress(e){
    e.preventDefault();


    try {
     const result = await postAddress(street, neighborhood, city, state, number, token);
      console.log(result);
      navigate("/products");

    } catch (err) {
      alert("Algo deu errado, tente novamente")
      console.log(err);
    }
  }

  return (
    <Container>
      <Form onSubmit={createAddress}>
        <FaAddressCard size={50} color={'#f99d52'} />
        <h2>Informações de endereço:</h2>

        <Input
          id="street"
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Rua"
          required />
        <Input
          id="neighborhood"
          type="text"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          placeholder="Bairro"
          required />
        <Input
          id="number"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Número"
          required />
        <Input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Cidade"
          required />
        <Input
          id="state"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Estado"
          required />

        <Button type="submit">Salvar Informações</Button>
      </Form>
    </Container>
  );
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
  justify-content: center;
  background-color: #f9f9f9;
  height: 100%;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  h2{
    margin-top: 40px;
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
  background-color: #00bcd4;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f99d52;
  margin-top: 30px;
`;