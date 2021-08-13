import { SizeType } from "antd/lib/config-provider/SizeContext";
import { ReactNode, MouseEventHandler } from "react";

export type TButton = {
  value?: string
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed"
  size?: SizeType
  shape?: "circle" | "round"
  children?: ReactNode
  icon?: ReactNode | Element
  href?: string
  onClick?: MouseEventHandler<HTMLElement>
}
