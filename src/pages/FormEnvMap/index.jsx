import {MultiStepForm,FormMapa, FormPontoTempo, Loading, NavBar , useFormContext, SuccessModal  } from '../../components';
import {enviarShapeFiles, enviarPontoTempo, enviarMapa} from '../../api/GerenciadorReq.js';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';


function FormEnvMap() {
    
    const {formData} = useFormContext()
    const [loading, setLoading] = useState(false);
    const [sucesso, setSucesso] = useState(false);
    const navigate = useNavigate();

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
                enviarMapa(mapa).then(() => {
                    setLoading(false);
                    setSucesso(true);
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
            {sucesso && <SuccessModal onClose={()=> navigate('/home')}/>}
            <MultiStepForm onSubmit={handleSubmit} listaEtapas={listaEtapas} />
        </>
    )
}



export default FormEnvMap;
