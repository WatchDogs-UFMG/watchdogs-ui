import {createContext, ReactNode, useEffect, useState} from "react";

export type User = {
    rfid: string,
    username: string,
    avatar: string,
    jwt: string
}

type AutContextType = {
    user: User | undefined,
    SingIn: (usr: User) => Promise<void>,
    SingOut: () => void
}

const UserDefault: User = {
    rfid: "13",
    username: "gabrielcz",
    avatar: "https://blog.cobasi.com.br/wp-content/uploads/2021/03/corgi-cinco-curiosidades-sobre-a-raca-capa.png",
    jwt: "as2jdbh783"
}

export const AuthContext = createContext({} as AutContextType);

type AuthContextProviderProps = {
    children: ReactNode;
}

export function AuthContextProvider (props: AuthContextProviderProps) {

    const [user, setUser] = useState<User>(UserDefault);

    async function SingIn (usr : User) {
        console.log(usr)
        if(usr !== null) {
            setUser({
                rfid: usr.rfid,
                username: usr.username,
                avatar: usr.avatar,
                jwt: usr.jwt
            })
        }
    }

    async function SingOut () {
        setUser({
            rfid: "",
            username: "",
            avatar: "",
            jwt: ""
        })
    }

    // Roda uma vez quando App.js carrega
    // NLW6 - aula 2 (1:19:00)
    useEffect( () => {
        // if(!user){
        //     if(window.location.pathname !== "/") {
        //         window.location.assign("/")
        //     }
        // }

    }, [])

    return (
        <AuthContext.Provider value={{user, SingIn, SingOut}}>
            {props.children}
        </AuthContext.Provider>
    );
}