import axios from "axios";

const BASE_URL = 'http://localhost:8090/api/v1';
const api = axios.create({
    baseURL: BASE_URL,
});

export async function enviarMapa(mapa) {
    try {
        const response = await api.post(`/mapa`, mapa);
        mapa.id = response.data;
        return mapa;
    } catch (err) {
        console.error('Erro ao cadastrar o  mapas: ', err);
        throw err;
    }
}

export async function listarMapa() {
    try {
        const response = await api.get('/mapa');
        return response.data;
    } catch (error) {
        console.error('Erro ao obter a lista de mapas:', error);
        throw error;
    }
}

export async function enviarShapeFiles(shapeFiles) {
    const formData = new FormData();

    // Adiciona cada arquivo ao FormData com o nome 'file'
    shapeFiles.forEach((shape) => formData.append('file', shape));

    try {
        const response = await api.post('/shape-file/cadastrar-shapes', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        // Axios retorna diretamente `response.data`
        console.log('Upload concluído com sucesso:', response.data);
        return response.data;  // Retorna `data` para o chamador da função
    } catch (error) {
        console.error('Erro no upload:', error);
        throw error;  // Propaga o erro para ser tratado externamente
    }
}
export async function listarCategorias() {
    try {
        const response = await api.get('/categoria');
        return response.data;
    } catch (error) {
        console.error('Erro ao obter a lista de categoria:', error);
        throw error;
    }
}

export async function cadastrarCategoria(categoria) {
    try {
        const response = await api.post(`/categoria`, categoria);
        categoria.id = response.data;
        return categoria;
    } catch (err) {
        console.error('falha no cadastro: ', err)
        throw err;
    }
}

export async function enviarPontoTempo(novoPontoTempo) {
    try {
        const response = await api.post(`/ponto-tempo`, novoPontoTempo);
        novoPontoTempo.id = response.data;
        return novoPontoTempo;

    } catch (err) {
        console.error('falha no cadastro: ', err)
        throw err;
    }
}

/*function getUrl(path) {
    return `${BASE_URL}${path}`;
}*/


