import React from "react";
const Location = (props) =>
{
  return (
    <div className="location">
      <p id="lokacijeNaslov">Prodaje lokacija: {props.name}</p>
      <div >Adresa: <p id="adresa">{props.address}, {props.city}</p></div>
    </div>
  );
}
export default Location;