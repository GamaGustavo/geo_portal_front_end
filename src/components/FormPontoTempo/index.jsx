import { useState} from 'react';
import style from './FormPontoTempo.module.css';
import {useFormContext} from '../FormContext/useFormContext';

function FormPontoTempo() {


    const {formData, updateFormData} = useFormContext();
    const [pontoTempo, setPontoTempo] = useState(formData.listPontoTempo[0]);

      // Atualiza campos de texto (`nome` e `data`) no estado e no contexto
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        const updatedPontoTempo = {
            ...pontoTempo,
            [name]: value,
        };
        
        // Atualiza o estado local e o contexto
        setPontoTempo(updatedPontoTempo);
        updateFormData('listPontoTempo', [updatedPontoTempo]);
    };


    // Atualiza os arquivos de `listaShapeFile`
    const handleOnChangeFile = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const updatedPontoTempo = {
            ...pontoTempo,
            listaShapeFile: [...pontoTempo.listaShapeFile, ...selectedFiles],
        };
        
        // Atualiza o estado local e o contexto
        setPontoTempo(updatedPontoTempo);
        updateFormData('listPontoTempo', [updatedPontoTempo]);
    };

    return (<>
         <h1>Cadastrar Ponto Tempo</h1>
            <label className={style.label}>
                Nome:
                <input
                    className={style.input}
                    type='text'
                    value={pontoTempo.nome}
                    required
                    name='nome'
                    onChange={handleOnChange}
                />
            </label>
            <label className={style.label}>
                Data:
                <input
                    className={style.input_date}
                    type='date'
                    value={pontoTempo.data}
                    required
                    name='data'
                    onChange={handleOnChange}
                />
            </label>
        <label className={style.label}>
            Descrição:
            <textarea value={pontoTempo.descricao} name='descricao' onChange={handleOnChange} rows={4} maxLength={1000}  ></textarea>

        </label>
            <label className={style.label}>
                Upload de Arquivos:
                <input
                    className={style.input_file}
                    type='file'
                    name='shapeFile'
                    onChange={handleOnChangeFile}
                    multiple
                />
            </label>

    </>);

}

export default FormPontoTempo;
