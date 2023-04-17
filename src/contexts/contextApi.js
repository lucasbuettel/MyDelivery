import { createContext, useState } from "react";


const UserContext = createContext();

function UserProvider({ children }) {
    const [userData, setUserData] = useState("");
    const [address, setAddress] = useState([]);
    const [addressSelected, setAddressSelected] = useState([]);
    const [amount, setAmount] = useState(false);
    return (
        <UserContext.Provider value = {{setUserData, userData, address, setAddress, addressSelected, setAddressSelected, amount, setAmount}} >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

export { UserProvider };