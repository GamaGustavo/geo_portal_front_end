import {useLocation} from 'react-router-dom';
import style from './Home.module.css';
import 'ol/ol.css';
import {useEffect, useState} from 'react';
import TileLayer from 'ol/layer/Tile';
import {OSM} from 'ol/source';
import {Map, View} from 'ol';
import {fromLonLat} from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import {GeoJSON} from 'ol/format';
import {Style, Stroke, Fill} from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import NavBar from '../../components/NavBar';
import {BotoesAtivacao} from '../../components';
import {listarMapa} from '../../api/GerenciadorReq';
import {object} from 'prop-types';

function Home2() {
    const location = useLocation();
    const [mapas, setMapas] = useState([]);


    useEffect(() => {
        listarMapa().then(
            (valor) => {
                const mapaExibicao = valor.map((object) => (
                    {
                        titulo: object.nome,
                        onSelect: () => alert('App funcionado')
                    }
                ));
                setMapas(mapaExibicao);
            }
        );



        /*
        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM(),
        });
    
    
        const vectorSource = new VectorSource({
            format: new GeoJSON(),
            url: 'http://localhost:8080/geoserver/geo_portal_wk/ows?service=WFS&version=1.3.0&request=GetFeature&typeName=geo_portal_wk%3AGEOFT_TERRA_PUBLICA&maxFeatures=50&outputFormat=application%2Fjson',
        });
    
        const vectorSource2 = new VectorSource({
            format: new GeoJSON(),
            url: 'http://localhost:8080/geoserver/geo_portal_wk/ows?service=WFS&version=1.3.0&request=GetFeature&typeName=geo_portal_wk%3AMineria%C3%A7%C3%A3o%20Ilegal&maxFeatures=50&outputFormat=application%2Fjson',
        });
    
    
        vectorSource.getFeatures().forEach(feature => {
            console.log(feature.getGeometry().getExtent());
        });
    
        const vectorLayer = new VectorLayer({
            source: vectorSource,
            style: new Style({
                stroke: new Stroke({
                    color: 'blue',
                    width: 2,
                }),
                fill: new Fill({
                    color: 'rgba(0, 0, 255, 0.2 )',
                }),
            }),
        });
    
        const vectorLayer2 = new VectorLayer({
            source: vectorSource2,
            style: new Style({
                stroke: new Stroke({
                    color: 'red',
                    width: 2,
                }),
                fill: new Fill({
                    color: 'rgba(255, 0,0 , 0.2 )',
                }),
            }),
        });
    
    
        const map = new Map({
            target: 'map',
            layers: [osmLayer, vectorLayer, vectorLayer2], // Adicione vectorLayer aqui
            view: new View({
                center: fromLonLat([-47.9292, -15.7801]),
                zoom: 5,
            }),
        });
        
        return () => map.setTarget(null);*/
    }, []);



    return (
        <div>
            <NavBar />
            <BotoesAtivacao botoes={mapas} />
            {/*<section className={style.barraLateral}>
                <ListaComBotoes/>
            </section> 
            <section className={style.viewMapa}>
                <div className={style.pontoTempo}></div>
                <div id='map' className={style.map}></div>
            </section>*/}

        </div>

    );
}

export default Home2;

const ListaComBotoes = () => {
    const [visibilidade, setVisibilidade] = useState([false, false, false]); // Estado inicial de visibilidade para 3 itens

    // Função para alternar a visibilidade do item com base no índice
    const toggleVisibilidade = (index) => {
        setVisibilidade(prevState =>
            prevState.map((item, i) => (i === index ? !item : item))
        );
    };

    return (
        <div>
            <h3>Lista com Botões para Alternar Visibilidade</h3>
            {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
                <div key={index}>
                    <button onClick={() => toggleVisibilidade(index)}>
                        {visibilidade[index] ? 'Esconder' : 'Mostrar'} {item}
                    </button>
                    {visibilidade[index] && <p>{item} está visível!</p>}
                </div>
            ))}
        </div>
    );
};

