import style from './FormEnvMap.module.css';
import NavBar from '../../components/NavBar';
import FormSwitch from '../../components/FormSwitch';
import { useEffect, useState } from 'react';
import {enviarShapeFile, cadastrarMapa, listarCategorias}  from '../../api/GerenciadorReq.js'
import PropTypes  from 'prop-types'; 

 
function FormEnvMap() {
    const [pagina, setPagina] = useState(0);

    const [mapa, setMapa] = useState({
        id:null,
        nome: '',
        categorias: [],
        imagem: null,
        shapFiles: null,
        documento: null,
    });

    const [fim, setFim] = useState(false);

    const handleSubmit  = (event) => {
         event.preventDefault();
         if(fim){
             mapa.categorias = categoriasSelecionadas.map(slecat => ({id: slecat.value , nome: slecat.label}));
         cadastrarMapa(mapa.nome);
         enviarShapeFile(mapa.shapFiles);       
        }else{
             const novaPagina = pagina + 1;
             setPagina(novaPagina);
             setFim(pagina >= 1);
         }
     }
    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
    const [categoriasOptions, setCategoriasOptions] = useState([]);

    useEffect(()=>{
        listarCategorias().then(categoria => {
            const categoriasConvertidas = categoria.map(cat => ({
                value: cat.id,
                label: cat.nome
            }));
            setCategoriasOptions(categoriasConvertidas);            
        });
            });

  const handleChange2 = (selectedOptions) => {
    setCategoriasSelecionadas(selectedOptions);
  };


      
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;
        setMapa(values => ({...values, [name]: value}));
    } 
    return <Form fim={fim} pagina={pagina} onSubmit={handleSubmit} onChange={handleChange} setMapa={setMapa}
categoriasOptions={categoriasOptions} categoriasSelecionadas={categoriasSelecionadas} handleChange={handleChange2} 

        />;
        
}


function Form({onSubmit, fim, setMapa, onChange, pagina, categoriasOptions, categoriasSelecionadas, handleChange} ) {
    return (
        <>
            <NavBar/>
            <section className={style.formulario} >
               <form onSubmit={onSubmit}>
                   <FormSwitch onChange={onChange} pagina={pagina} 
                   categoriasOptions={categoriasOptions} categoriasSelecionadas={categoriasSelecionadas} 
                       handleChange={handleChange} 
                   />
                    <div className={style.botoes}>
                        <button onClick={()=> setMapa({})}   name='cancelar'>Cancelar</button>
                        {fim ? <input type='submit' value='Enviar'/> : <input type='submit' value='Proxímo'/>}
                    </div>    
                </form>
                </section>
        </>
    );
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    fim: PropTypes.bool.isRequired,
    setMapa: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    pagina: PropTypes.number.isRequired,
    categoriasOptions: PropTypes.array,
    categoriasSelecionadas: PropTypes.array,
    handleChange: PropTypes.func,
}

export default FormEnvMap;
