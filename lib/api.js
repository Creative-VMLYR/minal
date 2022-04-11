import axios from "axios";
import {
  WORDPRESS_API_HOME_URL,
  WORDPRESS_ACF_OPTIONS_API_URL,
} from "../lib/constants";

export const getLandingPage = async () => {
  try {
    const { data } = await axios.get(WORDPRESS_API_HOME_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getWebsiteOptions = async () => {
  try {
    const { data } = await axios.get(WORDPRESS_ACF_OPTIONS_API_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
