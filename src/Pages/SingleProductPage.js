import {useContext} from 'react';
import SingleProductView from "../Components/SingleProductView";
import {useParams} from "react-router-dom";
import MainContext from "../MainContext/MainContext";



const SingleProductPage = () => {

    const {getProduct} = useContext(MainContext)


    const {title} = useParams()



    const product = getProduct.find(x=> x.title === title)




    return (
        <div>
           <SingleProductView product={product}/>

        </div>
    );
};

export default SingleProductPage;