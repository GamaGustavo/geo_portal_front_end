import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home2 from './pages/Home2';
import Home from './pages/Home'; 
import FormEnvMap from './pages/FormEnvMap';
import Mapa from "./pages/Mapa";
import Categoria from './pages/Categoria';
import FormEnvCategoria from "./pages/FormEnvCategoria";
import FormProvider from "./components/FormContext";
import LinhaDoTempo from './pages/LinhaDoTempo';
function AppRoutes(){
    return (
        <BrowserRouter>
             <Routes>
                 <Route path='/' element={<Home2 />}></Route>
                 <Route path='/home' element={<Home />}></Route>
                 <Route path='/perfil' element={<Home/>}></Route>
                 <Route path='/home2' element={<Home2/>}></Route>
                 <Route path="/cadastro_mapa" element={<FormProvider> <FormEnvMap/></FormProvider> }/>
                 <Route path="/mapa" element={<Mapa/>}/>
                 <Route path="/categoria" element={<Categoria/>}/>
                 <Route path="/categoria/cadastro" element={<FormEnvCategoria/>}/>
                 <Route path="/linha_tempo" element={<LinhaDoTempo/>}/>
             </Routes>
        </BrowserRouter>);
}

export default  AppRoutes;
