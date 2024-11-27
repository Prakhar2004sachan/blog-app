import React from "react";

type InputAtomProps = {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
};

const InputAtom: React.FC<InputAtomProps> = ({
  placeholder,
  value,
  onChange,
  error,
}) => (
  <div className="w-full">
    <input
      className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && <p className="text-red-500">{error}</p>}
  </div>
);

export default InputAtom;
