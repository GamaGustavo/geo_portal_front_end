import PropTypes from "prop-types";
import style from "./BotoesAtivacao.module.css";

function BotoesAtivacao({botoes}) {
    return (
        <div className={style.container}  >
            {botoes.map((objeto, index) => (
                <div key={index} className={style.switch_area} >  
                    <h3>{objeto.titulo}</h3>
                    <label  className={style.switch} onChange={objeto.onSelect} >
                        <input type='checkbox'/>
                        <span className={` ${style.slider} ${style.round}`}></span>
                    </label>
                </div> 
            ))}
        </div>);
}


BotoesAtivacao.propTypes = {
    botoes: PropTypes.array,
}


export default BotoesAtivacao;


