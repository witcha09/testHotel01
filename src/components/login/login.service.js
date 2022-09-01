import axios from "axios";

const API_URL = "http://127.0.0.1:8081/";

class LoginService {

  login(username, password) {
        return axios
          .post(API_URL, {Username1: username, Pasword2: password})
          .then(function(response) {
              //console.log(response.data.message);
               console.log(response.config)
            return response.data;
          });
      }

}

export default new LoginService();