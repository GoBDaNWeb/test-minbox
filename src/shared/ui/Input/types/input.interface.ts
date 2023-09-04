import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IInputProps {
  id: string;
  required?: boolean;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
}
