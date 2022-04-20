import axios from "axios";
import {
  WORDPRESS_API_HOME_URL,
  WORDPRESS_ACF_OPTIONS_API_URL,
  WORDPRESS_GRAVITY_FORMS_API_URL,
  WORDPRESS_GRAVITY_FORM_ENTRIES_API_URL,
} from "../lib/constants";

const gravityFormsUsername = process.env.GRAVITY_FORMS_API_CONSUMER_KEY;
const gravityFormsPassword = process.env.GRAVITY_FORMS_API_CONSUMER_SECRET;

const gravityFormsToken = Buffer.from(
  `${gravityFormsUsername}:${gravityFormsPassword}`,
  "utf8"
).toString("base64");

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

export const getAppointmentFormData = async () => {
  try {
    const { data } = await axios.get(`${WORDPRESS_GRAVITY_FORMS_API_URL}/1`, {
      headers: {
        Authorization: `Basic ${gravityFormsToken}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postAppointmentFormData = async (formData) => {
  console.log(formData);
  try {
    const { data } = await axios.post(
      `${WORDPRESS_GRAVITY_FORM_ENTRIES_API_URL}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${gravityFormsToken}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
