import axios from "axios";

export default {
    getRandomDog: function() {
      return axios.get("https://randomuser.me/api/?results=50&nat=us");
    }
  };