export interface IButtonProps {
  variable: "outline" | "fill";
  type?: "button" | "submit";
  isDisabled?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}
