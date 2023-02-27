import axios from "axios";
const PRODUCT_API_BASE_URL = 'http://localhost:9394/product';

class ProductService {

    //methods to get all products from backend using above URL
    //http://localhost:8080/product/listproducts
    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL+'/listproducts');
    }
    createProduct(product){
        alert("product added")
        return axios.post(PRODUCT_API_BASE_URL+'/saveproduct',product);
    }

    getProductById(productid){
        return axios.get(PRODUCT_API_BASE_URL+'/findproduct/'+productid);
    }
        
}
export default new ProductService();