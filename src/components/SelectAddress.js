import { useContext, useEffect } from "react";
import UserContext from "../contexts/contextApi";
import { findByAddressId } from "../services/addresApi";
import jwtDecode from "jwt-decode";
import styled from "styled-components";
import AddressByid from "./AddressById";
import { Link } from "react-router-dom";

export default function SelectAddress(){
    const token = JSON.parse(localStorage.getItem('myToken'));
    const { userId } = jwtDecode(token);
    const { address, setAddress } = useContext(UserContext);
    

    useEffect(() => {
        async function getAddressUser() {

            try {
                const result = await findByAddressId(token, userId);
                console.log(result);
                setAddress(result)
                
            } catch (err) {
                console.log(err);
                console.log("Algo deu errado, tente novamente");
            }
        }
        getAddressUser();
    }, [])
    

    return(
    <ContainerAddress>
        <Header><a>Selecione o endereço de entrega:</a></Header>
        {address.map((info) => <AddressByid key={info.id} info={info}/>)}
        <Link to={"/enrollment"} style={{textDecoration: 'none'}}><AddAddress ><a>+</a></AddAddress> </Link>
    </ContainerAddress>)
}

const ContainerAddress = styled.div`

`
const AddAddress =  styled.div`
height: 60px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
    font-weight: 400;
    border: 1px solid gray;

    a{
        color: black;  
    }

`
const Header = styled.div`
 height: 80px;
    background-color: #f99d52;
    display: flex;
    justify-content:center;
    align-items:center;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: black;
`