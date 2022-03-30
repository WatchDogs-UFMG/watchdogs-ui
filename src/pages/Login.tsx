import {Link, useNavigate} from 'react-router-dom'
import React, { useState} from 'react'

import logoImg from '../assets/logo.png'
import Grid from "@material-ui/core/Grid";
import '../styles/auth.scss'
import Typography from '@mui/material/Typography';
import {
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {useStyles} from "../styles/classes"
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Button from '@mui/material/Button';
import {SocialLogin, LoginWithEmail} from "../services/requests/user";
import Divider from '@mui/material/Divider';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline} from 'react-google-login';
import authConfig from "../auth_config.json"
import GoogleIcon from '@mui/icons-material/Google';
import {useAuth} from "../hooks/useContexts";
import {User} from '../contexts/AuthContext'


export function Login() {
    const classes = useStyles();

    const {user, SingIn} = useAuth();

    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    async function handleEmailLogin() {

        // if (email !== '' && password !== '') {
        //     LoginWithEmail(email, password).then(response => {
        //
        //         if (response.status === 200) {
        //
        //             SingIn(response)
        //             navigate("/home");
        //
        //         } else {
        //
        //         }
        //
        //     }).catch(error => {
        //
        //     })
        // }else {
        //
        // }

        //const response = await LoginWithEmail(email, password)

        const response: User = {
            rfid: "asd",
            username: "gabrielcz",
            avatar: "",
            jwt: "82yu3jd"
        };

        await SingIn(response)
        console.log(user)

        navigate("/home");

    }


    // Login de Usuário por Google
    async function handleGoogleLogin( res: GoogleLoginResponse | GoogleLoginResponseOffline ) {

        // if ("accessToken" in res) {
        //
        //     SocialLogin(res.accessToken).then(response => {
        //
        //         if (response.status === 200) {
        //
        //             SingIn(response)
        //             navigate("/home");
        //
        //         } else {
        //
        //         }
        //
        //     }).catch(error => {
        //
        //     })
        // }


        console.log("asd")
        //navigate("/home");

    }


    async function onFailure() {
        console.log("fail")
    }

    return(
        <React.Fragment>
            <div id="page-auth">
                <Grid
                    container
                    direction="row"
                >
                    <Grid
                        direction="column"
                        item md={7} lg={7}
                    >
                        <Paper className={classes.table} elevation={3}>
                            <Grid
                                alignItems="center"
                                item xs={8} sm={8} md={8} lg={8}
                            >
                                <div>
                                    <img className={classes.mainLogo} src={logoImg} alt="WatchDogs"></img>
                                </div>
                                <Grid>
                                    <Typography variant="h2" style={{fontWeight: 700}}>
                                        Watch Dogs
                                    </Typography>
                                    <Typography variant="h5">
                                        Cuide de seus amigos com eficiência!
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid
                        direction="column"
                        container xs={12} sm={12} md={5} lg={5}
                        className={classes.mainContainer}
                    >
                        <Grid
                            xs={10}
                            style={{flexBasis: "inherit"}}
                        >

                            <GoogleLogin
                                clientId={authConfig.google["ap-id"]}
                                className={classes.google}
                                onSuccess={response => { handleGoogleLogin(response) }}
                                onFailure={() => { onFailure() }}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} className={classes.google}>
                                        <GoogleIcon style={{maxWidth: 20, marginRight: 8}}/>
                                        Entre com a Google
                                    </button>
                                )}
                            />

                            <Grid className={classes.divider}>
                                <Divider  variant="middle" > OU </Divider>
                            </Grid>

                            <TextField
                                type="email"
                                variant="outlined"
                                label="Email"
                                className={classes.input}
                                onChange={e => setEmail(e.target.value)}
                                fullWidth required
                            />
                            <Grid container
                                  direction="row"
                                  alignItems="center"
                                  justifyContent="space-around"
                                  style={{marginBottom: 10}}
                            >
                                <Grid xs={10}>
                                    <TextField
                                        type={showPassword ? "text" : "password"}
                                        variant="outlined"
                                        label="Senha"
                                        className={classes.input}
                                        onChange={e => setPassword(e.target.value)}
                                        required fullWidth
                                    />
                                </Grid>
                                <Grid xs={2} >
                                    <IconButton
                                        className={classes.visibilityIcon}
                                        onClick={() => {setShowPassword(!showPassword)}}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </Grid>
                            </Grid>

                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleEmailLogin}
                                fullWidth
                                className={classes.button}
                            >
                                Entrar
                            </Button>
                            <Typography
                                variant="subtitle1"
                                style={{marginBottom: 30}}
                            >
                                <Link style={{color: "#FF8300", marginTop: 8}} to="/retrivepassword">
                                    Esqueceu sua senha?
                                </Link>
                            </Typography>

                            <Button
                                variant="outlined"
                                size="large"
                                fullWidth
                                href="/newuser"
                                className={classes.button}
                            >
                                Ainda não é cadastrado?
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}