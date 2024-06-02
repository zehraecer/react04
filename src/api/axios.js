import axios from 'axios';


const BASEURL_HACKERRANK_API = "https://jsonmock.hackerrank.com/api",
    baseUrl_JsonPlaceHolder_API = "https://jsonplaceholder.typicode.com/"


export const HackerRankAPI = axios.create({
    baseURL: BASEURL_HACKERRANK_API
})
export const JsonPlaceHolder = axios.create({ baseURL: baseUrl_JsonPlaceHolder_API })
