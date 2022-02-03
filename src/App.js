import {useState} from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainContext from "./MainContext/MainContext";
import Toolbar from "./Components/Toolbar";
import CreateProductPage from "./Pages/CreateProductPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import SingleProductPage from "./Pages/SingleProductPage";
import AllProductsPage from "./Pages/AllProductsPage";


function App() {

    const [getPage, setPage] = useState("")
    const [getProduct, setProduct] = useState([])
    const [getCart, setCart] = useState([])


    return (
        <div className="App">

            <MainContext.Provider value={{
                getProduct, setProduct,
                getPage, setPage,
                getCart, setCart
            }}>
                <BrowserRouter>
                    <Toolbar page={getPage} />
                    <Routes>
                        <Route path="/" element={<CreateProductPage/>}/>
                        <Route path="/products" element={<AllProductsPage/>}/>

                        <Route path="/product/:title" element={<SingleProductPage/>}/>
                        <Route path="/cart" element={<ShoppingCartPage/>}/>

                    </Routes>
                </BrowserRouter>

            </MainContext.Provider>


        </div>
    );
}

export default App;
