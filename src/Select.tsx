import React from "react";
import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: any;
};

type MultipleSelectProps = {
  multiple: true;
  value?: SelectOption[];
  onChange: (value: SelectOption[] ) => void;
}

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
}

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps)

export default function Select({
  multiple,
  value,
  onChange,
  options,
}: SelectProps) {
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>Value</span>
      <button className={styles["clear-btn"]}>x</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={styles.options}>
        {options.map((el) => (
          <li className={styles.option} key={el.label}>
            {el.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
