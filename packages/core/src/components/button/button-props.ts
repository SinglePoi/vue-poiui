import type { ExtractPropTypes, PropType } from 'vue';
export type IType = "primary" | "common" | "success" | "danger" | "warning" | "empty";
export const types: any = {
  primary: "blue",
  common: "light",
  success: "emerald",
  danger: "red",
  warning: "orange",
};
export const buttonProps = {
  type: { type: String as PropType<IType>, default: "empty" },
  icon: { type: String },
  circle: { type: Boolean, default: false },
  outline: { type: Boolean, default: false },
  loading: { type: Boolean, default: false }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;