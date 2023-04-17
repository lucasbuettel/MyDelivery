import styled from "styled-components"
import { FaBeer } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { BsCupStraw } from 'react-icons/bs';

export default function TypeOfProduct({ info, setIdProductType }) {

    function selectType(){
        setIdProductType(info.id); 
    }
    if (info.id === 1) {
        return (
            <SelectionTypeOfProduct onClick={selectType}>
                <FaBeer size={45} color={'#f99d52'} />
                <h1>{info.type}</h1>
            </SelectionTypeOfProduct>
        )
    }
    if (info.id === 2) {
        return (
            <SelectionTypeOfProduct onClick={selectType}>
                <BiDrink size={45} color={'#f99d52'} />
                <h1>{info.type}</h1>
            </SelectionTypeOfProduct>
        )
    }
    if (info.id === 3) {
        return (
            <SelectionTypeOfProduct onClick={selectType}>
                <BsCupStraw size={45} color={'#f99d52'} />
                    <h2>{info.type}</h2>
                    <h1></h1>
            </SelectionTypeOfProduct>
        )
    }
    

}

const SelectionTypeOfProduct = styled.div`
    height: 130px;
    width: 100px;
    border-radius:5px;
    border: 2px solid #CECECE;
    box-shadow: 0px 2px 10px 0px #00000040;

    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;

    h1{
        font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #f99d52;
    }
    h2{
        margin-bottom: -20px;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #f99d52; 
        text-align: center;
    }

`