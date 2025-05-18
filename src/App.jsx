import {BrowserRouter} from "react-router-dom";
import Routes from "./routes/index.jsx";

const App = () => {
    return (
        <BrowserRouter basename={`/`}>
            <div className="app">
                <Routes/>
            </div>
        </BrowserRouter>
    )
}

export default App;
