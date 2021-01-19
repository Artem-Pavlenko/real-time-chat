import React, {useContext, useState} from 'react'
import {Context} from "../../index"
import {useAuthState} from "react-firebase-hooks/auth"
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core"
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "../Loader/Loader";
import firebase from "firebase/app";

const Chat = () => {

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    const [value, setValue] = useState('')

    messages && console.log('avatar : ', messages[0].photoURL)
    const send = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) return <Loader/>

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                justify={"center"}
                alignItems={"center"}
            >
                <div style={{
                    width: '80%',
                    height: '70vh',
                    border: '1px solid lightgray',
                    borderRadius: '5px',
                    overflowY: 'auto',
                    marginTop: '5px'
                }}>
                    {messages.map( m =>
                        <div style={{
                            margin: 10,
                            border: user.uid === m.uid ? '2px solid green' : '1px solid blue',
                            marginLeft: user.uid === m.uid ? 'auto' : '10px',
                            borderRadius: '5px',
                            width: 'fit-content',
                            padding: 5
                        }}>
                            <Grid container>
                                <Avatar src={m.photoURL}/>
                                <div>{m.displayName}</div>
                            </Grid>
                            <div>
                                {m.text}
                            </div>
                        </div>)}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: '80%'}}
                >
                    <TextField
                        fullWidth
                        value={value}
                        onChange={(e) => setValue(e.currentTarget.value)}
                        variant={"outlined"}
                        rowsMax={2}
                    />
                    <Button onClick={send} color={"primary"} variant={"outlined"}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat