import './App.css'
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./routes/AppRouter";
import {useContext} from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader/Loader";

function App() {

    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if (loading) return <Loader/>

    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
        </div>
    )
}

export default App
