import { useEffect, useState } from "react";
import Map from "../Map/Map";
import GeoInfo from "../GeoInfo/GeoInfo";
import AuroraInfo from "../AuroraInfo/AuroraInfo";
import getData from "../../api/getData";
import getSelectedLocations from "../../api/getSelectedLocations";
import "./Layout.css";

const Layout: any = () => {
  const [auroraData, setAuroraData] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  let locationsArray: any = [];
  const getLocations = async () => {
    const locationsRaw = await getSelectedLocations();
    if (locationsRaw) {
      const tempArray: any = Object.entries(locationsRaw.data);
      for (let i = 0; i < tempArray.length - 1; i++) {
        locationsArray.push(tempArray[i][1]);
      }
      setLocations(locationsArray);
    }
  };

  const getDataHandler = async (x: any, y: any) => {
    const data = await getData(x, y);
    setAuroraData(data.data);
    setX(x);
    setY(y);
  };

  const selectedLocationHandler = (long: any, lat: any) => {
    getDataHandler(lat, long);
  };

  return (
    <div className="layout">
      <Map onFindCorrds={getDataHandler} />
      <AuroraInfo onData={auroraData} />
      <GeoInfo
        long={y}
        lat={x}
        locations={locations}
        onLocation={selectedLocationHandler}
      />
    </div>
  );
};

export default Layout;
