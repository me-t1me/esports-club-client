import axios from "axios";

export default axios.create({
  baseURL: "https://esport-club-server.herokuapp.com/apis", // https://esport-club-server.herokuapp.com/ , http://localhost:3005/
});
