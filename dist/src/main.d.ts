import { Color, type BaseProps } from "./base";
declare const Texting: React.FC<BaseProps>;
interface ButtonProps extends BaseProps {
    click?: () => void;
    color?: Color;
    outline?: boolean;
    icon?: boolean;
}
declare const Button: React.FC<ButtonProps>;
interface AProps extends BaseProps {
    color?: Color;
    href?: string;
}
declare const A: React.FC<AProps>;
export { Texting, Button, A };
