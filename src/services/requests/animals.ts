import {api} from "../api";


export const GetAllAnimals =  async (token: String) => {

    const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};

    const response = await api.get('animals', {headers: headers})
        .catch( err => {
            return err.data
        })

    return response;
}
