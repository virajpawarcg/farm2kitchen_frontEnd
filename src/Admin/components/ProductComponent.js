import React, { useEffect, useState } from 'react';

import ProductService from '../Services/ProductService';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';

function ProductComponent(){

    //useState for state of the component
    const[products,setProducts] = useState([]);

    //this method call service method to get all products
    const getProducts = () => {
        ProductService.getProducts().then((response) => {
            setProducts(response.data);
            console.log(response.data);
        });
    };

    useEffect(() =>{
        getProducts()
    },[]);

    return(
        <div>
                   <div style={{width : "190%"}}  className="">

            <h1 style={{paddingTop:"5%",textAlign:'center'}}>Vegetable List</h1>
            <table className="table table-striped table-inverse">
                <thead className="thead-inverse">
                    <tr>
                        <th>Vegetable  Id</th>
                        <th>Vegetable Name</th>
                        
                        <th>Vegetable Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(
                                product =>
                                <tr key={product.productid}>
                       
                            <th>{product.productId}</th>
                            <th>{product.productName}</th>
                            <th>{product.productPrice}</th>
                        </tr>
                            )
                        }
                    </tbody>
            </table>
        </div>
        </div>
    )


}

export default ProductComponent;