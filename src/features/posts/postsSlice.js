import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import postsService from "./postsService"


const token = JSON.parse(localStorage.getItem("token"));
const initialState = {
    posts:[],
    isLoading:false,
    post:{},
    token:token ? token:null
    
}
export const getAll = createAsyncThunk("posts/getAll", async () => {
    try {
        return await postsService.getAll();
    } catch (error) {
        console.error(error);
    }
})
export const getById = createAsyncThunk("posts/getById", async (id) => {
    try {
        return await postsService.getById(id);
    } catch (error) {
        console.error(error);
    }
})
export const getByName = createAsyncThunk("posts/getByName", async (title) => {
    try {
        return await postsService.getByName(title)
    } catch (error) {
        console.error(error);
    }
});
export const newPost = createAsyncThunk("posts/newPost", async (post) => {
    console.log("newPost".post);
    try {
        return await postsService.newPost(post)
    } catch (error) {
        console.error(error);
    }
});


export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reset:(state)=>{
            state.isLoading=false
        },
    },
    extraReducers: (builder) => {

builder
    .addCase(getAll.fulfilled, (state, action) => {
    state.posts = action.payload
})
    .addCase(getAll.pending,(state)=>{
        state.isLoading=true
    })
    .addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload
    })
    .addCase(getByName.fulfilled, (state, action) => {
        state.posts = action.payload
    })
    .addCase(newPost.fulfilled, (state, action) => {
        state.isSuccess = true
        state.message = action.payload.message;
    })
},

});

export const {reset}=postsSlice.actions
export default postsSlice.reducer;