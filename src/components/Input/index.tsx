import {InputHTMLAttributes} from "react";

import "./input.scss"

// Puxa todos os atributos de botoes do HTML pra tipagem
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
    return (
        <input className="basic-input" {...props}>
        </input>
    )
}
