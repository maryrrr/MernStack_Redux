import axios from 'axios'

const API_URL = "http://localhost:3000"

const getAll = async () => {

    try {
        const res = await axios.get(API_URL + "/posts/getAllPosts");
        //console.log("get",res.data);
        return res.data;
      } catch (error) {
        console.error(error);
        
      }
    };
const getById = async (id) => {
  const res = await axios.get(API_URL + "/posts/getById/" + id);
  return res.data;
  }

const getByName=async(title) => {
  const res = await axios.get(`${API_URL}/posts/getByTitle/${title}`)
 // console.log("getName",res.data);
  return res.data
}
const newPost=async(postData) => {
  const token = JSON.parse(localStorage.getItem("token"))
    const res = await axios.post(`${API_URL}/posts/newPost`, postData, {
        headers: {
            authorization: token,
        },
    })
    console.log(res.data);
    return res.data
}
const deletePost=async (id) =>{
  const token = JSON.parse(localStorage.getItem("token"))
  const res= await axios.delete(`${API_URL}/posts/deletePost/${id}`, {
    headers: {
      authorization: token,
    },
  })
  return res.data
}
const update = async (post) => {
  console.log("post",post);
  const token = JSON.parse(localStorage.getItem("token"))
  const res = await axios.put(API_URL + "/posts/update/"+ post.id, post.body,{
    headers: {
      authorization: token,
    },
  })
  return res.data
  
  }
  const reviews = async (post) => {
    try {
      if (!post || !post.id) {
          throw new Error("Id error validation");
      }
      const token = JSON.parse(localStorage.getItem('token'));
      const res = await axios.put(API_URL + "/posts/reviews/"+ post.id, post.body, {
        headers: {
            authorization: token,
        },  
    })
      return res.data
    } catch (error) {
    console.error(error);
    throw error;
    }
  }



const postsService = {
     getAll,
     getById,
     getByName,
     newPost,
     deletePost,
     update,
     reviews
}
export default postsService