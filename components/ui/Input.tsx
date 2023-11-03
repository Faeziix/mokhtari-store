"use client";
import React, { useEffect } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/utils";
import { Input as MInput } from "@material-tailwind/react";

const input = cva("", {
  variants: {
    Size: {
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
    },
    state: {
      default: "input",
      error: "input-error",
    },
    type: {
      text: "",
      file: "",
    },
  },
  defaultVariants: {
    Size: "md",
    state: "default",
    type: "text",
  },
});

const label = cva("mb-2 inline-block text-neutral-700 dark:text-neutral-200", {
  variants: {
    Size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    labelState: {
      default: "",
      optional: "label-optional",
      required: "label-required",
    },
  },
  defaultVariants: {
    Size: "md",
    labelState: "default",
  },
});

export type LabelProps = VariantProps<typeof label> &
  React.HTMLProps<HTMLLabelElement>;

export type InputProps = VariantProps<typeof input> &
  React.HTMLProps<HTMLInputElement> &
  LabelProps & {
    errorMessage?: string;
    labelText?: string;
    name: string;
  };

function Input({
  state,
  errorMessage,
  name,
  labelText,
  Size,
  labelState,
  ...props
}: InputProps) {
  return (
    <div className="relative">
      {props.type == "file" ? (
        <label
          className={cn(label({ Size, labelState }), "cursor-pointer")}
          htmlFor={name}
        >
          {labelText}
        </label>
      ) : null}
      <MInput
        {...props}
        name={name}
        label={props.type == "file" ? "" : labelText}
        variant="outlined"
        crossOrigin
        color="orange"
      />
      {state == "error" && (
        <p className="text-error text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
