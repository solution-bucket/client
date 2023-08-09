import {useState, useEffect} from 'react';
import axios from 'axios';

const useCategory = ()=> {
 const [categories, setCategories] = useState([]);
 const [loading, setLoading] = useState(false);

 useEffect(()=> {
  getCategories();
 },[])

 const getCategories = async()=> {
   try {
    setLoading(true);
    console.log(loading)
  const {data} = await axios.get("/categories");
  setCategories(data);
  setLoading(false);
} catch (err) {
   console.log(err);
   setLoading(false);
   }
 }
   return{
    categories
   }
}
export default useCategory;