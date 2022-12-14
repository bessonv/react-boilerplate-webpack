import React from "react";
import { InputProps } from "./Input.props";
import './Input.styles.scss';

export const Input = ({ hint, ...props }: InputProps): JSX.Element => {
    return (
        <>
            <input className="input" type="text" {...props} />
            {hint && <span className="input__hint">{hint}</span>}
        </>
    )
}
