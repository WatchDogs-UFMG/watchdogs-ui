import {ButtonHTMLAttributes} from "react";

import "./button.scss"

// Puxa todos os atributos de botoes do HTML pra tipagem
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props}>
        </button>
    )
}
