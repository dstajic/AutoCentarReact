import React from "react";

const Car = ({ car, isActive, setActiveCar }) => {
  return (
    <div>
      <button
        className={`CarBtn ${isActive ? "active" : ""}`}
        onClick={() => setActiveCar(car)}
      >
        <img src={car.image} alt={car.model?.name} />
        <br />
        Već od: {car.price.fromEUR} €
      </button>

      
      
    </div>
  );
};

export default Car;
/*{isActive && (
        <div className="Showcase">
          <img src={car.image} alt={car.model?.name} />
        </div>
      )} */
