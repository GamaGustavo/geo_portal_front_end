import {useState} from 'react';
import style from './MultiStepForm.module.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const MultiStepForm = ({onSubmit, listaEtapas}) => {
    const [etapa, setEtapa] = useState(0);

    const proximaEtapa = () => setEtapa(etapa + 1);
    const etapaAnterior = () => setEtapa(etapa - 1);

    const ultimaEtapa = listaEtapas.length - 1;

    return (
        <div>
            <div className={style.container} >{listaEtapas[etapa]}</div>
            <div className={style.botoes}>
                <Link className={`${style.botao} ${style.cancelar}`} to='/'>Cancelar</Link>
                {etapa > 0 && <Link className={`${style.botao} ${style.movimentacao}`} onClick={etapaAnterior}>Voltar</Link>}
                {etapa < ultimaEtapa ? (
                    <Link type='button' className={`${style.botao} ${style.movimentacao}`} onClick={proximaEtapa}>Próximo</Link>) : (
                    <Link className={`${style.botao} ${style.enviar}`} onClick={onSubmit}>Enviar</Link>)}
            </div>
        </div>)
}

MultiStepForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    listaEtapas: PropTypes.array.isRequired,
}

export default MultiStepForm;
