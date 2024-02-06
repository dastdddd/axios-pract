import axios from "axios";
import { onLoadComments } from "../redux/actions";


axios.defaults.baseURL = 'https://api.jikan.moe/v4/'
//базовый URL чтобы не писать каждый раз полный ссылку в axios.get('users')
export const getUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('users')
      console.log(response);
      dispatch(onLoadComments(response.data.data))
    } catch (e) {
      console.log(e);
    }
  }
}
export const searchUser = (text) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`users?q=${text}`)//q=эта парраметр для поисковика в документации
      dispatch(onLoadComments(response.data.data))
    } catch (e) {
      console.log(e);
    }
  }
}


