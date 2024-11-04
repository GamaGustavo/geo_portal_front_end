import {MultiStepForm,FormMapa, FormPontoTempo, Loading, NavBar , useFormContext} from '../../components';
/*
import {useFormContext} from '../../components/FormContext/useFormContext.js'
import MultiStepForm from '../../components/MultiStepForm'
import FormMapa from '../../components/FormMapa'
import FormPontoTempo from '../../components/FormPontoTempo'
import Loading from '../../components/Loading'
import NavBar from '../../components/NavBar/index.jsx'*/
import {enviarShapeFiles, enviarPontoTempo, enviarMapa} from '../../api/GerenciadorReq.js';
import {useState} from 'react'


function FormEnvMap() {

    const {formData} = useFormContext()
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const pontoTempo = formData.listPontoTempo[0];
        const shapes = pontoTempo.listaShapeFile;
        enviarShapeFiles(shapes).then((shapesCad) => {
            const pontoTempoShapeFiles = shapesCad.map(value => (
                {
                    shapeFileOrdem: value.id,
                    shapeFile: value
                }));
            const novoPontoTempo = {
                nome: pontoTempo.nome,
                data: pontoTempo.data,
                pontoTempoShapeFiles: pontoTempoShapeFiles
            };
            enviarPontoTempo(novoPontoTempo).then((pontoT) => {
                const mapa = {
                    nome: formData.nome,
                    categorias: formData.categorias,
                    pontoTempos: [pontoT]
                }
                enviarMapa(mapa).then((result) => {
                    setLoading(false);
                    alert(result);

                })

            });
        });



    }

    const listaEtapas = [
        <FormMapa key='etapa1' />,
        <FormPontoTempo key='etapa2' />
    ]

    return (
        <>
            <NavBar />
            {loading && <Loading />}
            <MultiStepForm onSubmit={handleSubmit} listaEtapas={listaEtapas} />
        </>
    )
}



export default FormEnvMap;
