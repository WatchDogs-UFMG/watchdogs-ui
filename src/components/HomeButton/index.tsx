import {ButtonHTMLAttributes} from "react";

import "./home-button.scss"

// Puxa todos os atributos de botoes do HTML pra tipagem
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function HomeButton(props: ButtonProps) {
    return (
        <button className="home-button" {...props}>
        </button>
    )
}
