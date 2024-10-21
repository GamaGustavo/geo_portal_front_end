import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home'; 
import FormEnvMap from './pages/FormEnvMap';
import Mapa from "./pages/Mapa";
import Categoria from './pages/Categoria'
function AppRoutes(){
    return (
        <BrowserRouter>
             <Routes>
                 <Route path='/' element={<Home />}></Route>
                 <Route path='/perfil' element={<Home/>}></Route>
                 <Route path='/linha_tempo' element={<Home/>}></Route>
                 <Route path="/cadastro_mapa" element={<FormEnvMap/>}/>
                 <Route path="/mapa" element={<Mapa/>}/>
                 <Route path="/categoria" element={<Categoria/>}/>
             </Routes>
        </BrowserRouter>);
}

export default  AppRoutes;
