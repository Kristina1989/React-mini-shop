import {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import MainContext from "../MainContext/MainContext";

const Toolbar = () => {

    const {getCart} = useContext(MainContext)

    const nav = useNavigate()

    function goToAllProducts () {
        nav("/products")
    }

    function goToCreateProduct () {
        nav("/")
    }

    function goToShoppingCart () {
        nav("/cart")
    }

    function countItem () {
        let counter = 0
        getCart.map(x => counter += x.quantity)
        return counter
    }



    return (
        <div className="toolbar d-flex space-btw">
            <button onClick={goToAllProducts}>All Products</button>
            <button onClick={goToCreateProduct}>Create Product</button>
            <div>
                <button onClick={goToShoppingCart}>Shopping Cart ({countItem()})</button>

            </div>


        </div>
    );
};

export default Toolbar;