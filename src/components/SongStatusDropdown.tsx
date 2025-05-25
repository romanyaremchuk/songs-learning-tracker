import React from "react";

interface Props {
  setIsVisible?: (isVisible: boolean) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: "wantToLearn" | "learning" | "learned";
}

const SongStatusDropdown = ({
  handleSelectChange,
  setIsVisible,
  value,
}: Props) => {
  return (
    <>
      <select
        onFocus={() => setIsVisible?.(true)}
        onBlur={() => setIsVisible?.(false)}
        onChange={handleSelectChange}
        value={value}
      >
        <option value={"wantToLearn"}>I want to learn</option>
        <option value={"learning"}>I am learning</option>
        <option value={"learned"}>I have learned</option>
      </select>
    </>
  );
};

export default SongStatusDropdown;
