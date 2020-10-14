import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';


import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Goiania</strong>
                    <span>Goias</span>
                </footer>
            </aside>

            <Map
                center={[-16.7166019, -49.2334783]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxjaDFtaXN0IiwiYSI6ImNrZzh0NHcxOTAxa3MycXFkdHZ1YWMxMzEifQ.CWrK_oH0bOV2xG9zhnhfPw`} 
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    );

}

export default OrphanagesMap;