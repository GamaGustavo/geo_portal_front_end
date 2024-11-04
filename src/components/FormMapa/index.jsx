import style from './FormMapa.module.css';
import {useEffect, useState} from 'react';
import Select from 'react-select';
import {useFormContext} from '../FormContext/useFormContext';
import {listarCategorias} from '../../api/GerenciadorReq'

function FormMapa() {

    const {formData, updateFormData} = useFormContext();
    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState(formData.listarCategorias.map(cat => ({
        label: cat.nome,
        value: cat.id,
    })));
    const [categoriasOptions, setCategoriasOptions] = useState([]);

    useEffect(() => {
        listarCategorias().then((listCat) => {
            const newCats = listCat.map(cat => ({
                label: cat.nome,
                value: cat.id,
            }));
            setCategoriasOptions(newCats);
        });
    }, []);

    const handleOnChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        updateFormData(name, value);
    }

    const handleCategoryChange = (selectedOptions) => {
        setCategoriasSelecionadas(selectedOptions);
        updateFormData('listarCategorias', selectedOptions.map(option => ({id: option.value, nome: option.label})));
    };


    return (
        <>
            <h1>Cadastrar Mapa</h1>
            <label className={style.label}>Nome:
                <input className={style.input} type='text' value={formData.nome} required={true}
                    name='nome' onChange={handleOnChange} />
            </label>
            <label className={style.label}>
                Selecione as categorias que se aplicam ao mapa:
                <Select className={style.select} isMulti options={categoriasOptions} value={categoriasSelecionadas} onChange={handleCategoryChange} />
            </label>
            <label className={style.label}>Imagem:
                <input className={style.inputImage} type='file' name='imagem' onChange={handleOnChange} />
           </label>
        </>);
}


export default FormMapa;
