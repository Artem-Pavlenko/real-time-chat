import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {AppBar, Button, Grid, Toolbar} from "@material-ui/core"
import {LOGIN_ROUTER} from "../../utils/consts"
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar position="static" color={'secondary'}>
            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}>
                    {user
                        ? <Button onClick={() => auth.signOut()} variant={"outlined"}>Logout</Button>
                        : <NavLink to={LOGIN_ROUTER}>
                            <Button variant={"outlined"}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar