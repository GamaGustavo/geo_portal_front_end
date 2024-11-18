import PropTypes from 'prop-types';
import style from './SuccessModal.module.css';

function SuccessModal({onClose}) {
    return (
        <div className={style.modal_overlay}>
            <div className={style.modal_content}>
                <div className={style.modal_icon}>
                    <span>&#10003;</span>
                </div>
                <h2>Sucesso!</h2>
                <p>Operação realizada com sucesso</p>
                <button className={style.modal_button} onClick={onClose}>OK</button>
            </div>
        </div>
    );
}

SuccessModal.propTypes = {
    onClose: PropTypes.func
}

export default SuccessModal;

