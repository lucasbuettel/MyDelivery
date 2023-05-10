import styled from "styled-components"
import { IoIosArrowDown } from 'react-icons/io';
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/contextApi";
import { Link } from "react-router-dom";

export default function Address() {
    
    const { addressSelected } = useContext(UserContext);
    
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
position: fixed;
left: 0;
top: 0;
    height: 80px;
    width: 100%;
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