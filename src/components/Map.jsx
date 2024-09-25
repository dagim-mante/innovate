import {  check } from "../assets";
import { collabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";
import {benefitsBanner} from '../assets'
import { BackgroundCircles } from "./design/Header";
import Heading from "./Heading";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  return (
    <Section id="why-us" crosses>
        <div className="container">
            <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Where you can find us"
            />
            <div className="sm:mx-auto xl:w-[56rem]">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative bg-n-8 rounded-[1rem]">
                    <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                    <MapContainer 
                        center={[9.003193, 38.78167]}
                        zoom={14} scrollWheelZoom={true}
                        style={{height: '99.9%', width: '99.9%', borderRadius: '20 px'}}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[9.003193, 38.78167]}>
                            <Popup>
                                Innovate-et
                            </Popup>
                        </Marker>
                    </MapContainer>
                    </div>
                </div>
            </div>
            <BackgroundCircles />
            </div>
        </div>
    </Section>
  );
};

export default Map;
