
import React from "react";

interface InputFieldProps {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

const InputField = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  className = "",
  disabled = false
}: InputFieldProps) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent ${className} ${disabled ? 'cursor-not-allowed' : ''}`}
        aria-label={placeholder}
        required
      />
    </div>
  );
};

export default InputField;
