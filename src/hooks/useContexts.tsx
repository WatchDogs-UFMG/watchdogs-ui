import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import {NavContext} from "../contexts/NavigationContext";
import {AnimalContext} from "../contexts/AnimalsContext";
import {FeederContext} from "../contexts/FeedersContext";

export function useAuth () {
    const value = useContext(AuthContext);

    return value;
}

export function useNavbar () {
    const value = useContext(NavContext);

    return value;
}

export function useAnimals () {
    const value = useContext(AnimalContext);

    return value;
}

export function useFeeders () {
    const value = useContext(FeederContext);

    return value;
}
