import {useFormContext} from '../../components/FormContext/useFormContext.js'
import MultiStepForm from '../../components/MultiStepForm'
import FormMapa from '../../components/FormMapa'
import FormPontoTempo from '../../components/FormPontoTempo'
import NavBar from '../../components/NavBar/index.jsx'


function FormEnvMap() {

    const {formData} = useFormContext()

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(JSON.stringify(formData))
    }

    const listaEtapas = [
        <FormMapa key='etapa1' />,
        <FormPontoTempo key='etapa2' />
    ]

    return (
        <>
            <NavBar />
            <MultiStepForm onSubmit={handleSubmit} listaEtapas={listaEtapas} />
        </>
    )
}



export default FormEnvMap;
