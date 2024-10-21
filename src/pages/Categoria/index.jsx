import style from './Categoria.module.css';
import BarraDeBusca from "../../components/BarraDeBusca";
import NavBar from "../../components/NavBar";
import ListaCategoria from "../../components/ListaCategoria";
import {useState} from 'react';
import { Link } from "react-router-dom";

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
            <div className={style.container_button}>
                <Link className={style.link} to='/categoria/cadastro'>Cadastrar Categoria</Link>
            </div>
            <ListaCategoria/>
        </>
           );
}

export default Categoria;
