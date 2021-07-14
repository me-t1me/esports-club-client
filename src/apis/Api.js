import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: `${URL}/apis`, // https://esport-club-server.herokuapp.com/ , http://localhost:3005/
});
