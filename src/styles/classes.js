import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    aside: {

    },
    content:{

    },
    mainContainer: {
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
    },
    table:{
        background: "#FF8300",
        color: "white",
        height: "100vh",
        borderRadius: 0,
        overflowX: "auto",
        textAlign: "left",
    },
    mainLogo: {
        maxWidth: 320,
        margin: 50
    },
    input: {
        color: "grey",
        marginBottom: 15
    },
    button: {
        fontWeight: 800,
        borderRadius: 10,
        height: 40,
    },
    divider: {
        color: "grey",
        marginTop: 30,
        marginBottom: 30,
    },
    visibilityIcon: {
        border: "transparent"
    },
    google: {
        height: 40,
        borderRadius: 4,
        fontWeight: 500,
        background: "#ea4335",
        border: "0",
        color: "white",
        cursor: "pointer",
        padding: "8px 22px",
        width: "100%",
        minWidth: 64,
        boxShadow: "rgb(0 0 0 / 24%) 0px 2px 2px 0px",
        hoverOpacity: "0.9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    navbarItem: {
        height: 60,
    }
})