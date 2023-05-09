import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/contextApi";
import { useNavigate } from "react-router-dom";

export default function AddressByid({info}){
    const { addressSelected, setAddressSelected } = useContext(UserContext);
    const navigate = useNavigate();

    function adressSelected(){
        setAddressSelected(info);
        navigate("/products");
    }

    return(
        <ContainerAddress>
            
            <AddressOptions onClick={adressSelected}>
                <h1>{info.street}, {info.number}, {info.neighborhood}</h1>
            </AddressOptions>
        </ContainerAddress>
    )
}

const ContainerAddress = styled.div`

`



const AddressOptions = styled.div`
width: 100%;
height: 60px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
border: 1px solid gray;

font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: black;

`