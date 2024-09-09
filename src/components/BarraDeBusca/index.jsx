import style from './BarraDeBusca.module.css';
import PropTypes from 'prop-types'; // ES6


function  BarraDeBusca({onChange, onSubmit}){

    return (
        <>
            <form className={style.form} onSubmit={onSubmit} >
                <input 
                    className={style.input}
                    type="text"
                    name="search"
                    placeholder="Pesquisar.." 
                    onChange={onChange}/>
                <input className={style.pesquisar} type='submit'  value='Pesquisar'  />
            </form>
        </>);
}

BarraDeBusca.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}


export default BarraDeBusca;

