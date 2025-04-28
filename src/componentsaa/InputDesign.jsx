"use client";
import * as React from "react";
import FormHeading from "./FormHeading";
import TextInput from "./TextInput";
import ErrorInput from "./ErrorInput";
import SelectInput from "./SelectInput";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import SubmitButton from "./SubmitButton";

function InputDesignAA() {
  return (
    <section className="flex flex-col justify-center items-center mt-15 mx-auto max-w-[920px]">
      <div className="w-full max-md:max-w-full">
        <FormHeading />
        <div className="mt-3 w-full max-md:max-w-full">
          <form className="w-full max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-10 justify-between items-center w-full text-black max-md:max-w-full">
                <TextInput
                  label="First Name"
                  showLabel={false}
                  className="gap-2.5 self-stretch px-5 py-4 my-auto text-base border border-solid bg-transparent bg-opacity-0 border-stone-300 min-h-[52px] min-w-60 w-[437px] max-md:max-w-full max-sm:w-full"
                />
                <TextInput
                  label="Last Name"
                  showLabel={true}
                  className="self-stretch my-auto text-xs min-w-60 w-[439px] max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-10 justify-between w-full max-md:max-w-full">
                <ErrorInput
                  label="Last Name"
                  errorMessage="Error"
                  className="flex flex-col min-w-60 w-[438px] max-md:max-w-full max-sm:w-auto"
                />
                <SelectInput
                  label="What are you interested in?"
                  className="flex flex-col justify-center px-5 py-4 text-base text-black border border-solid bg-transparent bg-opacity-0 border-stone-300 mt-4 min-w-60 w-[438px] max-md:max-w-full max-sm:w-auto"
                />
              </div>
            </div>
            <TextArea
              label="Comments"
              className="gap-2.5 px-5 pt-4 pb-16 mt-4 w-full text-base text-black whitespace-nowrap border border-solid bg-transparent bg-opacity-0 border-stone-300 min-h-[100px] max-md:max-w-full"
            />
          </form>
          <div className="flex flex-col mt-10 max-w-full text-base text-black w-[399px] max-sm:w-auto">
            <Checkbox
              label="I agree to the terms and conditions of this form.*"
              checked={false}
              className="flex gap-5 justify-between items-center w-full"
            />
            <Checkbox
              label="I agree to the terms and conditions of this form.*"
              checked={true}
              className="flex gap-5 items-center mt-7 w-full"
            />
            <RadioButton
              label="Radio Button Style Not Selected"
              checked={false}
              className="flex gap-5 items-center self-start mt-7"
            />
            <RadioButton
              label="Radio Button Style Selected"
              checked={true}
              className="flex gap-5 justify-between items-end mt-7 max-w-full w-[245px]"
            />
          </div>
        </div>
      </div>
      <SubmitButton
        label="COUNT ME IN"
        className="gap-2.5 self-stretch px-3.5 py-4 mt-11 w-[40%] md:w-[30%] ms-auto text-sm font-bold text-black bg-yellow-400 min-h-[50px] max-md:mt-10 max-md:max-w-full"
      />
    </section>
  );
}

export default InputDesignAA;
