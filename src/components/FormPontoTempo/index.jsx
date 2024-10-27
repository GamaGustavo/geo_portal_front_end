import {useEffect, useState} from 'react';
import style from './FormPontoTempo.module.css';
import FileUploadForm from '../../components/FileUploadForm';
import {useFormContext} from '../FormContext/useFormContext';

function FormPontoTempo() {

    const {formData, updateFormData} = useFormContext();
    const [pontoTempo, setPontoTempo] = useState(formData.listPontoTempo[0]);
    const handleOnChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setPontoTempo((prevPontoTempo) => ({
            ...prevPontoTempo,
            [name]: value
        }));

        updateFormData('listPontoTempo', [{...pontoTempo, [name]: value}]);
    }

    useEffect(() => {
        if (formData.listPontoTempo.length == 0){
            const list = [{nome: '', data: new Date().toISOString().split('T')[0], listaShapeFile: []}];
            updateFormData('listPontoTempo', list);
        }
    });

    return (<>
        <h1>Cadastrar Ponto Tempo</h1>
        <label className={style.label}>
            Nome:
            <input className={style.input} type='text' value={pontoTempo.nome} required={true} name='nome' onChange={handleOnChange} />
        </label>
        <label className={style.label}>
            Data:
            <input className={style.input_date} type='date' value={pontoTempo.data} required={true} name='data' onChange={handleOnChange} />
        </label>
        <FileUploadForm />

    </>);

}

export default FormPontoTempo;
