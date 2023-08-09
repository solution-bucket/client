import {useState, useEffect} from 'react';
import axios from 'axios';

const useLatestPosts = ()=> {
 const [latestposts, setPosts] = useState([]);
 const [loading, setLoading] = useState(false);
 useEffect(()=> {
  getPosts();
 },[])

 const getPosts = async()=> {
   try {
    setLoading(true);
  const {data} = await axios.get("/posts/1");
  setPosts(data);
  setLoading(false)
   } catch (err) {
   console.log(err);
   setLoading(false)
   }
 }
   return{
    latestposts
   }
}
export default useLatestPosts;