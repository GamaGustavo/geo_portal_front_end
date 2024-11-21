import style from './Home.module.css'; import {useEffect, useState} from 'react';
import {BotoesAtivacao, ViewMapa, NavBar} from '../../components';
import {listarMapa} from '../../api/GerenciadorReq';
import {GeoJSON} from 'ol/format';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import {Fill, Stroke, Style} from 'ol/style';

const cores = [
    {stroke: 'blue', fill: 'rgba(0, 0, 255, 0.2)'},
    {stroke: 'red', fill: 'rgba(255, 0, 0, 0.2)'},
    {stroke: 'green', fill: 'rgba(0, 255, 0, 0.2)'},
    {stroke: 'purple', fill: 'rgba(128, 0, 128, 0.2)'},
    // Adicione mais cores aqui, se necessário.
];

function Home2() {
    const [mapas, setMapas] = useState([]);
    const [layers, setLayers] = useState([]);

    useEffect(() => {
        listarMapa().then((valor) => {
            const mapaExibicao = valor.map((object, index) => ({
                titulo: object.nome,
                handlerOnChange: (ativado) => {
                    const layerExistente = layers.find((l) => l.id === object.id);
                    const colorIndex = index % cores.length;
                    if (ativado && !layerExistente) {
                        const vectorSource = new VectorSource({
                            format: new GeoJSON(),
                            url: `http://localhost:8090/api/v1/shape-file/geo-json/${object.id}`,
                        });
                        const novaLayer = new VectorLayer({
                            source: vectorSource,
                            style: new Style({
                                stroke: new Stroke({
                                    color: cores[colorIndex].stroke,
                                    width: 2,
                                }),
                                fill: new Fill({
                                    color: cores[colorIndex].fill,
                                }),
                            })
                        });
                        novaLayer.id = object.id;
                        setLayers([...layers, novaLayer]);
                    } else if (!ativado && layerExistente) {
                        console.log("saida")
                        setLayers(layers.filter((l) => l.id !== object.id));
                    }
                },
            }));

            setMapas(mapaExibicao);
        });
    });



    return (
        <div className={style.container}>
            <NavBar />
            <BotoesAtivacao botoes={mapas} />
            <ViewMapa layers={layers} />
        </div>

    );
}

export default Home2;



