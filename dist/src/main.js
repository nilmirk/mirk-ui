var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import Link from "next/link";
// import styles in your app: import "mirk-ui/dist/styles/main.css";
import { Color } from "./base";
const Texting = (_a) => {
    var { children, text = "body3", className } = _a, rest = __rest(_a, ["children", "text", "className"]);
    return (_jsx("div", Object.assign({ className: clsx({
            [className]: className,
            [text]: true,
        }) }, rest, { children: children })));
};
const Button = (_a) => {
    var { children, click, text = "button2", color = Color.White, className, outline = false, icon = false } = _a, rest = __rest(_a, ["children", "click", "text", "color", "className", "outline", "icon"]);
    return (_jsx("div", Object.assign({ className: clsx(text, {
            [className]: className,
            [`button-${color}`]: !outline,
            [`button-outline-${color}`]: outline,
            "button-icon": icon,
        }) }, rest, { onClick: click, children: children })));
};
const A = (_a) => {
    var { children, color = Color.White, href = "#", text = "body3", className } = _a, rest = __rest(_a, ["children", "color", "href", "text", "className"]);
    return (_jsx(Link, Object.assign({ className: clsx({
            [className]: className,
            [text]: true,
            [`link-${color}`]: true,
        }) }, rest, { href: href, children: children })));
};
export { Texting, Button, A };
