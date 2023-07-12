import axios from 'axios'

const API_URL = "http://localhost:3000"

const getAll = async () => {

    try {
        const res = await axios.get(API_URL + "/posts/getAllPosts");
        console.log("get",res.data);
        return res.data;
      } catch (error) {
        console.error(error);
        
      }
    };
const getById = async (id) => {
  const res = await axios.get(API_URL + "/posts/getById/" + id);
  return res.data;
  };

const postsService = {
     getAll,
     getById
}
export default postsService