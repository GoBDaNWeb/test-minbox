import { FC, PropsWithChildren } from "react";

import { IButtonProps } from "../types/button.interface";

import styles from "./styles.module.sass";

const Button: FC<PropsWithChildren<IButtonProps>> = ({
  variable,
  onClick,
  type = "button",
  isDisabled,
  isActive,
  children,
}) => {
  const buttonClass = `${styles.button} ${styles[variable]} ${
    isActive ? styles.active : ""
  }`;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={buttonClass}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
