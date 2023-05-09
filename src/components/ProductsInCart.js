import styled from "styled-components"
import photo from "../utils/photo"
import { BsTrash } from "react-icons/bs"
import { useEffect } from "react";
import { getProductsById } from "../services/productApi";
import { useState } from "react";

export function ProductsInCart({ info, setTotalPriceInCart, totalPriceInCart  }) {
    /* console.log(info) */
    const token = JSON.parse(localStorage.getItem('myToken'));
    const [infosProduct, setInfosProduct] = useState([])
    
    
    useEffect(() => {
        setTotalPriceInCart(totalPriceInCart + info.totalPrice);
        console.log(totalPriceInCart);
        
        async function getInfosProductById() {
            try {
                const result = await getProductsById(token, info.productId);
                /* console.log(result); */
                setInfosProduct(result);
            } catch (err) {
                console.log(err);
            }
        }
        getInfosProductById();
    }, []);
    return (
        <ProductBox>
            <ImageProduct>
                <img src={infosProduct.image} />
            </ImageProduct>
            <ProductOrder>
                <ProductDescription> {infosProduct.productName}</ProductDescription>
                <Subtext>
                    <ProductPrice>R${(info.totalPrice/100).toFixed(2).toString().replace('.', ',')}</ProductPrice>
                    <Amount>Quantidade:{info.amountProduct}</Amount>
                    <Trash><BsTrash size={30} /></Trash>

                </Subtext>
            </ProductOrder>
        </ProductBox>
    )
}

const ProductBox = styled.div`
    height: 150px;
    width: 350px;
    border-radius:5px;
    border: 2px solid #CECECE;
    box-shadow: 0px 2px 10px 0px #00000040;
    margin-bottom:40px;
    display: flex;
    position: relative;
`
const ImageProduct = styled.div`
box-sizing:border-box;
height: 100%;
width: 100px;
display: flex;
justify-content:center;

padding-top:20px;
img{
    height:100px;
}
`
const ProductDescription = styled.div`
    width:100%;
    margin-top:35px;
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
    margin-top:9px  ;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-align:left;
    color: black;
    margin-left:2px;

`
const ProductOrder = styled.div`

`
const Subtext = styled.div`
 width: 100%;
display:flex;
flex-direction:column;
margin-top:13px;
justify-content:space-around;
`
const Amount = styled.div`
margin-top:5px;
height: 25px;
width: 140px;
border-radius:13px;
border: 1px solid black;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
display: flex;
justify-content:center;
align-items:center;
`
const Trash = styled.div`
position:absolute;
right: 15px;
bottom: 19px;
`