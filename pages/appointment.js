import React from "react";

// API
import { getAppointmentFormData, getPrimaryMenuItems } from "../lib/api";

// Components
import Form1 from "../components/forms/Form1";
import Navigation from "../components/navigation/Navigation";

// Components
import PageHead from "../components/pageHead/PageHead";

export default function Appointment({ formData, menuItemsData }) {
  return (
    <>
      <main className="page-wrap position-relative bg-teal-650">
        <PageHead />
        <Navigation menuItemsData={menuItemsData} />
        <Form1 formData={formData} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const formDataRes = await getAppointmentFormData();
  const menuItemsDataRes = await getPrimaryMenuItems();

  return {
    props: {
      formData: formDataRes ?? null,
      menuItemsData: menuItemsDataRes ?? null,
    },
  };
}
