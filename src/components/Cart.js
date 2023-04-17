import styled from "styled-components"
import photo from "../utils/photo"
import { BsTrash } from "react-icons/bs"
import { IoIosArrowDown } from 'react-icons/io';


export default function Cart() {
    return (
        <Container>
            <Header>
                <a>Carrinho</a>
            </Header>
            <CartContains>
                <ProductBox>
                    <ImageProduct>
                        <img src={photo} />
                    </ImageProduct>
                    <ProductOrder>
                        <ProductDescription> Brahma Chopp 473ml</ProductDescription>
                        <Subtext>
                            <ProductPrice>R$3,95</ProductPrice>
                            <Amount>Quantidade:12</Amount>
                            <Trash><BsTrash size={30} /></Trash>

                        </Subtext>
                    </ProductOrder>
                </ProductBox>               
            </CartContains>

            <ConfirmAdress>
                <ThisAddres>Está sendo enviado para esse endereço:
                    <h1>Rua Guiseppe Verdi, 191 </h1> <Arrow><IoIosArrowDown /></Arrow>
                </ThisAddres>
            </ConfirmAdress>
            <Total>
                <a>O Valor total é: R$47,40</a>
            </Total>
            <ContainerButton>
                <ConfirmButton>
                    <a>Confirmar Pedido!</a>
                </ConfirmButton>
            </ContainerButton>
        </Container>
    )
}
const Container = styled.div`
position: relative;
height: 100vh;
width: 100vw;

`

const Header = styled.div`
    height: 80px;
    margin-bottom: 40px;
    background-color: #f99d52;
    display: flex;
    justify-content:center;
    align-items:center;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: black;
    display: flex;
    a{
        margin-right:5px;
    }
`
const CartContains = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;

`
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
const Total = styled.div`
width: 100%;
display: flex;
justify-content:center;
a{
    margin-top:9px  ;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-align:left;
    color: #58595b;
    margin-left:2px;
}
`
const ConfirmAdress = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    
`
const ThisAddres = styled.div`
    width: 80%;
    height: 50px;
    border-radius:5px;
    border: 2px solid #CECECE;
    box-shadow: 0px 2px 10px 0px #00000040;
    margin-bottom:40px;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    text-align:left;
    color: #58595b;
    margin-left:2px;

    h1{
        color: red;
    }
`
const ContainerButton = styled.div`
width: 100%;
height: 100px;
display:flex;
justify-content: center;
align-items: center;
margin-top: 50px;
`
const ConfirmButton = styled.div`
width: 300px;
height: 50px;
border-radius: 15px;
background-color: green;
display: flex;
justify-content:center;
align-items:center;

a{
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 700;
    text-align:center;
    color: white;
}
`
const Arrow = styled.div`
margin-top:1px;
margin-left:5px;
color: red;

`
