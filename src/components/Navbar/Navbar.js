import React from 'react'
import {NavLink} from 'react-router-dom'
import {AppBar, Button, Grid, Toolbar} from "@material-ui/core"
import {LOGIN_ROUTER} from "../../utils/consts"

const Navbar = () => {

    const user = false

    return (
        <AppBar position="static" color={'secondary'}>
            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}>
                    {user
                        ? <Button variant={"outlined"}>Logout</Button>
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