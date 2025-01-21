import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const navbarFetch = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/categories/fetch`);
    console.log("response:", res.data);
    return await res.data || []
  } catch (e) { 
    console.log("error: ", e);
  }
};