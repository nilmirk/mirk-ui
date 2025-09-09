import { Color, type BaseProps } from "./base";
interface InputTextProps extends BaseProps {
    color?: Color;
    outline?: boolean;
    name: string;
    required?: boolean;
    pattern?: string;
}
declare const InputText: React.FC<InputTextProps>;
interface InputProps extends BaseProps {
    color?: Color;
    outline?: boolean;
    name: string;
    value: string;
    required?: boolean;
}
declare const Checkbox: React.FC<InputProps>;
declare const Radio: React.FC<InputProps>;
interface SwitchProps extends InputProps {
    type?: "checkbox" | "radio";
}
declare const Switch: React.FC<SwitchProps>;
export { InputText, Checkbox, Radio, Switch };
