import {CHAT_ROUTER, LOGIN_ROUTER} from "../utils/consts";
import Login from "../components/Login/Login";
import Chat from "../components/Chat/Chat";

export const publicRoutes = [
    {
        path: LOGIN_ROUTER,
        Component: Login
    }
]

export const privetRouter = [
    {
        path: CHAT_ROUTER,
        Component: Chat
    }
]