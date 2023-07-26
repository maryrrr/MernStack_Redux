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
})
export const deletePost=createAsyncThunk("posts/deletePost",async(id)=>{
    try {
        return await postsService.deletePost(id)
    } catch (error) {
        console.error(error);
    }
})
export const update=createAsyncThunk("posts/update",async(post)=>{
    console.log("hola",post);
    try {
        return await postsService.update(post)
    } catch (error) {
        console.error(error);
    }
})
export const reviews = createAsyncThunk('posts/reviews', async (post) => {
    try {
      return await postsService.reviews(post);
    } catch (error) {
      console.error(error);
      throw error;
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
        .addCase(deletePost.fulfilled, (state, action) => {
            state.posts = state.posts.filter(
            (post) => post._id !== +action.payload._id
            )
        })
        .addCase(update.fulfilled, (state, action) => {
            console.log("update",action.payload.post);
            console.log("state",state.post);
    
        })
        .addCase(reviews.fulfilled, (state, action) => {
            const posts = state.posts.map((post) => {
                if(post._id === action.payload.id) {
                    post = action.payload
                }
                
                return post
            })
            state.posts = posts
        })
}
})
export const {reset}=postsSlice.actions
export default postsSlice.reducer;