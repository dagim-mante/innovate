import {  check } from "../assets";
import { collabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";
import {benefitsBanner} from '../assets'
import { BackgroundCircles } from "./design/Header";
import Heading from "./Heading";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <Section id="why-us" crosses>
        <div className="container">
            <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Where you can find us"
            />
            <div className="lg:ml-auto xl:w-[38rem]">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative bg-n-8 rounded-[1rem]">
                    <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                    <MapContainer center={[9.003193, 38.78167]} zoom={13} scrollWheelZoom={true}>
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
