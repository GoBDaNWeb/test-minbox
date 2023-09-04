import { FC } from "react";
import { IInputProps } from "../types/input.interface";

import styles from "./styles.module.sass";

const Input: FC<IInputProps> = ({ id, required, placeholder, register }) => {
  return (
    <input
      {...register(id, { required })}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default Input;
