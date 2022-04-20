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

export const postAppointmentFormData = async (formData, formId) => {
  console.log(formData);
  try {
    const { data } = await axios.post(
      `${WORDPRESS_GRAVITY_FORMS_API_URL}/${formId}/submissions`,
      formData,
      /*  {
        input_1: "",
        input_2: "10 - 12 years",
        input_5: "",
        input_6: "",
        input_7: "Adolescence",
        input_8: "",
        field_values: "",
        source_page: 1,
        target_page: 0,
      }, */
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
