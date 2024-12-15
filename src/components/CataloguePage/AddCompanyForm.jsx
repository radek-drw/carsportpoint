import React from "react";

const AddCompanyForm = () => {
  return (
    <form
      action=""
      className=" mx-auto xl:w-[732px] lg:w-[564px] md:w-[424px] mt-20"
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-customRed">
        Do you want to add your company? <br /> Please fill the form
      </h3>
      <div>
        <input
          type="text"
          placeholder="Company Name"
          className="input-bordered w-full"
        />
      </div>
      <div className="flex justify-between">
        <input
          type="email"
          placeholder="Your e-mail"
          className="input-bordered basis-[47%]"
        />
        <input
          type="tel"
          placeholder="Your phone"
          className="input-bordered basis-[47%]"
        />
      </div>
      <div>
        <textarea
          rows={9}
          placeholder="Please give us some info: opening hours and your company address and contact details for customers. You can also attach a photo"
          className="input-bordered w-full"
        />
      </div>
      <input type="file" className="mb-8" />
      <button
        type="submit"
        className="block text-white bg-customRed border-customRed w-full px-5 py-4 rounded-md hover:bg-red-700 hover:border-red-700 transition-all duration-300"
      >
        SEND NOW
      </button>
    </form>
  );
};

export default AddCompanyForm;
