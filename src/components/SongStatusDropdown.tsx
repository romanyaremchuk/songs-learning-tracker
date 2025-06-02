import React from "react";

interface Props {
  setIsVisible?: (isVisible: boolean) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: "wantToLearn" | "learning" | "learned";
  styles: string;
}

const SongStatusDropdown = ({
  handleSelectChange,
  setIsVisible,
  value,
  styles,
}: Props) => {
  return (
    <>
      <select
        //className="border ms-5 p-2 h-10"
        className={styles}
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
