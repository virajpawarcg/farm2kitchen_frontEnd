import axios from "axios";
const PRODUCT_API_BASE_URL = 'http://localhost:9394//api/reg1';

class UserService {

    //methods to get all products from backend using above URL
    //http://localhost:8080/product/listproducts
    getUsers(){
        return axios.get(PRODUCT_API_BASE_URL+'/register');
        }
}
export default new UserService();