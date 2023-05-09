import styled from "styled-components";
import Address from "./Address";
import { getProductsByTypeId, getProductsType } from "../services/productApi";
import { useEffect, useState } from "react";
import TypeOfProduct from "./TypeOfProduct";
import ProductsDivision from "./ProductsDivision";
import { FaShoppingCart } from "react-icons/fa";
import { postCart } from "../services/cartApi";
import jwtDecode from "jwt-decode";


export default function Products() {
    const token = JSON.parse(localStorage.getItem('myToken'));
    const [productType, setProductType] = useState([]);
    const [idProductType, setIdProductType] = useState(0);
    const [products, setProducts] = useState([]);
    const [idProduct, setIdProduct] = useState(0);
    const [infosProduct, setInfosProduct] = useState([]);
    const [count, setCount] = useState(0);
    const { userId } = jwtDecode(token);
    let priceTotal = ((infosProduct.price) * count);

    useEffect(() => {
        async function getProductsTypeId() {

            try {
                const result = await getProductsType(token);
                setProductType(result);
            } catch (err) {
                console.log(err);
                console.log("Algo deu errado, tente novamente");
            }
        }
        getProductsTypeId();

        async function getProducts() {
            try {
                const result = await getProductsByTypeId(token, idProductType);
                /* console.log(result); */
                setProducts(result);

            } catch (err) {
                console.log(err);
                console.log("Algo deu errado, tente novamente");
            }
        }
        getProducts();

        
    }, [idProductType]);


    
    async function postInCart(e){
        e.preventDefault();
        try{
            const result = await postCart(Number(idProduct), userId, count, priceTotal, token);
            backScreen();

        }catch(err){
            console.log(err);
            console.log("Algo deu errado, tente novamente");
        }

    }

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    function backScreen() {
        setIdProduct(0);
        setCount(0);
    }


    return (<>

        <Container>

            <AmountProduct  idProduct={idProduct}>
                <SelectProduct>
                    <Exit onClick={backScreen}>X</Exit>
                    <h1>{infosProduct.productName}</h1>
                    <Counter>
                        <button onClick={decrement}>-</button>
                        <h1>{count}</h1>
                        <button onClick={increment}>+</button>
                    </Counter>
                    <TotalPrice>Preço Total: R$ {(priceTotal/100).toFixed(2).toString().replace('.', ',')}</TotalPrice>
                    <button onClick={postInCart}>Adicionar ao Carrinho <FaShoppingCart /></button>
                </SelectProduct>
            </AmountProduct>
            <Address />
            <ProductsType>
                {productType.map((info) => <TypeOfProduct key={info.id} info={info} setIdProductType={setIdProductType} />)}
            </ProductsType>

            <ProductsByType products={products}>
                <a>Selecione o tipo de bebida</a>
                {products.map((i) => <ProductsDivision key={i.id} i={i} setIdProduct={setIdProduct} setInfosProduct={setInfosProduct} />)}
            </ProductsByType>

        </Container>
    </>
    )
}

const Container = styled.div`

`;

const AmountProduct = styled.div`
position: fixed;
height: 100vh;
width: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
display: ${(props) => (props.idProduct !== 0 ? '' : 'none')};
`;

const Exit = styled.div`
position: absolute;
right: 15px;
top: 15px;
width: 20px;
height: 20px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
color: gray;
display: flex;
justify-content: center;
align-items: center;

`

const Counter = styled.div`
display: flex;
flex-wrap: wrap;
width: 100px;
justify-content:space-around;
button{
   width: 25px;
   height: 25px;
   display: flex;
   justify-content:center;
   align-items: center;
}
`
const TotalPrice = styled.div`

`

const SelectProduct = styled.div`
position: relative;
background-color: white;
border-radius: 13px;
width: 300px;
height: 200px;
opacity:1;
z-index: 3;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
h1{
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: gray;
    display: flex;
}

button{
    background-color: #f99d52;
    border-radius: 3px;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
}
`


const ProductsType = styled.div`
margin-top: 60px;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
`


const ProductsByType = styled.div`
    width: 100%;
    margin-top: 60px;
    margin-bottom: -20px;

    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    
    a{
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #f99d52;
        display: flex;
        justify-content:center;
        align-items:center;
        display: ${(props) => (props.products.length === 0 ? 'initial' : 'none')};
        
    }

`

