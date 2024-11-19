import PropTypes from "prop-types";
import style from "./BotoesAtivacao.module.css";
import {useState} from "react";

function BotoesAtivacao({botoes}) {
    const [checkedStates, setCheckedStates] = useState(
        botoes.map(() => false) // Inicializa o estado de cada botão como `false`
    );

    const handleChange = (index, handlerOnChange) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !checkedStates[index]; // Inverte o estado do checkbox
        setCheckedStates(newCheckedStates); // Atualiza o estado
        handlerOnChange(newCheckedStates[index]); // Chama a função passada no objeto
    };
    return (
        <div className={style.container}  >
            {botoes.map((objeto, index) => (
                <div key={index} className={style.switch_area} >
                    <h3>{objeto.titulo}</h3>
                    <label className={style.switch}>
                        <input type='checkbox'
                            checked={checkedStates[index] || false} // Garante que `checked` seja sempre booleano
                            onChange={() => handleChange(index, objeto.handlerOnChange)} />
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


