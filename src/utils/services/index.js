import axios from "axios";

import * as config from "../constants";

export const getPosts = () => {
  try {
    return axios.get(config.POSTS);
  } catch (error) {
    //
  }
};
