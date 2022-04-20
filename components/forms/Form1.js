// Modules
import React from "react";

// Swiper
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// API
import { postAppointmentFormData } from "../../lib/api";

const Form1 = ({ formData }) => {
  //console.log(formData);

  const { id, title, fields, button } = formData;
  const formID = id;

  const setSlideHeight = (swiperInst) => {
    console.log(swiperInst);
  };

  const getFieldData = (fieldID) => {
    function findFieldData(field) {
      return field.id === fieldID;
    }

    return fields.find(findFieldData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const nativeFormFields = form.querySelectorAll(".field");

    let formNewData = {
      field_values: "",
      source_page: 1,
      target_page: 0,
    };

    nativeFormFields.forEach((nativeFormField) => {
      formNewData[nativeFormField.getAttribute("name")] = nativeFormField.value;
    });

    /*   formNewData.form_id = formID.toString(); */

    // const JSONdata = JSON.stringify(formNewData);

    const postedDataResponse = await postAppointmentFormData(
      formNewData,
      formID
    );

    console.log(postedDataResponse);
  };

  // Fields
  const fieldData1 = getFieldData(1);
  const fieldData2 = getFieldData(2);
  const fieldData3 = getFieldData(3);
  const fieldData4 = getFieldData(4);
  const fieldData5 = getFieldData(5);
  const fieldData6 = getFieldData(6);
  const fieldData7 = getFieldData(7);
  const fieldData8 = getFieldData(8);
  const fieldData9 = getFieldData(9);
  const fieldData10 = getFieldData(10);

  const swiperParams = {
    direction: "vertical",
    autoHeight: true,
    slidesPerView: 1,
    mousewheel: true,
    modules: [Mousewheel],
  };

  return (
    <>
      <section className="page-section form-1 mt-14">
        <div className="container mx-auto px-28">
          <header className="form-1-header mb-14 text-center text-white">
            {title && <h1>{title}</h1>}
          </header>

          <div className="form-1-body">
            <form onSubmit={handleSubmit}>
              <Swiper {...swiperParams} className="formSwiper !pb-14">
                <SwiperSlide>
                  <div className="bg-white p-10 pb-20 rounded-xl relative">
                    <div className="grid gap-8 grid-flow-col auto-cols-fr">
                      {fieldData1 && (
                        <div>
                          <label
                            className="block font-bold text-2xl mb-3"
                            htmlFor={`input_${formID}_${fieldData1.id}`}
                          >
                            {fieldData1.label}
                          </label>
                          <input
                            type="text"
                            name={`input_${fieldData1.id}`}
                            id={`input_${formID}_${fieldData1.id}`}
                            className="block border-gray-300 w-full field"
                            data-field-id={fieldData1.id}
                          />
                        </div>
                      )}

                      {fieldData2 && (
                        <div>
                          <label
                            className="block font-bold text-2xl mb-3"
                            htmlFor={`input_${formID}_${fieldData2.id}`}
                          >
                            {fieldData2.label}
                          </label>
                          <select
                            name={`input_${fieldData2.id}`}
                            id={`input_${formID}_${fieldData2.id}`}
                            className="block border-gray-300 w-full field"
                            data-field-id={fieldData2.id}
                          >
                            {fieldData2.choices.map((option, index) => (
                              <option key={index} value={option.value}>
                                {option.text}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>

                    <span className="js-next-slide rounded-full w-20 h-20 bg-teal-600 shadow-lg flex items-center justify-center absolute -bottom-10 left-1/2 -translate-x-1/2 cursor-pointer">
                      <i className="bi bi-arrow-down text-3xl text-white"></i>
                    </span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-10 pb-20 rounded-xl relative">
                    {fieldData3 && (
                      <h2 className="font-bold text-2xl mb-2">
                        {fieldData3.content}
                      </h2>
                    )}

                    {fieldData4 && <p className="mb-5">{fieldData4.content}</p>}

                    <div className="grid gap-8 grid-flow-col auto-cols-fr">
                      {fieldData5 && (
                        <div>
                          <label
                            className="block font-bold mb-3"
                            htmlFor={`input_${formID}_${fieldData5.id}`}
                          >
                            {fieldData5.label}
                          </label>
                          <input
                            type="text"
                            name={`input_${fieldData5.id}`}
                            id={`input_${formID}_${fieldData5.id}`}
                            className="block border-gray-300 w-full field"
                            data-field-id={fieldData5.id}
                          />
                        </div>
                      )}

                      {fieldData6 && (
                        <div>
                          <label
                            className="block font-bold mb-3"
                            htmlFor={`input_${formID}_${fieldData6.id}`}
                          >
                            {fieldData6.label}
                          </label>
                          <input
                            type="email"
                            name={`input_${fieldData6.id}`}
                            id={`input_${formID}_${fieldData6.id}`}
                            className="block border-gray-300 w-full field"
                            data-field-id={fieldData6.id}
                          />
                        </div>
                      )}
                    </div>

                    <span className="js-next-slide rounded-full w-20 h-20 bg-teal-600 shadow-lg flex items-center justify-center absolute -bottom-10 left-1/2 -translate-x-1/2 cursor-pointer">
                      <i className="bi bi-arrow-down text-3xl text-white"></i>
                    </span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-10 pb-20 rounded-xl relative">
                    <div className="grid gap-8 grid-flow-col auto-cols-fr">
                      {fieldData7 && (
                        <div>
                          <label
                            className="block font-bold text-2xl mb-3"
                            htmlFor={`input_${formID}_${fieldData7.id}`}
                          >
                            {fieldData7.label}
                          </label>
                          <select
                            name={`input_${fieldData7.id}`}
                            id={`input_${formID}_${fieldData7.id}`}
                            className="block border-gray-300 w-full field"
                            data-field-id={fieldData7.id}
                          >
                            {fieldData7.choices.map((option, index) => (
                              <option key={index} value={option.value}>
                                {option.text}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>

                    <span className="js-next-slide rounded-full w-20 h-20 bg-teal-600 shadow-lg flex items-center justify-center absolute -bottom-10 left-1/2 -translate-x-1/2 cursor-pointer">
                      <i className="bi bi-arrow-down text-3xl text-white"></i>
                    </span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-10 pb-20 rounded-xl relative">
                    <div className="grid gap-8 grid-flow-col auto-cols-fr">
                      {fieldData8 && (
                        <div>
                          <label
                            className="block font-bold text-2xl mb-3"
                            htmlFor={`input_${formID}_${fieldData8.id}`}
                          >
                            {fieldData8.label}
                          </label>
                          <textarea
                            name={`input_${fieldData8.id}`}
                            id={`input_${formID}_${fieldData8.id}`}
                            className="block border-gray-300 w-full field"
                            rows="5"
                            data-field-id={fieldData8.id}
                          ></textarea>
                        </div>
                      )}
                    </div>

                    <span className="js-next-slide rounded-full w-20 h-20 bg-teal-600 shadow-lg flex items-center justify-center absolute -bottom-10 left-1/2 -translate-x-1/2 cursor-pointer">
                      <i className="bi bi-arrow-down text-3xl text-white"></i>
                    </span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="text-white p-1 flex flex-col items-center text-center">
                    {fieldData9 && (
                      <p className="text-2xl mb-4">{fieldData9.content}</p>
                    )}

                    {fieldData10 && (
                      <label
                        className="inline-flex items-center"
                        htmlFor={`input_${formID}_${fieldData10.id}`}
                      >
                        <input
                          name={`input_${fieldData10.id}`}
                          type="checkbox"
                          id={`input_${formID}_${fieldData10.id}`}
                          className="field"
                          data-field-id={fieldData10.id}
                        />
                        <span className="ml-2 text-xl">
                          {fieldData10.checkboxLabel}
                        </span>
                      </label>
                    )}

                    <div className="flex justify-center mt-8">
                      {button && (
                        <button
                          type="submit"
                          className="btn text-2xl text-white hover:text-neutral-800 bg-transparent hover:bg-white border border-white rounded-full transition"
                        >
                          {button.text}
                        </button>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form1;
