import style from './FormMapa.module.css';
import PropTypes from 'prop-types'; 
import Select from 'react-select';
function FormMapa({onChange, categoriasOptions, categoriasSelecionadas, handleChange}){
    return (
            <>
                <h1>Cadastrar Mapa</h1> 
            <label className={style.label}>Nome:
                    <input className={style.input} type='text' required={true} name='nome'  onChange={onChange}/>
                </label>
                <label  className={style.label}>
                    <h3>Selecione as categorias que se aplicam ao mapa:</h3>
                    <Select isMulti  options={categoriasOptions} value={categoriasSelecionadas} onChange={handleChange}/>

                </label>
                <label className={style.label}>Imagem:
                    <input className={style.input }type='file' name='imagem'  onChange={onChange}/>
                </label> 
        </>);
}

FormMapa.propTypes = {
    onChange: PropTypes.func.isRequired,
    categoriasOptions: PropTypes.array.isRequired,
    categoriasSelecionadas: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default FormMapa;
