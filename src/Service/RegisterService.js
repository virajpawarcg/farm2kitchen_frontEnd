import axios from "axios";

const URL = 'http://localhost:9394/api/reg1';

class RegisterService {

    //method to get all products from backend using above URL
    //http://localhost:2212/api/reg1
    async saveRegister(signup){
        console.log(signup);
        return axios.post(URL+'/registerlist',signup);
    }
}

export default new RegisterService();