import axios from "axios";

const BASE_URL= 'http://localhost:8090/api/v1';
const api = axios.create({
    baseURL:BASE_URL,
 });

 export function cadastrarMapa(mapa){
    api.post(`/mapa`,mapa).then((response)=>{
        mapa.id = response.data;
    }).catch((err) => console.log(err.mensage));
    return mapa;
}

export async function listarMapa(){
    try{
        const response = await api.get('/mapa');
        return response.data;
    }catch(error){
        console.error('Erro ao obter a lista de mapas:', error);
        throw error;
    }
}

export function enviarShapeFile(shapFile){
    const formData = new FormData();
    
    formData.append('file', shapFile);

    api.post('/shape-file/uploadShapefile', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    .then(response => {
        console.log('Arquivo enviado com sucesso:', response.data);
    })
    .catch(error => {
        console.error('Erro ao enviar o arquivo:', error);
    });
}

export async function listarCategorias() {
    try{
        const response = await api.get('/categoria');
        return response.data;
    }catch(error){
        console.error('Erro ao obter a lista de categoria:', error);
        throw error;
    }
}

export async function cadastrarCategoria(categoria){
    try{ 
        const response = await api.post(`/categoria`,categoria);
        categoria.id = response.data;
        console.log(categoria);
        return categoria;
    }catch(err){
        console.error('falha no cadastro: ', err)
        throw err;
    }
}

/*function getUrl(path) {
    return `${BASE_URL}${path}`;
}*/


