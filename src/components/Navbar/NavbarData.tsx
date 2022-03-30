import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi"

export const NavbarData = [
    // {
    //     title: "",
    //     path: '/',
    //     icon: <img src={logoImg} alt="WatchDogs"></img>,
    //     cName: 'nav-logo'
    // },
    {
        title: "Início",
        path: '/home',
        icon: <GiIcons.GiDogHouse/>,
        cName: 'nav-text'
    },
    {
        title: "Animais",
        path: '/animals',
        icon: <FaIcons.FaDog/>,
        cName: 'nav-text'
    },
    {
        title: "Postos",
        path: '/feeders',
        icon: <GiIcons.GiDogBowl/>,
        cName: 'nav-text'
    },
    {
        title: "Ajuda",
        path: '/help',
        icon: <GiIcons.GiJumpingDog/>,
        cName: 'nav-text'
    },
]