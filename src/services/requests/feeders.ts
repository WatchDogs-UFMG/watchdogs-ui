import {api} from "../api";

export const GetFeeders =  async (token: String) => {

    const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};

    const response = await api.get('feeders', {headers: headers})
        .catch( err => {
            return err.data
        })

    return response;
}
