"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../ui/Input";

type Inputs = {
  firstName: string;
  lastName: string;
  birthday: Date;
  meliCode: number;
  phoneNumber: number;
  address: string;
  email: string;
  personalPhoto: string;
  resume: string;
  message: string;
};

const formFields = [
  {
    section: "Personal Information",
    fields: [
      {
        name: "firstName",
        labelText: "First Name",
        type: "text",
        state: false,
      },
      { name: "lastName", labelText: "Last Name", type: "text", state: false },
      {
        name: "birthday",
        labelText: "Date of Birth",
        type: "date",
        state: true,
      },
      { name: "meliCode", labelText: "Meli Code", type: "number", state: true },
      {
        name: "phoneNumber",
        labelText: "Phone Number",
        type: "tel",
        state: true,
      },
      { name: "address", labelText: "Address", type: "text", state: true },
      {
        name: "email",
        labelText: "Email Address",
        type: "email",
        state: false,
      },
    ],
  },
  {
    section: "Attachments",
    fields: [
      {
        name: "personalPhoto",
        labelText: "Personal Photo",
        type: "file",
        state: true,
      },
      { name: "resume", labelText: "Resume", type: "file", state: true },
    ],
  },
  {
    section: "Additional Information",
    fields: [
      { name: "message", labelText: "Message", type: "textarea", state: true },
    ],
  },
] as const;

function InternshipForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      {formFields.map((section) => (
        <div className="flex flex-col space-y-2 p-4" key={section.section}>
          <h2>{section.section}</h2>
          {section.fields.map((field) => (
            <Input
              key={field.name}
              labelText={field.labelText}
              type={field.type}
              {...register(field.name, { required: true })}
            />
          ))}
        </div>
      ))}
    </form>
  );
}

export default InternshipForm;
