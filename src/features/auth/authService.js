import axios from "axios";

const API_URL = "http://localhost:3000";

const register = async (userData) => {
    const res = await axios.post(`${API_URL}/users/register`, userData);

return res.data;

}
const login = async(userData)=>{

    const res = await axios.post(API_URL + '/users/login',userData)
    console.log(res);
    
    if (res.data) {
        
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        
    }
    return res.data
}
const logout = async () => {

    const tokenLocalstorage = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/users/logout" , {
    headers: {
        authorization: tokenLocalstorage,
    
    },
})
}
const getInfo=async() => {
    const tokenLocalstorage = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(`${API_URL}/users/getInfo/`, {
        headers: {
            authorization: tokenLocalstorage,
        },
    })
    console.log("getInfo",res.data);
    return res.data
}

const authService = {
    register,
    login,
    logout,
    getInfo

};

export default authService