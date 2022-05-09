import axios from "axios";
import {
  WORPRESS_PRIMARY_MENU,
  WORDPRESS_API_HOME_URL,
  WORDPRESS_API_FAQS_URL,
  WORDPRESS_ACF_OPTIONS_API_URL,
  WORDPRESS_GRAVITY_FORMS_API_URL,
} from "./constants";

const gravityFormsUsername = process.env.GRAVITY_FORMS_API_CONSUMER_KEY;
const gravityFormsPassword = process.env.GRAVITY_FORMS_API_CONSUMER_SECRET;

const gravityFormsToken = Buffer.from(
  `${gravityFormsUsername}:${gravityFormsPassword}`,
  "utf8"
).toString("base64");

export const getPrimaryMenuItems = async () => {
  try {
    const { data } = await axios.get(WORPRESS_PRIMARY_MENU);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLandingPage = async () => {
  try {
    const { data } = await axios.get(WORDPRESS_API_HOME_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getFAQsPage = async () => {
  try {
    const { data } = await axios.get(WORDPRESS_API_FAQS_URL);
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

export const postAppointmentFormData = async (formData, formId) => {
  console.log(formData);
  try {
    const { data } = await axios.post(
      `${WORDPRESS_GRAVITY_FORMS_API_URL}/${formId}/submissions`,
      formData,
      {
        headers: {
          Authorization: `Basic ${gravityFormsToken}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
