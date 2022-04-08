import { useState } from "react";
import Map from "../Map/Map";
import GeoInfo from "../GeoInfo/GeoInfo";
import AuroraInfo from "../AuroraInfo/AuroraInfo";
import axios from "axios";
import "./Layout.css";

const Layout: any = () => {
  const [auroraData, setAuroraData] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();

  const getDataHandler = async (x: any, y: any) => {
    // const data: any = await fetch(
    //   "https://api.auroras.live/v1/?type=all&lat=" +
    //     x +
    //     "&long=" +
    //     y +
    //     "&forecast=false&threeday=false",
    //   { method: "POST" }
    // );
    const data: any = await axios({
      url:
        "https://api.auroras.live/v1/?type=all&lat=" +
        x +
        "&long=" +
        y +
        "&forecast=false&threeday=false",
      method: "POST",
    });
    // const settings: any = await (data) => {
    setAuroraData(data.data);
    setX(x);
    console.log(x);

    setY(y);
    console.log(y);
    // };
  };

  return (
    <div className="layout">
      <Map onFindCorrds={getDataHandler} />
      <AuroraInfo onData={auroraData} />
      <GeoInfo long={x} lat={y} />
    </div>
  );
};

export default Layout;
