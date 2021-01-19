import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {privetRouter, publicRoutes} from "./routes";
import {CHAT_ROUTER, LOGIN_ROUTER} from "../utils/consts";


const AppRouter = () => {

    const user = true

    return user
        ?
        (<Switch>
            {privetRouter.map(({path, Component}) =>
                <Route exact path={path} render={() => <Component/>}/>
            )}
            <Redirect to={CHAT_ROUTER}/>
        </Switch>)
        :
        (<Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route exact path={path} render={() => <Component/>}/>
            )}
            <Redirect to={LOGIN_ROUTER}/>
        </Switch>)
}

export default AppRouter