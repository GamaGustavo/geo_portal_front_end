import { Link } from "react-router-dom";
import style from './NavBar.module.css';
import { MdHome, MdViewCarousel } from 'react-icons/md';
import { IoHourglassOutline } from 'react-icons/io5';
import { FaUser, FaPlus, FaTags } from 'react-icons/fa';
function NavBar() {
  return (
    <div className={style.header}>
      <nav className={style.navbar}>
        <Link className={style.link} to='/perfil'><FaUser className={style.img} /></Link>
        <Link className={style.link} to='/home'><MdHome className={style.img} /></Link>
        <Link className={style.link} to='/home2'><MdViewCarousel className={style.img} /></Link>
        <Link className={style.link} to='/cadastro_mapa'><FaPlus className={style.img} /></Link>
        <Link className={style.link} to='/categoria'><FaTags className={style.img} /></Link>
        <Link className={style.link} to='/linha_tempo'><IoHourglassOutline className={style.img} /></Link>
      </nav>
    </div>
  );
}

export default NavBar;
