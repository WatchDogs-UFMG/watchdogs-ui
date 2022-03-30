import "./ufmg.scss"
import ufmgLogo from '../../assets/LogoUFMG.png'

import {ImgHTMLAttributes} from "react";

// Puxa todos os atributos de botoes do HTML pra tipagem
type ImgProps = ImgHTMLAttributes<HTMLImageElement>;

export function Ufmg(props: ImgProps) {
    return (
        <div className="ufmg-img">
            <a href="https://ufmg.br/" target="_blank" >
                <img  src={ufmgLogo} alt="Logo da UFMG" {...props}></img>
            </a>
        </div>
    )
}
