import { createContext, useState } from "react";


const UserContext = createContext();

function UserProvider({ children }) {
    const [userData, setUserData] = useState("");
    const [address, setAddress] = useState([]);
    const [addressSelected, setAddressSelected] = useState([]);
    const [amount, setAmount] = useState(false);
    const [originPage, setOriginPage] = useState(0);
    const [amountInCart, setAmountInCart] = useState(0);
    return (
        <UserContext.Provider value = {{setUserData, userData, address, setAddress, addressSelected, setAddressSelected, amount, setAmount, originPage, setOriginPage, amountInCart, setAmountInCart}} >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

export { UserProvider };