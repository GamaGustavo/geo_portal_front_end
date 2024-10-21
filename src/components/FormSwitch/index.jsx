import PropTypes from 'prop-types';
import FormMapa from '../FormMapa'
import FormPontoTempo from '../FormPontoTempo';
function  FormSwitch({pagina, onChange}) {
        switch (pagina) {
            case 0: 
              return <FormMapa onChange={onChange}/>;
             case 1:
              return <FormPontoTempo onChange={onChange}/>;       
              default:
            return null;     
        }
    }
FormSwitch.propTypes = {
    pagina: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default FormSwitch;
