import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Enrollment from "./components/Enrollment";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { UserProvider } from "./contexts/contextApi";
import SelectAddress from "./components/SelectAddress";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
    <ToastContainer/>
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/products" element={<Products />} />
          <Route path="/selectAddress" element={<SelectAddress/>}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
    </>
  );
}


