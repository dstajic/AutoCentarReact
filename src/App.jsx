import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Location from "./components/Location";
import Car from "./components/Car";
import Footer from "./components/Footer";
import "./styles.scss";

const locations = [
  { name: "Auto centar Gavrić", city: "Novi Sad", address: "Gaudijeva 13" },
  { name: "Auto centar Ivković", city: "Novi Sad", address: "Mihaila Pupina 2" },
  { name: "Auto centar Klisa", city: "Novi Sad", address: "Ilije Birčanina 23" },
  { name: "Auto Centar Liman", city: "Novi Sad", address: "Pabla Pikasa 3" }
];

const cars = [
  {
    id: "dream",
    model: { code: "dream", name: "Dream Car" },
    image: "https://i.ibb.co/v4TJT978/blue-car.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "benzin",
    colorHex: "#4776ba",
    finish: "sjajna",
    price: { fromEUR: 7899, toEUR: 43799 }
  },
  {
    id: "nido",
    model: { code: "nido", name: "Nidorino" },
    image: "https://i.ibb.co/tPJPSQK6/renault1.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "dizel",
    colorHex: "#9aa0a6",
    finish: "sjajna",
    price: { fromEUR: 40639, toEUR: 58927 }
  },
  {
    id: "bulba",
    model: { code: "bulba", name: "Bulbasaur" },
    image: "https://i.ibb.co/hFqJfRNr/renault2.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "hibrid",
    colorHex: "#b3b3b3",
    finish: "mat",
    price: { fromEUR: 27629, toEUR: 40062 }
  },
  {
    id: "mar",
    model: { code: "mar", name: "Mareep" },
    image: "https://i.ibb.co/gLwnYZqs/renault3.png",
    engines: ["benzin", "hibrid"],
    defaultEngine: "benzin",
    colorHex: "#c0392b",
    finish: "sjajna",
    price: { fromEUR: 3679, toEUR: 5335 }
  },
  {
    id: "char",
    model: { code: "char", name: "Charizard" },
    image: "https://i.ibb.co/vvKK2s4K/renault4.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "benzin",
    colorHex: "#2c3e50",
    finish: "mat",
    price: { fromEUR: 22199, toEUR: 32189 }
  }
];

const App = () => {
  const [activeCar, setActiveCar] = useState(cars[0]);

  return (
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

      <div className="carContainer">
         <img src={activeCar?.image} alt={activeCar?.model.name} id="showcaseImg" />
       <div className="CarShowcase">
    
      <div className="Showcase">
        <div className="CarDetails">
          <b>Izracunaj cenu auto tvojih</b>
          <p>Model automobila:<br/> {activeCar.model?.name}</p>
          <p>Tip motora: <br/>{activeCar.defaultEngine}</p>
          <p>
          Boja automobila: <br/>
          <span className="colorBox" style={{ backgroundColor: activeCar.colorHex }}></span>
          {activeCar.colorHex}
          </p>
          <p>Tip boje automobila: <br/>{activeCar.finish} boja</p>
          <p>Opseg cene: <br/>{activeCar.price.fromEUR} – {activeCar.price.toEUR} €</p>
          <p>Kontakt mejl: <br/>primer@email.com</p>
          <p>Počevši od: {activeCar.price.fromEUR} €</p>
        </div>
      </div>
    
  </div>
        <div className="CarCollection">
          {cars.map((car) => (
            <Car
              key={car.id}
              car={car}
              isActive={activeCar?.id === car.id}
              setActiveCar={setActiveCar}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
