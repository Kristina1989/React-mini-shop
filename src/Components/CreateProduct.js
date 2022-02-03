import {useContext, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import MainContext from "../MainContext/MainContext";



const CreateProduct = () => {

    const {getProduct, setProduct} = useContext(MainContext)

    const nav = useNavigate()

    const TitleRef = useRef()
    const DescriptionRef = useRef()
    const PhotoRef = useRef()
    const PriceRef = useRef()

    function addProduct () {

        if(TitleRef.current.value.length>0
            && DescriptionRef.current.value.length>0
        && PhotoRef.current.value.includes("http")
        && PriceRef.current.value.length>0) {

            const product = {
                title: TitleRef.current.value,
                description: DescriptionRef.current.value,
                photo: PhotoRef.current.value,
                price: PriceRef.current.value,
                quantity: 1
            }

            setProduct([...getProduct, product])
            nav("/products")
        }



    }






    return (
        <div className="d-flex a-center  j-center column">
            <div className="box d-flex j-center a-center column">
                <h2>CREATE PRODUCT</h2>
                <input defaultValue="puodelis" ref={TitleRef} type="text" placeholder="Title"/>
                <input defaultValue="porcelianinis, ranku darbo" ref={DescriptionRef} type="text" placeholder="Description"/>
                <input defaultValue="https://parksononline.r.worldssl.net/pub/media/catalog/product/cache/70f7450c4c72ec2a64d60ed8068ce727/_/_/___v__v_a_vatiri-household_77035714-1-main.jpg" ref={PhotoRef} type="text" placeholder="Photo"/>
                <input defaultValue="5" ref={PriceRef} type="number" placeholder="Price"/>
                <button onClick={addProduct}>Add Product</button>
            </div>

        </div>
    );
};

export default CreateProduct;