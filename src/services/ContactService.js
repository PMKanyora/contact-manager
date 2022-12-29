
import axios from "axios";

const serverURL = "http://localhost:9000/contacts";


export const getallUsers = async (id) =>{
  id = id || '';
  return await axios.get(`${serverURL}/${id}`);

}
