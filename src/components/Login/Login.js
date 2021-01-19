import React, {useContext} from 'react'
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../../index";
import firebase from "firebase/app";

const Login = () => {

    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()

        const {user} = await auth.signInWithPopup(provider)

        console.log('user :', user)
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                justify={"center"}
                alignItems={"center"}
            >
                <Grid
                    style={{width: 400, background: 'lightgray', borderRadius: '5px'}}
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Enter with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login