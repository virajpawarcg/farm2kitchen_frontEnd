import axios from "axios";

const URL = 'http://localhost:9394/api/l1';

class LoginService {
    async saveLogin(login){
        console.log(login);
        return axios.post(URL+'/login',login);
    }
}

export default new LoginService();