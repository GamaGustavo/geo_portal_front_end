import style from './ListaCategoria.module.css';
import {listarCategorias} from '../../api/GerenciadorReq.js';
import  { useState, useEffect } from 'react';


const ListaCategoria = () => {
  // Array de categorias (exemplo)
  const [categorias, setCategorias ]= useState([]) ;

  // Configuração de paginação
  const categoriasPorPagina = 18 ; // Quantas categorias exibir por página
  const [paginaAtual, setPaginaAtual] = useState(1); // Estado para a página atual
    useEffect(()=>{
        listarCategorias().then(categorias =>{
            setCategorias(categorias);
            console.info(JSON.stringify(categorias));
        });
            });

  // Cálculo de quantas páginas serão necessárias
  const totalPaginas = Math.ceil(categorias.length / categoriasPorPagina);

  // Seleciona as categorias que serão exibidas na página atual
  const indexUltimaCategoria = paginaAtual * categoriasPorPagina;
  const indexPrimeiraCategoria = indexUltimaCategoria - categoriasPorPagina;
  const categoriasPaginaAtual = categorias.slice(indexPrimeiraCategoria, indexUltimaCategoria);

  // Função para mudar de página
  const mudarPagina = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  return (
    <div className={style.categorias_container}>
      <div className={style.categorias_lista}>
        {categoriasPaginaAtual.map((categoria, index) => (
          <div key={index} className={style.categoria_item}>
            {categoria.nome}
          </div>
        ))}
      </div>

      <div className={style.paginacao}>
        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index}
            className={paginaAtual === index + 1 ? style.paginacao_botao.ativo : style.paginacao_botao}
            onClick={() => mudarPagina(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};


 export default ListaCategoria;
