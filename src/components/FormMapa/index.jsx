import style from './FormMapa.module.css';
import PropTypes from 'prop-types'; 
function FormMapa({onChange}){
    return (
            <>
                <h1>Cadastrar Mapa</h1> 
            <label className={style.label}>Nome:
                    <input className={style.input} type='text' required={true} name='nome'  onChange={onChange}/>
                </label>
                <label  className={style.label}>Categoria:
                    <input className={style.input} type='text' name='categoria'  onChange={onChange}/>
                </label>
                <label className={style.label}>Imagem:
                    <input className={style.input }type='file' name='imagem'  onChange={onChange}/>
                </label> 
        </>);
}

FormMapa.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default FormMapa;
