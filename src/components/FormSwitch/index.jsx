import PropTypes from 'prop-types';
import FormMapa from '../FormMapa'
import FormPontoTempo from '../FormPontoTempo';
function  FormSwitch({pagina, onChange, categoriasOptions, categoriasSelecionadas, handleChange }) {
        switch (pagina) {
            case 0: 
              return <FormMapa onChange={onChange} categoriasOptions={categoriasOptions} categoriasSelecionadas={categoriasSelecionadas} handleChange={handleChange} />;
             case 1:
              return <FormPontoTempo onChange={onChange}/>;       
              default:
            return null;     
        }
    }
FormSwitch.propTypes = {
    pagina: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    categoriasOptions: PropTypes.array,
    categoriasSelecionadas: PropTypes.array,
    handleChange: PropTypes.func,
}

export default FormSwitch;
