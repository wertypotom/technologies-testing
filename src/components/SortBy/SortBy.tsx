import React from "react";

interface Options {
  value: string;
  title: string;
}

interface SortByProps {
  options: Options[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortBy = ({ options, onChange }: SortByProps) => {
  return (
    <select onChange={(e) => onChange(e)}>
      {options.map((option) => (
        <option key={Math.random()} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default SortBy;
