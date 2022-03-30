import { Navbar } from "../components/Navbar/navbar";
import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {IconButton, Paper, TextField} from "@material-ui/core";
import logoImg from "../assets/logo.png";
import Typography from "@mui/material/Typography";
import {GoogleLogin} from "react-google-login";
import authConfig from "../auth_config.json";
import GoogleIcon from "@mui/icons-material/Google";
import Divider from "@mui/material/Divider";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {useStyles} from "../styles/classes";
import {Alert, Box, Chip, Stack} from "@mui/material";
import {GetAllAnimals} from "../services/requests/animals";
import {useAuth} from "../hooks/useContexts";
import {AxiosResponse} from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export function Animais (){
    const classes = useStyles();
    const {user} = useAuth()

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("");


    const animals = async () => {

        const response: AxiosResponse = await GetAllAnimals(user!.jwt);

        if(response != null) {
            if (response.status === 200) {
                handleAlertOpen("Dados recuperados", "success")
                return response.data;
            } else {
                handleAlertOpen("Algo deu errado", "error")
            }
        } else {
            handleAlertOpen("Não há dados para recuperar", "error")
        }

    }

    const handleAlertOpen = (message: string, severity: string) => {
        setAlertOpen(true);
        setAlertMessage(message);
        setAlertSeverity(severity);
    };

    const handleAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    };

    // @ts-ignore
    return(
        <React.Fragment>
            <Box sx={{ display: 'flex' }}>
                <Navbar/>
                <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity={"success"} sx={{ width: '100%' }}>
                        {alertMessage}
                    </Alert>
                </Snackbar>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                   <Grid container
                         direction="row"
                         justifyContent="center"
                         alignItems="flex-start"
                         style={{paddingTop: 80}}
                   >
                       <Grid  xs={5}>
                           <Paper>
                               <Box sx={{ bgcolor: 'background.paper' }}>
                                   <Box sx={{ my: 3, mx: 2 }}>
                                       <Grid container alignItems="center">
                                           <Grid item xs>
                                               <Typography gutterBottom variant="h4" component="div">
                                                   Cachorro
                                               </Typography>
                                           </Grid>
                                       </Grid>
                                       <Typography color="text.secondary" variant="body2">

                                       </Typography>
                                   </Box>
                                   <Divider variant="middle" />
                                   <Box sx={{ m: 2 }}>

                                   </Box>
                                   <Box sx={{ mt: 3, ml: 1, mb: 1 }}>

                                   </Box>
                               </Box>
                           </Paper>
                       </Grid>
                       <Grid  xs={6}>
                       </Grid>
                   </Grid>
                </Box>
            </Box>
        </React.Fragment>
    )
}