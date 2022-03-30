import {useState} from 'react'
import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import LogoutIcon from '@mui/icons-material/Logout';

import PetsIcon from '@mui/icons-material/Pets';
import { NavbarData } from "./NavbarData"

import {openedMixin, closedMixin, DrawerHeader, Drawer} from './themes'

import { Ufmg } from "../Ufmg";
import {AppBar, Avatar, Divider, Grid, IconButton, Link, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {useStyles} from "../../styles/classes";
import Button from "@mui/material/Button";
import {deepPurple, grey} from "@mui/material/colors";
import {useAuth, useNavbar} from "../../hooks/useContexts";
import {useNavigate} from "react-router-dom";


export function Navbar (){
    const classes = useStyles();
    const navbarTheme = useTheme();
    let navigate = useNavigate();
    const {user, SingOut} = useAuth();

    const {navbar, setNavbar} = useNavbar();

    if(!user){
        navigate("/");
    }

    async function logout() {
        await SingOut()
        navigate("/")
    }

    return(
        <React.Fragment>
            <CssBaseline />
            <AppBar >
                <Toolbar style={{justifyContent: "end"}}>
                    <Avatar
                        sx={{ bgcolor: deepPurple[500] }}
                        src={user!.avatar ? user!.avatar : ""}
                    >
                        ?
                    </Avatar>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={navbar!.open}>
                <DrawerHeader>
                    <IconButton onClick={() => setNavbar(!navbar!.open)}>
                        {navbar!.open ? <PetsIcon style={{transform: "rotate(-90deg)"}}/> : <PetsIcon style={{transform: "rotate(90deg)"}}/>}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                >
                    <Grid item>
                        <List>
                            {NavbarData.map((item, index) => (
                                <ListItem
                                    component={Link}
                                    button
                                    href={item.path}
                                    key={item.cName}
                                >
                                    <ListItemIcon style={{}}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title}/>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item>
                        <List>
                            <ListItem
                                component={Link}
                                button
                                onClick={async () => await logout()}
                                key={"logout"}
                            >
                                <ListItemIcon style={{}}>
                                    <LogoutIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Sair"}/>
                            </ListItem>
                        </List>

                    </Grid>
                </Grid>
            </Drawer>

        </React.Fragment>
    )
}