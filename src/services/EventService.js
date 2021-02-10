import axios from "axios";

let apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/hudeopmhz/database/",
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },

  getEvent(id) {
    return (
      console.log(apiClient.get("/events/" + id)),
      apiClient.get("/events/" + id)
    );
  },
};
