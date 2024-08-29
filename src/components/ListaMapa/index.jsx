import style from './ListaDeMapas.module.css';
import defaultImage from '../../assets/imagem-mapa.png'
import {listarMapa} from '../../api/GerenciadorReq';
import {useState} from 'react';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';

function ListaDeMapas(){
     const [listaMapas, setListaMapas] = useState([]);
    useEffect(()=>{
        listarMapa().then(mapas =>{
            setListaMapas(mapas);
            console.info(JSON.stringify(mapas));
        });
            });
     return (
        <div className={style.container}>
         {listaMapas.map((objeto, index) => (
             <Link key={index} className={style.card}
                 to={`/mapa`} state={{ mapa: objeto }} // Passa o objeto `mapa` como estado
             > 
                <img src={defaultImage} alt={objeto.name} className={style.image}/>
                <p className={style.name}>{objeto.nome}</p>
             </Link>
            ))}
        </div>);
 }

export default ListaDeMapas;
