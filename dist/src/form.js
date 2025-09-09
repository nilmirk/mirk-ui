"use client";
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Color } from "./base";
import { useState } from "react";
import clsx from "clsx";
const InputText = (_a) => {
    var { children, color = Color.White, text = "button2", className, outline = false, name, required = false, pattern } = _a, rest = __rest(_a, ["children", "color", "text", "className", "outline", "name", "required", "pattern"]);
    const [isValid, setIsValid] = useState(false);
    const change = (event) => {
        event.target.value === "" ? setIsValid(false) : setIsValid(true);
    };
    return (_jsxs("label", Object.assign({ className: clsx({
            [className]: className,
            [text]: true,
            [`input-text-${color}`]: !outline,
            [`input-text-outline${color}`]: outline,
            "input-text-valid": isValid,
        }) }, rest, { children: [_jsx("span", { children: children }), _jsx("div", { className: `size-saver ${text}`, children: "i" }), _jsx("input", { name: name, pattern: pattern, required: required, type: "text", onChange: change })] })));
};
const Checkbox = (_a) => {
    var { children = "✓", color = Color.White, className, outline = false, name, value, required = false } = _a, rest = __rest(_a, ["children", "color", "className", "outline", "name", "value", "required"]);
    return (_jsxs("label", Object.assign({ className: clsx({
            [className]: className,
            [`checkbox-${color}`]: !outline,
            [`checkbox-outline-${color}`]: outline,
        }) }, rest, { children: [_jsx("span", { children: children }), _jsx("input", { name: name, value: value, required: required, type: "checkbox" })] })));
};
const Radio = (_a) => {
    var { color = Color.White, className, outline = false, name, value, required = false } = _a, rest = __rest(_a, ["color", "className", "outline", "name", "value", "required"]);
    return (_jsxs("label", Object.assign({ className: clsx({
            [className]: className,
            [`radio-${color}`]: !outline,
            [`radio-outline-${color}`]: outline,
        }) }, rest, { children: [_jsx("span", {}), _jsx("input", { name: name, value: value, required: required, type: "radio" })] })));
};
const Switch = (_a) => {
    var { color = Color.White, className, outline = false, name, value, type = "checkbox", required = false } = _a, rest = __rest(_a, ["color", "className", "outline", "name", "value", "type", "required"]);
    return (_jsxs("label", Object.assign({ className: clsx({
            [className]: className,
            [`switch-${color}`]: !outline,
            [`switch-outline-${color}`]: outline,
        }) }, rest, { children: [_jsx("span", {}), _jsx("input", { name: name, value: value, required: required, type: type })] })));
};
export { InputText, Checkbox, Radio, Switch };
