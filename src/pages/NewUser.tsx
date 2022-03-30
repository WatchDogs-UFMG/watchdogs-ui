import {Link, useNavigate} from 'react-router-dom'

import logoImg from '../assets/logo.png'
import googleIcon from '../assets/google-icon.svg'
import Grid from "@material-ui/core/Grid";

import '../styles/auth.scss'
import { Ufmg } from '../components/Ufmg'

import Button from '@mui/material/Button';
import {FormEvent, useContext, useState} from 'react'
import React from 'react'
import {IconButton, Paper} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {useStyles} from "../styles/classes";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import {Stack} from "@mui/material";
import TextField from '@mui/material/TextField';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {AuthContext} from "../contexts/AuthContext";

export type NewUsertype = {
    name: string,
    surname: string,
    email: string,
    password: string,
    birthday?: string,
}

export function NewUser () {
    const classes = useStyles();

    const [newuser, setNewuser] = useState<NewUsertype>();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [birthday, setBirthday] = useState(new Date().toLocaleDateString('pt-br',  {timeZone: "GMT"}));
    const [showPassword, setShowPassword] = useState(false);

    let navigate = useNavigate();

    async function handleCreateAccount() {

        console.log(name + " " + surname + " " + email + " " + password + " " + passwordConf)
        console.log(setBirthday)

        const newuser = {
            name,
            surname,
            email,
            password
        }

        //const response = SingUp(newuser);

        navigate("/home");
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

                            <Typography variant="h6" style={{marginBottom: 20}}>
                                Cadastre-se em nosso sistema:
                            </Typography>

                            <Stack spacing={1} style={{marginBottom: 30}}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    label="Nome"
                                    className={classes.input}
                                    onChange={e => setEmail(e.target.value)}
                                    fullWidth required
                                />
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    label="Sobrenome"
                                    className={classes.input}
                                    onChange={e => setEmail(e.target.value)}
                                    fullWidth required
                                />
                            </Stack>

                            <Stack style={{marginBottom: 30}} spacing={1}>
                                <TextField
                                    type="email"
                                    variant="outlined"
                                    label="Email"
                                    className={classes.input}
                                    onChange={e => setEmail(e.target.value)}
                                    fullWidth required
                                />
                                <TextField
                                    type={showPassword ? "text" : "password"}
                                    variant="outlined"
                                    label="Senha"
                                    className={classes.input}
                                    onChange={e => setPassword(e.target.value)}
                                    required fullWidth
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
                                            label="Confirme sua Senha"
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
                            </Stack>

                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleCreateAccount}
                                fullWidth
                                className={classes.button}
                            >
                                Cadastrar!
                            </Button>

                            <Grid className={classes.divider}>
                                <Divider  variant="middle" />
                            </Grid>

                            <Typography variant={"subtitle1"}>
                                Lembrou que tem uma conta?
                                <Link style={{color: "#FF8300", marginTop: 8}} to="/">
                                    {" Faça o Log In."}
                                </Link>
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}