import NavBar from '../../components/NavBar';
import ListaDeMapas from '../../components/ListaMapa'
import BarraDeBusca from '../../components/BarraDeBusca'
import {useState} from 'react';
function Home(){
    const [textoDaBusca, setTextoDaBusca] = useState('');
    function  onChangeHendler(event){
        setTextoDaBusca(event.target.value);
    }
    const onSubmitHendler = () => alert(textoDaBusca);
    return(
     <>
         <NavBar/>
         <BarraDeBusca onSubmit={onSubmitHendler} onChange={onChangeHendler}></BarraDeBusca>
         <ListaDeMapas/>
     </>);
}

export default Home;
