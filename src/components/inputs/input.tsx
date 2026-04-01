import type { InputProps } from "../../types/input";

export default function Input({
  label,
  placeholder,
  style,
  type,
  labelStyle,
}: InputProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <label htmlFor={label} className={labelStyle}>
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        className={style}
      />
    </div>
  );
}
