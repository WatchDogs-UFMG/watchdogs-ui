import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Login} from './pages/Login'
import {Home} from './pages/Home'
import {NewUser} from './pages/NewUser'
import { Animais } from './pages/Animais'
import {Feeders} from './pages/Feeders'

import React, { Component } from 'react';

import './styles/global.scss'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {AuthContextProvider} from './contexts/AuthContext'
import {NavContextProvider} from "./contexts/NavigationContext";


const theme = createTheme({
    palette: {
        primary: {
            main: '#FF8300',
            contrastText: '#fff'
        }
    },
    typography: {
        fontFamily: [
            'Rubik',
            'sans-serif'
        ].join(',')
    }
})

export default function App(){

    return (
        <ThemeProvider theme={theme}>
            <AuthContextProvider>
                <NavContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login/>} />
                            <Route path="newuser/" element={<NewUser/>} />
                            <Route path="home/" element={<Home/>} />
                            <Route path="animals/" element={<Animais/>} />
                            <Route path="feeders/" element={<Feeders/>} />
                        </Routes>
                    </BrowserRouter>
                </NavContextProvider>
            </AuthContextProvider>
        </ThemeProvider>
    );
}


