import React from "react";
import InputAtom from "../context/inputatom"

type FormInputProps = {
  placeholder: string;
  // value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  // value,
  onChange,
  error,
}) => (
  <div className="w-full">
    <InputAtom
      placeholder={placeholder}
      // value={value}
      onChange={onChange}
      error={error}
    />
  </div>
);

export default FormInput;
