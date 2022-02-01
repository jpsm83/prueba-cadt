// axios connect the front with back
// service setup the config for the connection
import axios from "axios";

export default class SetoutsService {
  constructor() {
    this.instance = axios.create({
      // baseURL should be hide in a file call ".env"
      // in this case our baseURL is "http://localhost:5000"
      // baseURL: `${process.env.REACT_APP_API_URL}/setouts`,
      baseURL: "http://localhost:5000/setouts",
    });
  }

  // we can add any methos we want to connect to the back end
  // in this project we are only using "get" and "updateOne"
  get = () => this.instance.get("/");
  updateOne = (id, data) => this.instance.put(`/${id}`, data);

  //   create = (data) => this.instance.post("/", data);
  //   getOne = (id) => this.instance.get(`/${id}`);
  //   deleteOne = (id) => this.instance.delete(`/${id}`);
}
