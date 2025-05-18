import {Route, Routes} from 'react-router-dom';
import Home from "../pages/Home/index.jsx";
import NavAndPage from "../components/Wrappers/NavAndPage/index.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<NavAndPage/>}>
                <Route path={`/`} element={<Home/>}/>
            </Route>
        </Routes>
    );
}

export default AppRoutes;
