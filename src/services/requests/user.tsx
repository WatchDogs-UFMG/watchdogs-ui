import {api} from "../api";

export const LoginWithEmail = async (email: String, password: String) => {
    const user = {username: email, password: password};
    const headers = {'Content-Type': 'application/json'};
    console.log("a")
    const response = await api.post('login', JSON.stringify(user), {headers: headers})
        .then( res => {
            console.log("Sucesso")
           return res
        })
        .catch( err => {
            console.log("Erro")
            return err
        })
    return response;
}


export const SocialLogin = async (googleToken: String) => {

    const loginAttempt = { accesstoken: googleToken};
    const headers = {'Content-Type': 'application/json'};

    const response = await api.post('loginsocial', JSON.stringify(loginAttempt), {headers: headers})


    return response;
}

export const GetNewToken = async (token: String, email: String) => {
    const request = { accesstoken: token, username: email };
    const headers = {'Content-Type': 'application/json'};

    const response = await api.post('newtoken', JSON.stringify(request), {headers: headers})

    return response;
}
