import { useState } from "react";
import styled from "styled-components";

export default function ProductsDivision({ i, setIdProduct, setInfosProduct }) {
    console.log(i);

    function addProduct() {
        setIdProduct(i.id);
        setInfosProduct(i);
    }

    return (
        <>
            
            <ProductBox onClick={addProduct}>
                <ImageProduct>
                    <img src={i.image} />
                </ImageProduct>
                <ProductDescription> {i.productName}</ProductDescription>
                <Subtext>
                    <ProductPrice>R${i.price / 100}</ProductPrice>
                    <AddProduct>+</AddProduct>
                </Subtext>
            </ProductBox>
        </>
    );
}

const ProductBox = styled.div`
    height: 180px;
    width: 140px;
    border-radius:5px;
    border: 2px solid #CECECE;
    box-shadow: 0px 2px 10px 0px #00000040;
    margin-bottom:40px;
    display: flex;
    flex-direction: column;
    
`
const ImageProduct = styled.div`
height: 100px;
width: 100%;
border-bottom: 2px solid #CECECE;
display: flex;
justify-content:center;
img{
    height:100px;
   
}
`
const ProductDescription = styled.div`
    width:100%;
    margin-top:5px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-align:center;
    color: #58595b;
    display: flex;
    justify-content:center;
    align-items:center;

`
const ProductPrice = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-align:left;
    color: black;
    margin-left:2px;

`
const AddProduct = styled.div`
    margin-top:-10px;
    margin-left:20px;
    background-color:#f99d52;
    width: 30px;
    height: 30px;
    border-radius:100px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: black;
    display: flex;
    justify-content:center;
    align-items:center;
`
const Subtext = styled.div`
 width: 100%;
display:flex;
margin-top:13px;
justify-content:space-around;
`