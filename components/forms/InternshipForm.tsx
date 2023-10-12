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
  { name: "firstName", labelText: "First Name", type: "text", state: false },
  { name: "lastName", labelText: "Last Name", type: "text", state: false },
  { name: "birthday", labelText: "Date of Birth", type: "date", state: true },
  { name: "meliCode", labelText: "Meli Code", type: "number", state: true },
  { name: "phoneNumber", labelText: "Phone Number", type: "tel", state: true },
  { name: "address", labelText: "Address", type: "text", state: true },
  { name: "email", labelText: "Email Address", type: "email", state: false },
  {
    name: "personalPhoto",
    labelText: "Personal Photo",
    type: "file",
    state: true,
  },
  { name: "resume", labelText: "Resume", type: "file", state: true },
  { name: "message", labelText: "Message", type: "textarea", state: true },
] as const;

function InternshipForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {formFields.map((field) => (
        <Input
          key={field.name}
          labelText={field.labelText}
          type={field.type}
          {...register(field.name, { required: true })}
        />
      ))}
      <label
        htmlFor="exampleFormControlInput1"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
      >
        Example label
      </label>

      <input
        type="text"
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlInput1"
        placeholder="Example label"
      />
    </form>
  );
}

export default InternshipForm;
