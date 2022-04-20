import React from "react";

// API
import { getAppointmentFormData } from "../lib/api";

// Components
import Form1 from "../components/forms/Form1";
import Navigation2 from "../components/navigation/navigation2";

// Components
import PageHead from "../components/pageHead/PageHead";

export default function Appointment({ formData }) {
  return (
    <>
      <main className="page-wrap position-relative bg-teal-650">
        <PageHead />
        <Navigation2 posAbs={false} />
        <Form1 formData={formData} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const formDataRes = await getAppointmentFormData();

  return {
    props: {
      formData: formDataRes ?? null,
    },
  };
}
