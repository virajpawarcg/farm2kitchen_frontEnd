// import { Colors } from "chart.js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../Services/ProductService";


export default function AddProductComponent() {
    
    const initialState = {
        product_id: "",
        product_name: "",
        product_price: ""
    };

    //define state for product using useState Hook
    const [product, setProduct] = useState(initialState);
    //const navigate = useNavigate();

    function getTitle() {
        if (product.product_id === '_add') {
            return <h3 className="text-center">Add Product</h3>
        } else {
            return <h3 className="text-center">Update Product</h3>
        }
    }

    function handleChange(event){
        setProduct({...product,[event.target.name]:event.target.value})
    }

 /*    function handleCancel(){
        navigate("/");
    } */

    function handleSubmit(event){
        async function createProduct(){
            try{
                ProductService.createProduct(product).then(
                    
                    (res) => {
                        // console.log(product)
                        alert("product added successfully....")
                        
                    }
                )
            }catch(error){
                console.log(error);
            }
        }
        createProduct();
    }

    return (
        <div>
            <br /><br />
            <div className="container"  style={{ maxWidth: "400px",marginLeft:"192px" }}>
            <br /><br />
                <div className="row">
                   {/*  <div>
                        {
                            getTitle()
                        }
                    </div> */}
                    <br /><br />
                    <div className="form-group">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <h3>Add Products</h3><br/>
                            <label className="form-label" >Product Name</label>
                            <input type="text"
                                name="product_Name"
                                className="form-control"
                                value={product.product_name}
                                onChange={handleChange}
                                required />
                        </div>
                       
                        <div className="form-group">
                            <label className="form-label">Product Price</label>
                            <input type="text"
                                name="product_Price"
                                className="form-control"
                                value={product.product_price}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="btn-group">
                            <input type="submit" value="Submit" 
                            className="btn btn-primary" />
                            <button
                                type="button"
                                //onClick={handleCancel}
                                className="btn btn-secondary"
                                style={{ marginLeft: "400px" }}>
                                Cancel
                            </button>

                        </div>
                    </form>
                    </div>
                   
                </div>
            </div>
        </div>
    
    )
};        