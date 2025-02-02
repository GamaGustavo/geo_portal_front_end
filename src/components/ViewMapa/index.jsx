import PropTypes from 'prop-types'
import style from './ViewMapa.module.css'
import { useEffect, useState } from 'react'
import TileLayer from 'ol/layer/Tile';
import { OSM, XYZ } from 'ol/source';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import VectorLayer from 'ol/layer/Vector';
import { BsLayers } from "react-icons/bs";


const BACKGROUND_TYPES = {
  OSM: 1,
  ESRI_DARK_GRAY: 2,
  GOOGLE_SATELLITE: 3,
  ESRI_LIGHT_GRAY: 4,
};

function ViewMapa({ layers }) {

  const [bacground, setBacground] = useState(BACKGROUND_TYPES.ESRI_DARK_GRAY);



  useEffect(() => {
    console.log("sempre é chamado quando eu mudo o background ou o layer")
    const map = new Map({
      target: 'map',
      layers: [getBacGround(bacground), ...layers], // Adicione vectorLayer aqui
      view: new View({
        center: fromLonLat([-47.9292, -15.7801]),
        zoom: 5,
        maxZoom: 19,
      }),
    });
    return () => map.setTarget(null);
  }, [layers, bacground])

  return (
    <div className={style.mapa} id='map'>
      <div className={style.tile_button}>
        <button>
          <BsLayers className={style.img} />
        </button>
        <div className={style.opcoes}>
          <a onClick={() => setBacground(BACKGROUND_TYPES.GOOGLE_SATELLITE)} href='#'>Satelite</a>
          <a onClick={() => setBacground(BACKGROUND_TYPES.ESRI_LIGHT_GRAY)} href='#'>Claro</a>
          <a onClick={() => setBacground(BACKGROUND_TYPES.ESRI_DARK_GRAY)} href='#'>Escuro</a>
        </div>

      </div>


    </div>)

}

ViewMapa.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.instanceOf(TileLayer),
    PropTypes.instanceOf(VectorLayer),
  ])),
};


export default ViewMapa


function getBacGround(index) {
  switch (index) {
    case 1:
      return new TileLayer({
        preload: Infinity,
        source: new OSM(),
      });
    case 2:
      // Camada com o fundo Esri Dark Gray
      return new TileLayer({
        source: new XYZ({
          url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
          projection: 'EPSG:3857', // O serviço está no sistema de coordenadas WGS 84 / Pseudo-Mercator
          maxZoom: 19 // Define o zoom máximo para corresponder ao serviço
        }),
      });
    case 3:
      // Camada com o fundo Google Satellite
      return new TileLayer({
        source: new XYZ({
          url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
          projection: 'EPSG:3857',
          maxZoom: 20, // Máximo de zoom permitido pelo Google
        }),
      });
    default:
      // Camada com o fundo Esri Light Gray
      return new TileLayer({
        source: new XYZ({
          url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
          projection: 'EPSG:3857',
          maxZoom: 19,
        }),
      });
  }
}
