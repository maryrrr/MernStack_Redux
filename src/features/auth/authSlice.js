import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import authService  from "./authService";


const userLocalstorage = JSON.parse(localStorage.getItem("user"));
const tokenLocalstorage = JSON.parse(localStorage.getItem("token"));

const initialState = {
    user: userLocalstorage ? userLocalstorage:null,
    token: tokenLocalstorage ? tokenLocalstorage:null
};
export const register = createAsyncThunk("auth/register",async (user) => {
    
    try {
        return await authService.register(user);
    
    } catch (error) {
        console.error(error);
        }   
    }
)
export const login = createAsyncThunk("auth/login", async (user) => {

    try {
        return await authService.login(user);
    } catch (error) {
    console.error(error);
    }
});

export const authSlice = createSlice({

    name: "auth",

    initialState,

    reducers: {},

});

export default authSlice.reducer;