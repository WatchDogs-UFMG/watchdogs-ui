import {createContext, ReactNode, useState} from "react";
import {AxiosResponse} from "axios";

/**
 * Igual ao DTO definido no back
 */
export type Animal = {
    rfid: string,
    name: string,
}

type AnimalContextType = {
    animals: Animal[] | undefined,
    setAnimalsData: (data: Animal[]) => Promise<void>,
}

export const AnimalContext = createContext({} as AnimalContextType);

type AnimalContextProviderProps = {
    children: ReactNode;
}

export function AnimalContextProvider (props: AnimalContextProviderProps) {

    const [animals, setAnimal] = useState<Animal[]>([]);

    async function setAnimalsData (data : Animal[]) {
        data.map( (a) => {
            setAnimal([...animals, a])
        })
    }


    return (
        <AnimalContext.Provider value={{animals, setAnimalsData}}>
            {props.children}
        </AnimalContext.Provider>
    );
}