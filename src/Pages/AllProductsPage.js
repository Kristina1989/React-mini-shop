import React, {useEffect, useContext} from 'react';
import AllProductsView from "../Components/AllProductsView";
import MainContext from "../MainContext/MainContext";



const AllProductsPage = () => {

    const {getProduct, setPage} = useContext(MainContext)

    useEffect(() => {
        setPage('products')
    }, [])


    return (
        <div className="d-flex wrap">
            {getProduct.map((x,i) => <AllProductsView product={x} key={i}/>)}

        </div>
    );
};

export default AllProductsPage;