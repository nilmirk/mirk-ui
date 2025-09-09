import clsx from "clsx";
import Link from "next/link";
// import styles in your app: import "mirk-ui/dist/styles/main.css";
import { Color, Text, type BaseProps } from "./base";

const Texting: React.FC<BaseProps> = ({
  children,
  text = "body3",
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx({
        [className as string]: className,
        [text]: true,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

interface ButtonProps extends BaseProps {
  click?: () => void;
  color?: Color;
  outline?: boolean;
  icon?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  click,
  text = "button2",
  color = Color.White,
  className,
  outline = false,
  icon = false,
  ...rest
}) => {
  return (
    <div
      className={clsx(text, {
        [className as string]: className,
        [`button-${color}`]: !outline,
        [`button-outline-${color}`]: outline,
        "button-icon": icon,
      })}
      {...rest}
      onClick={click}
    >
      {children}
    </div>
  );
};

interface AProps extends BaseProps {
  color?: Color;
  href?: string;
}
const A: React.FC<AProps> = ({
  children,
  color = Color.White,
  href = "#",
  text = "body3",
  className,
  ...rest
}) => {
  return (
    <Link
      className={clsx({
        [className as string]: className,
        [text]: true,
        [`link-${color}`]: true,
      })}
      {...rest}
      href={href}
    >
      {children}
    </Link>
  );
};

export { Texting, Button, A };