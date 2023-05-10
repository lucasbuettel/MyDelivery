import styled from "styled-components"
import { IoIosArrowDown } from 'react-icons/io';
import { useEffect } from "react";
import { findProductByUserId } from "../services/cartApi";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { ProductsInCart } from "./ProductsInCart";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/contextApi";
import { BiExit } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";


export default function Cart() {
    const token = JSON.parse(localStorage.getItem('myToken'));
    const { userId } = jwtDecode(token);
    const [productsInCart, setProductsInCart] = useState([]);
    const [totalPriceInCart, setTotalPriceInCart] = useState(0);
    const navigate = useNavigate();
    const address = JSON.parse(localStorage.getItem('addressSelected'));
    const { setOriginPage, setAmountInCart } = useContext(UserContext);
    let totalPriceCart = (productsInCart.reduce((sum, info) => { 
        let priceTotal = sum + info.totalPrice;
        return priceTotal;
        }, 0)/100).toFixed(2).toString().replace('.', ',');

    useEffect(() => {
        
        async function getProductsByUser() {
            try {
                const result = await findProductByUserId(token, userId);
                setOriginPage(1);
                setAmountInCart(result.length)
                setProductsInCart(result);
                /* console.log("aquii", productsInCart); */
            } catch (err) {
                console.log(err);
                console.log("Algo deu errado, tente novamente");
            }

        }
        getProductsByUser();
       
    }, [productsInCart]);

    

    function exitApp(){
        localStorage.clear();
        navigate("/");
    }

    

    function goToWhatsApp(){
        const message = `Olá, gostaria de fazer o pedido: \n
        - Itens do pedido: ${productsInCart.map((i)=>{return(`${i.products.productName}, Quantidade: ${i.amountProduct} \n`)})} \n
        Total: R$${totalPriceCart} \n
        Pagamento na Entrega!` ;
        const encode = encodeURIComponent(message);

    window.open(`https://wa.me/5532991659141?text=${encode}`);
    
    }
    
    return (
        <Container>
            <Header>
                <ArrowLeft><BsArrowLeft onClick={()=>navigate("/products")} size={30}/></ArrowLeft><a>Carrinho</a><BiExit onClick={exitApp} size={30} style={{position: "absolute", right: '20', top:'22'}}/>
            </Header>
            <CartContains>
                {productsInCart.map((info) => <ProductsInCart key={info.id} info={info} setTotalPriceInCart={setTotalPriceInCart} totalPriceInCart={totalPriceInCart}/>)}
            </CartContains>

            <ConfirmAdress>
                <ThisAddres onClick={()=> navigate("/selectAddress")}>Está sendo enviado para esse endereço:
                    <h1>{address.street}, {address.number}, {address.neighborhood} </h1> <Arrow><IoIosArrowDown /></Arrow>
                </ThisAddres>
            </ConfirmAdress>
            <Total>
                <a>O Valor total é: R${totalPriceCart}</a>
            </Total>
            <ContainerButton>
                <ConfirmButton onClick ={goToWhatsApp}>
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
const ArrowLeft = styled.div`
position: absolute;
left: 25px;
top:25px;
`
