  /**
    * @typedef {Object} ShapeFile
    * @property {number} [id]
    * @property {number} [idPontoTempo]
    * @property {File} [arquivo]
    * @property {string} url
    * @property {number} ordem
    **/

    /** @enum {number}*/
    const TipoArquivo = {
        LINK: 1,
        DOCUMENTO: 2,
        IMAGEM: 3
    }

  /**
   * @typedef {Object} Documento
   * @param {number} id - O ID do documento
   * @param {number} [idPontoTempo] - O ID do ponto no tempo
   * @param {string} [url] - A URL do documento
   * @param {TipoArquivo} [tipo] - O tipo do arquivo (usando o enum TipoArquivo)
   */
 export function documento(id,idPontoTempo,url,tipo) {
       this.id = id;
        this.idPontoTempo = idPontoTempo;
        this.url = url;
        this.tipo = tipo;
}



  /**
    * @typedef {Object} PontoTempo
    * @property {number} [id]
    * @property {Date} data
    * @property {Array<ShapeFile>} [listaShapeFile]
    * @property {Array<Documento>} [listaDocumento]
    **/

  /**
    * @typedef {Object} Categoria
    * @property {number} [id]
    * @property {string} nome
    **/
  /**
    * @typedef {Object} Mapa
    * @property {number} [id]
    * @property {Array<Categoria>} [listaCategoria]
    * @property {Array<PontoTempo>} [listaPontoTempo]
    **/

export {TipoArquivo}
