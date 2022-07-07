import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);
  const dispatch = useDispatch();
  console.log(bands)

  
  const onBandSubmit = (name) => {
    dispatch(bandAdded(name));
  }

  return (
  <div>
    <BandInput onBandSubmit={onBandSubmit}/>
    <h1>Bands :</h1>
    <ul>
      {bands.map((band) => <li key={band} >{band}</li>)}
    </ul>
  </div>
  );
}

export default BandsContainer;
