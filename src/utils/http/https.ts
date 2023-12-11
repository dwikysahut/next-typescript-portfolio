import axios from "axios";

export const getUser = async () => {
  const response = await axios.get('https://reqres.in/api/users/2');
  return response.data;
}

