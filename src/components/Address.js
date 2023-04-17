import styled from "styled-components"
import { IoIosArrowDown } from 'react-icons/io';
import { findByAddressId } from "../services/addresApi";
import jwtDecode from 'jwt-decode';
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/contextApi";
import { Link } from "react-router-dom";
import AddressByid from "./AddressById";

export default function Address() {
    
    const { addressSelected, setAddressSelected } = useContext(UserContext);
    /* console.log(addressSelected); */
    if(addressSelected.street === undefined ){
        return(
            <Link to={"/selectAddress"}><AddressContainer>
            <AddressDetail>
                <a>Selecione o Endereço </a> <Arrow><IoIosArrowDown /></Arrow>
            </AddressDetail>
        </AddressContainer></Link>)
    } else{
    return (
        <Link to={"/selectAddress"}><AddressContainer>
            <AddressDetail>
                <a>{addressSelected.street }, {" " + addressSelected.number }, {" " + addressSelected.neighborhood} </a> <Arrow><IoIosArrowDown /></Arrow>
            </AddressDetail>
        </AddressContainer></Link>
    )}
}

const AddressContainer = styled.div`
    height: 80px;
    background-color: #f99d52;
    display: flex;
    justify-content:center;
    align-items:center;
`

const AddressDetail = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: black;
    display: flex;
    a{
        margin-right:5px;
        text-decoration:underline;
    }
`

const Arrow = styled.div`
margin-top:1px;
margin-left:5px;

`