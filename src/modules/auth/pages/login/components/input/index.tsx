import { FocusEvent, HTMLInputTypeAttribute } from "react";
import { signalInput } from "./signal";
import { useSignals } from "@preact/signals-react/runtime";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn;
  error?: string;
};

export const Input = (props: InputProps) => {
  const { type, id, label, register,error } = props;
  useSignals();

  const handleFocus = (e: FocusEvent<HTMLDivElement>) => {
    signalInput.value = true;
    console.log(e);
  };

  return (
    <div
      className="input flex flex-col border border-grayOpacity focus-within:border-green rounded-3xl px-5 py-1"
      onFocus={handleFocus}
    >
      <label className={signalInput.value ? "text-green" : ""} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="outline-none bg-transparent"
        {...register}
      />

      <p>{error}</p>
    </div>
  );
};
