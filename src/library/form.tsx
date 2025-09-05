"use client";

import { Color, Text, type BaseProps } from "./base";
import { useState } from "react";
import clsx from "clsx";
import "./form.scss";

interface InputTextProps extends BaseProps {
  color?: Color;
  outline?: boolean;
  name: string;
  required?: boolean;
  pattern?: string;
}
const InputText: React.FC<InputTextProps> = ({
  children,
  color = Color.White,
  text = "button2",
  className,
  outline = false,
  name,
  required = false,
  pattern,
  ...rest
}) => {
  const [isValid, setIsValid] = useState(false);

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value === "" ? setIsValid(false) : setIsValid(true);
  };

  return (
    <label
      className={clsx({
        [className as string]: className,
        [text]: true,
        [`input-text-${color}`]: !outline,
        [`input-text-outline${color}`]: outline,
        "input-text-valid": isValid,
      })}
      {...rest}
    >
      <span>{children}</span>
      <div className={`size-saver ${text}`}>i</div>
      <input
        name={name}
        pattern={pattern}
        required={required}
        type="text"
        onChange={change}
      />
    </label>
  );
};

interface InputProps extends BaseProps {
  color?: Color;
  outline?: boolean;
  name: string;
  value: string;
  required?: boolean;
}
const Checkbox: React.FC<InputProps> = ({
  children = "✓",
  color = Color.White,
  className,
  outline = false,
  name,
  value,
  required = false,
  ...rest
}) => {
  return (
    <label
      className={clsx({
        [className as string]: className,
        [`checkbox-${color}`]: !outline,
        [`checkbox-outline-${color}`]: outline,
      })}
      {...rest}
    >
      <span>{children}</span>
      <input name={name} value={value} required={required} type="checkbox" />
    </label>
  );
};
const Radio: React.FC<InputProps> = ({
  color = Color.White,
  className,
  outline = false,
  name,
  value,
  required = false,
  ...rest
}) => {
  return (
    <label
      className={clsx({
        [className as string]: className,
        [`radio-${color}`]: !outline,
        [`radio-outline-${color}`]: outline,
      })}
      {...rest}
    >
      <span></span>
      <input name={name} value={value} required={required} type="radio" />
    </label>
  );
};

interface SwitchProps extends InputProps {
  type?: "checkbox" | "radio";
}
const Switch: React.FC<SwitchProps> = ({
  color = Color.White,
  className,
  outline = false,
  name,
  value,
  type = "checkbox",
  required = false,
  ...rest
}) => {
  return (
    <label
      className={clsx({
        [className as string]: className,
        [`switch-${color}`]: !outline,
        [`switch-outline-${color}`]: outline,
      })}
      {...rest}
    >
      <span></span>
      <input name={name} value={value} required={required} type={type} />
    </label>
  );
};

export { InputText, Checkbox, Radio, Switch };