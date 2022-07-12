import { NextComponentType } from "next";

export interface IProps {
  // children prop
  children?: React.ReactNode;
  NextChild: NextComponentType;

  // event handlers
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
