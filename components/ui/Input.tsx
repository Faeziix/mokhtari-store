import React, { useEffect } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const input = cva(
  "input input-bordered focus:outline-none focus:shadow-outline",
  {
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
    },
    defaultVariants: {
      Size: "md",
      state: "default",
    },
  }
);

const label = cva("block text-gray-700 text-sm font-bold mb-2", {
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
  useEffect(() => {
    const init = async () => {
      const { Input, initTE } = await import("tw-elements");
      initTE({ Input });
    };
    init();
  }, []);

  return (
    <div className="form-control">
      {labelText && (
        <label htmlFor={name} className={cn(label({ Size, labelState }))}>
          {labelText}
        </label>
      )}
      <input
        {...props}
        id={name}
        name={name}
        className={cn(input({ state, Size }), props.className)}
      />
      {state == "error" && (
        <p className="text-error text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
