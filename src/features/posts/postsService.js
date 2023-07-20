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


const postsService = {
     getAll,
     getById,
     getByName,
     newPost,
}
export default postsService