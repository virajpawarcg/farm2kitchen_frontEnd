// Categories
import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import '../Categories/Categories.css';

import products from "../assets/fake-data/products.js";
import ProductCard from "../UI/product-card/ProductCard.jsx";
import marrow from "../Images/marrow.png";
import root from "../Images/root.png";
import leafy_green from "../Images/leafy.png";
import allium from "../Images/allium.png"
import cruciferous from "../Images/cruciferous.png"
import Helmet from "../Helmet/Helmet.js";
import "../../styles/category.css";
import "../../styles/home.css";
import { Provider } from "react-redux/es";
// import { createStore, applyMiddleware } from 'redux';
export default function Categories() {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  // const store = createStore(Categories);
  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "Marrow") {
      const filteredProducts = products.filter(
        (item) => item.category === "Marrow"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Cruciferous") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cruciferous"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Root") {
      const filteredProducts = products.filter(
        (item) => item.category === "Root"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title="Categories">
      
    <section className="categories" id="categories">
      <h1 className="heading">
        products
        {' '}
        <span>categories</span>
      </h1>
      <section style={{width:"100%",marginTop:"-5%"}}>
        <Container>
          <Row>
            <Col lg="12" >
              <div className="food__category  d-flex align-items-center justify-content-center gap-4" style={{background:"#60b246"}}>
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Marrow" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Marrow")}
                >
                  {/* <img src={foodCategoryImg01} alt="" /> */}
                  Marrow
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Cruciferous" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Cruciferous")}
                >
                  {/* <img src={foodCategoryImg02} alt="" /> */}
                  Cruciferous
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Root" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Root")}
                >
                  {/* <img src={foodCategoryImg03} alt="" /> */}
                  Root
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="3" sm="6" xs="6" key={item.id} className="mt-6" >
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
    </section>
    
    </Helmet>
  );
}
