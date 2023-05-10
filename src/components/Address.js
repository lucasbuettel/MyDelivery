import styled from "styled-components"
import { IoIosArrowDown } from 'react-icons/io';
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/contextApi";
import { Link } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Address() {

    const navigate = useNavigate();
    const { addressSelected } = useContext(UserContext);

    function exitApp(){
        localStorage.clear();
        navigate("/");
    }

    if (addressSelected.street === undefined) {
        return (
            <AddressContainer>
                <Link to={"/selectAddress"}><AddressDetail>
                    <a>Selecione o Endereço </a> <Arrow><IoIosArrowDown /></Arrow>
                </AddressDetail></Link><BiExit onClick={exitApp} size={30} style={{ position: "absolute", right: '20', top: '22' }} />
            </AddressContainer>)
    } else {
        return (
            <AddressContainer>
                <Link to={"/selectAddress"}><AddressDetail>
                    <a>{addressSelected.street}, {" " + addressSelected.number}, {" " + addressSelected.neighborhood} </a> <Arrow><IoIosArrowDown /></Arrow>
                </AddressDetail></Link><BiExit onClick={exitApp} size={30} style={{ position: "absolute", right: '20', top: '22' }} />
            </AddressContainer>
        )
    }
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