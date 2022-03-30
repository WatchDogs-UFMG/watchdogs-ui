import {createContext, ReactNode, useState} from "react";
import {AxiosResponse} from "axios";

/**
 * Igual ao DTO definido no back
 */
export type Feeder = {
    rfid: string,
    status: string,
}

type FeederContextType = {
    feeders: Feeder[] | undefined,
    setFeedersData: (data: Feeder[]) => Promise<void>,
}

export const FeederContext = createContext({} as FeederContextType);

type FeederContextProviderProps = {
    children: ReactNode;
}

export function FeederContextProvider (props: FeederContextProviderProps) {

    const [feeders, setFeeder] = useState<Feeder[]>([]);

    async function setFeedersData (data : Feeder[]) {
        data.map( (f) => {
            setFeeder([...feeders, f])
        })
    }


    return (
        <FeederContext.Provider value={{feeders, setFeedersData}}>
            {props.children}
        </FeederContext.Provider>
    );
}