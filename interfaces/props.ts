import type { PropsWithChildren } from "react";

export type TWithChildren<T = {}> = T & PropsWithChildren<{}>;

export interface IProps {
  // children prop
  children: React.ReactNode;

  // event handlers
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
