import '../styles/home.scss'
import { Navbar } from '../components/Navbar/navbar'
import {HomeButton} from '../components/HomeButton'
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi"
import React, {useContext, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {useAuth, useNavbar} from "../hooks/useContexts";
import {Box, ImageList, ImageListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import {HomeImages} from "../assets/homeImages/images";



export function Home () {

    let navigate = useNavigate();
    const {user} = useAuth();

    return(
        <React.Fragment>
            <Box sx={{ display: 'flex' }}>
                <Navbar/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                        {HomeImages.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Box>
        </React.Fragment>
    )
}