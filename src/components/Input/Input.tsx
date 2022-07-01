import React from "react";
import "./Input.css";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  placeholder?: string;
}

const Input = ({
  value,
  label,
  placeholder = "",
  type = "text",
  onChange,
}: InputProps) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      className="input"
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  </div>
);

export default Input;
