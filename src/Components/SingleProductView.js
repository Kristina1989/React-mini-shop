import  {useContext} from 'react'
import MainContext from "../MainContext/MainContext";




const SingleProductView = ({product}) => {



    const {getCart, setCart} = useContext(MainContext)

    function addToCart () {
        if (getCart.find(x=> x.title === product.title)){
            const productIndex = getCart.findIndex(x=> x.title === product.title)
            getCart[productIndex].quantity++
            setCart([...getCart])
        }else {
            setCart([...getCart, product])
        }


        console.log(getCart)

    }

    return (
        <div className="d-flex">
            <div className="card">
                <div>{product.title}</div>
                <img src={product.photo} alt=""/>
                <div>{product.description}</div>
                <h2>{product.price}$</h2>
                <button onClick={addToCart}>Add To Cart</button>
            </div>

        </div>
    );
};

export default SingleProductView;