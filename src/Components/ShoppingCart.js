import {useContext} from 'react';
import MainContext from "../MainContext/MainContext";


const ShoppingCart = () => {


    const {getCart, setCart} = useContext(MainContext)


    function trash(x, index) {
        const newArr = getCart.filter((x, i) => i !== index)
        setCart([...newArr])

    }


    function plus(x, index) {
        getCart[index].quantity++
        setCart([...getCart])

    }


    function minus(x, index) {
        if(getCart[index].quantity > 1) {
            getCart[index].quantity--
            setCart([...getCart])
        } else {
            const newArr = getCart.filter((x, i) => i !== index)
            setCart([...newArr])
        }

    }

    function countPrice() {
        let counter = 0
        getCart.map(x => counter+= x.quantity * x.price)
        return counter
    }



    return (

        <div className="d-flex column ">

            {getCart.map((x, index) =>
                <div key={index} className="card d-flex space-btw a-center">
                    <div>{x.title}</div>
                    <img src={x.photo} alt=""/>
                    <h2>{x.price}$</h2>
                    <h2>{x.quantity}</h2>
                    <div>
                        <i onClick={() => minus(x, index)} className="fas fa-minus-square  icon m-10"></i>
                        <i onClick={() => trash(x, index)} className="fas fa-trash-alt icon m-10"></i>
                        <i onClick={() => plus(x, index)} className="fas fa-plus-square icon m-10"></i>
                    </div>


                </div>)}

            <h1>Total Price : {countPrice()} $</h1>


        </div>


    );
};

export default ShoppingCart;