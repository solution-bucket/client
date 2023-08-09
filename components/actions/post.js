import queryString from 'query-string';
const API = 'http://localhost:8000/api/';
export const searchProducts =(params) =>{
     console.log(' search params', params);
let query = queryString.stringify(params);
console.log(' query params', query);
 return fetch(`${API}/posts/search?${query}`, {
     method: "GET"
 })
}