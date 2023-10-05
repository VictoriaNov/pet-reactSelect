import React, { useEffect, useState } from "react";
import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
  options: SelectOption[];
};

export default function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOptions() {
    onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if(option === value) onChange(option)
  }

  function isOptionSelected(option: SelectOption){
    return option === value;
  }

  useEffect(() => {
    if(isOpen){
      setHighlightedIndex(0)
    }
  }, [isOpen])

 
  return (
    <div
      onBlur={() => setIsOpen(false)} //to make options close when clicking somewhere outside the div
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>{value?.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation(); //for it NOT to pop up to the parent div, which will open it up
          clearOptions();
        }}
        className={styles["clear-btn"]}
      >
        x
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((el, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(el);
              setIsOpen(false);
            }}
            onMouseOver={() => setHighlightedIndex(index)}
            className={`${styles.option} ${isOptionSelected(el) ? styles.selected : ""} ${index === highlightedIndex ? styles.highlighted : ""}`}
            key={el.label}
          >
            {el.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
