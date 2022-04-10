import { useState } from "react";
import Map from "../Map/Map";
import GeoInfo from "../GeoInfo/GeoInfo";
import AuroraInfo from "../AuroraInfo/AuroraInfo";
import axios from "axios";
import "./Layout.css";
import getData from "../../api/getData";

const Layout: any = () => {
  const [auroraData, setAuroraData] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();

  const getDataHandler = async (x: any, y: any) => {
    const data = await getData(x, y);
    setAuroraData(data.data);
    setX(x);
    setY(y);
  };

  const selectedLocationHandler = (long: any, lat: any) => {
    console.log("chc", long, lat);

    getDataHandler(lat, long);
  };

  return (
    <div className="layout">
      <Map onFindCorrds={getDataHandler} />
      <AuroraInfo onData={auroraData} />
      <GeoInfo long={y} lat={x} onLocation={selectedLocationHandler} />
    </div>
  );
};

export default Layout;
