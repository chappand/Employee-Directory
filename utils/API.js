import axios from "axios";

export default {
    getRandomDog: function() {
      return axios.get("https://randomuser.me/");
    }
  };