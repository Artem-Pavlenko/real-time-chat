import React, {useContext} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {useAuthState} from "react-firebase-hooks/auth"
import {CHAT_ROUTER, LOGIN_ROUTER} from "../utils/consts"
import {privetRouter, publicRoutes} from "./routes"
import {Context} from "../index"


const AppRouter = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user
        ?
        (<Switch>
            {privetRouter.map(({path, Component}) =>
                <Route key={path} exact path={path} render={() => <Component/>}/>
            )}
            <Redirect to={CHAT_ROUTER}/>
        </Switch>)
        :
        (<Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} exact path={path} render={() => <Component/>}/>
            )}
            <Redirect to={LOGIN_ROUTER}/>
        </Switch>)
}

export default AppRouter