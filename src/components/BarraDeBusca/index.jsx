import style from './BarraDeBusca.module.css';

function BarraDeBusca(){
    return (
        <>
            <form className={style.form}>
                <input className={style.input} type="text" name="search" placeholder="Search.."/>
            </form>
        </>);
}

export default BarraDeBusca;
