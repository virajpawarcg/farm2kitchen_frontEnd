import React, { useState } from "react";
import Helmet from "../../Components/Helmet/Helmet";
import CommonSection from "../../Components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";
import '../Categories/Categories.css';
import products from "../assets/fake-data/products";
import ProductCard from "../../Components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../../styles/category.css";
import "../../styles/home.css";
import "../../styles/all-foods.css";
import "../../styles/pagination.css";
import "../../styles/product-details.css"
import Header from "../Header/Header";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All-Foods">
    <Header/>
      <section style={{marginTop:"8%"}}>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget">
                <input 
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
                
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="3" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item}/>
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
