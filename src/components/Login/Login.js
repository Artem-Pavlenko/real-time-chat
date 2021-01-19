import React from 'react'
import {Box, Button, Container, Grid} from "@material-ui/core";

const Login = () => {
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
                        <Button variant={"outlined"}>Enter with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login