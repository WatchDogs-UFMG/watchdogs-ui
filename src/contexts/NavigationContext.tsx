import {createContext, ReactNode, useEffect, useState} from "react";

type Navbar = {
    open: boolean,
}

type NavContextType = {
    navbar: Navbar | undefined,
    setNavbar: (state: boolean) => void,
}

const NavbarDefault: Navbar = {
    open: true
}

export const NavContext = createContext({} as NavContextType);

type NavContextProviderProps = {
    children: ReactNode;
}

export function NavContextProvider (props: NavContextProviderProps) {

    const [navbar, setOpen] = useState<Navbar>(NavbarDefault);

    function setNavbar (state: boolean) {

        setOpen({
            open: state
        })

    }

    return (
        <NavContext.Provider value={{navbar, setNavbar}}>
            {props.children}
        </NavContext.Provider>
    );
}