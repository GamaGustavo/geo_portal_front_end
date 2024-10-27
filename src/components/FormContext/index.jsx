import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const FormContext = createContext();

const FormProvider = ({children}) => {
    const [formData, setFormData] = useState({
        id: null,
        nome: '',
        imafgem: '',
        listPontoTempo: [],
        listarCategorias: [],
    });

    const updateFormData = (nameData, data) => {
        setFormData((prevData) => ({
            ...prevData,
            [nameData]: data,
        }));
    };

    return (
        <FormContext.Provider value={{formData, updateFormData}}>
            {children}
        </FormContext.Provider>
    );
}

// Adicionando a validação das props com PropTypes
FormProvider.propTypes = {
    children: PropTypes.node.isRequired, // Valida que children é obrigatório
};

export default FormProvider;