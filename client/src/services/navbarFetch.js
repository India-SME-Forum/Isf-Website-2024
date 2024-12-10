import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const navbarFetch = async () => {

const res = await axios.get(`${BASE_URL}/api/v1/categories/fetch`);
 
return res.data;
};    