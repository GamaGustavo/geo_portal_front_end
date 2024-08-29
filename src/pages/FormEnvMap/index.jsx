import style from './FormEnvMap.module.css';
import NavBar from '../../components/NavBar';
import { useState } from 'react';
import {enviarShapeFile, cadastrarMapa}  from '../../api/GerenciadorReq.js'

function FormEnvMap() {
    const [mapa, setMapa] = useState({
        id:null,
        nome: '',
        categoria: '',
        imagem: null,
        shapFiles: null,
        documento: null,
    });

     const handleSubmit  = (event) => {
         event.preventDefault();
         cadastrarMapa(mapa.name);
         enviarShapeFile(mapa.shapFiles);
         alert(JSON.stringify(mapa));
     }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;
        setMapa(values => ({...values, [name]: value}));
    } 


    return (
        <>
            <NavBar/>
            <section className={style.formulario} >
                <h1>Cadastrar Mapa</h1>
                <form onSubmit={handleSubmit}>
                    <label>Nome:
                        <input type='text' name='nome' value={mapa.nome} onChange={handleChange}/>
                    </label>
                    <label>Categoria:
                        <input type='text' name='categoria' value={mapa.categoria} onChange={handleChange}/>
                    </label>
                    <label>Imagem:
                        <input type='file' name='imagem' value={mapa.imagem } onChange={handleChange}/>
                    </label>
                    <label>ShapFiles:
                        <input type='file' name='shapFiles'  onChange={handleChange}/>
                    </label>
                    <label>Documento:
                        <input type='file' name='Documento' value={mapa.documento } onChange={handleChange}/>
                    </label>
                    <div className={style.botoes}>
                        <button onClick={()=> setMapa({})} name='cancelar'>Cancelar</button>
                        <input type='submit' value='Enviar'/>
                    </div>    
                </form>
                </section>
        </>
    );
    
}

export default FormEnvMap;
