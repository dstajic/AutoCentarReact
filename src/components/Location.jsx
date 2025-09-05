import React from "react";
const Location = (props) =>
{
  return (
    <div className="location">
      <p id="lokacijeNaslov">Prodaje lokacija: {props.name}</p>
      <p >Adresa: <p id="adresa">{props.address}, {props.city}</p></p>
    </div>
  );
}
export default Location;