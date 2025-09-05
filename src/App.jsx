import React from "react";
import Navigation from "./components/Navigation";
import Location from "./components/Location";
import CarShowcase from "./components/CarShowcase";
import Footer from "./components/Footer";
import './styles.scss';

const locations = [
  { name: "Auto centar Gavrić", city: "Novi Sad", address: "Gaudijeva 13" },
  { name: "Auto centar Ivković", city: "Novi Sad", address: "Mihaila Pupina 2" },
  { name: "Auto centar Klisa", city: "Novi Sad", address: "Ilije Birčanina 23" },
  { name: "Auto Centar Liman", city: "Novi Sad", address: "Pabla Pikasa 3" }
];
const App = () => (
  <>
    <Navigation />
    <div className="locationContainer">
      <div className="locationsWrapper">
        <div className="locationsHeading">
          <h2 id="proadjaneLokacijeNaslov">Prodajne lokacije</h2>
        </div>
        <div className="locationsFlex">
          {locations.map((location, index) => (
            <Location
              key={index}
              name={location.name}
              city={location.city}
              address={location.address}
            />
          ))}
        </div>
      </div>
    </div>
    <CarShowcase />
    <Footer />
  </>
);

export default App;
