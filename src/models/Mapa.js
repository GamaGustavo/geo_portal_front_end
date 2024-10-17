
/**
    * @param {number} [id]
    * @param {string} nome
    * @param {object} [imagem]
    * @param {Array<object>} [listacategoria = []]
    * @param {Array} [listaPontoTempo = [] ] */
export default function mapa(id, nome, imagem, listacategoria , listaPontoTempo){
    this.id = id;
    this.nome = nome;
    this.imagem = imagem;
    this.listacategoria = listacategoria;
    this.listaPontoTempo = listaPontoTempo;
}


