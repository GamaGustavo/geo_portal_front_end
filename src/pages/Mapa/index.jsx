import { useLocation } from 'react-router-dom';
import style from './Mapa.module.css';
import 'ol/ol.css';
import { useEffect } from 'react';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import { GeoJSON } from 'ol/format';
import { Style, Stroke, Fill } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';

function Mapa() {
    const location = useLocation();
    const {mapa} = location.state || {};

    useEffect(() => {
        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM(),
        });


        const vectorSource = new VectorSource({
            format: new GeoJSON(),
            url: 'http://localhost:8080/geoserver/geo_portal_wk/ows?service=WFS&version=1.3.0&request=GetFeature&typeName=geo_portal_wk%3ASE_Municipios&maxFeatures=50&outputFormat=application%2Fjson',
            //  projection: 'EPSG:3857',
            // strategy: bboxStrategy,
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


        const map = new Map({
            target: 'map',
            layers: [osmLayer, vectorLayer], // Adicione vectorLayer aqui
            view: new View({
                center: fromLonLat([-37.3205, -10.5472]),
                zoom: 9,
            }),
        });

        return () => map.setTarget(null);
    }, []);

    return (
        <section className={style.corpo}>
            <section className={style.barraLateral}>
                <h1>{mapa?.nome}</h1>
                <p></p>
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
                <div id='map' className={style.map}></div>
            </section>
        </section>
    );
}

export default Mapa;




/*import {useLocation} from 'react-router-dom';
import style from './Mapa.module.css';
import 'ol/ol.css';
import {useEffect} from 'react';
import TileLayer from 'ol/layer/Tile';
import {OSM, TileWMS } from 'ol/source';
import { Map, View } from 'ol';
import {fromLonLat} from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import { GeoJSON } from 'ol/format';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';
import { Style, Stroke, Fill } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';

function Mapa(){
    const location = useLocation();
    const {mapa} = location.state || {};
    

    useEffect(()=>{''
        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM(),
        });
       const layer = new TileLayer({
    extent: [-13884991, 2870341, -7455066, 6338219],
    source: new TileWMS({
       url: 'http://localhost:8080/geoserver/geo_portal_wk/wms',
      params: {
        'LAYERS': 'geo_portal_wk:SE_Municipios',
        'TILED': true,
      },
      serverType: 'geoserver',      // Countries have transparency, so do not fade tiles:
      transition: 0,
    }),
        });
          const vectorSource = new VectorSource({
              format: new GeoJSON(),
              url:// (extent) =>
            // `http://localhost:8080/geoserver/geo_portal_wk/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geo_portal_wk:SE_Municipios&outputFormat=application/json&srsname=EPSG:4326&bbox=${extent.join(',')},EPSG:4326`,
              'http://localhost:8080/geoserver/geo_portal_wk/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geo_portal_wk%3ASE_Municipios&maxFeatures=50&outputFormat=application%2Fjson',
              strategy: bboxStrategy,
          });
        const vectorLayer = new VectorLayer({
            source: vectorSource,
            style: new Style({
        stroke: new Stroke({
            color: 'blue',
            width: 2,
        }),
                fill: new Fill({
                    color: 'rgba(0, 0, 255)',
                }),
            }),
        });


        const map = new Map({
            target:'map',
            layers:[osmLayer, layer],
            view: new View({
                center: fromLonLat([-37.3205, -10.5472]),
                zoom: 9,
            }),
        });
        return () => map.setTarget(null);
    },[]);
    return (
        <section className={style.corpo}>
            <section className={style.barraLateral}>
                <h1>{mapa?.nome}</h1>
                <p></p>
                <hr />
                <h1>Links e Documentos</h1>
                <ul>
                    <li>documpento</li>
                    <li>documpento</li>
                    <li>documpento</li>      
                </ul>    
            </section>
            <section className={style.viewMapa}>
                <div className={style.pontoTempo}>
                </div>
                <div id='map' className={style.map}></div>
            </section>

        </section>);
}

export default Mapa;*/
