import style from './FormEnvCategoria.module.css'
import { useState } from "react"
import NavBar from '../../components/NavBar'
import {cadastrarCategoria} from '../../api/GerenciadorReq.js'
import {Link, useNavigate} from 'react-router-dom'

export default function FormEnvCategoria() {
    const [categoria, setCategoria] = useState({ nome:''})
    const navigate = useNavigate();
    const onChangeHendler = (event) =>{
        event.preventDefault();
        setCategoria({nome: event.target.value})
        }
     const  onSubmitHandler = async (event) => {
        event.preventDefault();
         try{
             const resposta = await cadastrarCategoria(categoria);   
             if(resposta.id){
                 alert('A categoria foi cadastrada com sucesso!');
                 navigate('/categoria');
             }else{
                 alert('A categoria não pode ser cadastrada!');
             }
         }catch(err){
             alert('A categoria não pode ser cadastrada!');
             err;
         }
    }

    return (<>
        <NavBar/>
        <form onSubmit={onSubmitHandler} className={style.formulario}>
            <h1>Cadastrar Categoria</h1>
            <label className={style.label}>Nome:
                <input className={style.input} type='text' required={true} name='nome'  onChange={onChangeHendler}/>
            </label>
                <div className={style.botoes}>
                    <input type='submit' value='Enviar' className={style.enviar} />
                    <Link className={style.button} to='/categoria'>Cancelar</Link>
                </div>
        </form>
                </>);
}
