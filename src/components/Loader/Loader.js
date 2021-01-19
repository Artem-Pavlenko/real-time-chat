import React from 'react'
import {CircularProgress, Container, Grid} from "@material-ui/core";

const Loader = () => {
    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                justify={"center"}
                alignItems={"center"}
            >
                <Grid container alignItems={"center"} direction={"column"}>
                    <CircularProgress/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Loader