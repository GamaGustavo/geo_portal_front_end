import {useLocation} from 'react-router-dom';
import style from './Mapa.module.css';
import {useEffect, useState} from 'react';
import VectorSource from 'ol/source/Vector';
import {GeoJSON} from 'ol/format';
import {Style, Stroke, Fill} from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import {NavBar, ViewMapa} from '../../components';

function Mapa() {
    const location = useLocation();
    const {mapa} = location.state || {};
    const [layers, setLayers] = useState([])

    useEffect(() => {

        const vectorSource = new VectorSource({
            format: new GeoJSON(),
            url: `http://localhost:8090/api/v1/shape-file/geo-json/${mapa?.id}`,
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
        setLayers([vectorLayer]);
        console.log(JSON.stringify(mapa))
    },[mapa]);

    return (
        <section className={style.corpo}>
            <NavBar/>
            <section className={style.barraLateral}>
                <h1>{mapa?.nome}</h1>
                <p>
                    {mapa?.pontoTempos[0].descricao}
                </p>
                <hr />
                <h1>Links e Documentos</h1>
                <ul>
                    <li>documpento</li>
                    <li>documpento</li>
                    <li>documpento</li>
                </ul>
            </section>
            <section className={style.viewMapa}>
                <div className={style.pontoTempo}></div>
                <ViewMapa layers={layers}/>
            </section>
        </section>
    );
}

export default Mapa;


