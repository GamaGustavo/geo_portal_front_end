import BarraDeBusca from "../../components/BarraDeBusca";
import NavBar from "../../components/NavBar";
import ListaCategoria from "../../components/ListaCategoria";
import {useState} from 'react';

function Categoria() {
    const [textoDaBusca, setTextoDaBusca] = useState('');
    function  onChangeHendler(event){
        setTextoDaBusca(event.target.value);
    }
    const onSubmitHendler = () => alert(textoDaBusca);
    return(
        <>
            <NavBar/>
            <BarraDeBusca onChange={onChangeHendler} onSubmit={onSubmitHendler}/>

            <ListaCategoria/>
        </>
           );
}

export default Categoria;
