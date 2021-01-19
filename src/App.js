import './App.css'
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AppRouter/>
    </div>
  )
}

export default App
