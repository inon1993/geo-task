import { useEffect, useState } from "react";
import getSelectedLocations from "../../api/getSelectedLocations";
import Card from "../UI/Card";
import "./GeoInfo.css";

const GeoInfo = (props: any) => {
  const [locations, setLocations] = useState([]);
  const [long, setLong] = useState(props.long);
  const [lat, setLat] = useState(props.lat);

  let locationsArray: any = [];
  const getLocations = async () => {
    const locationsRaw = await getSelectedLocations();
    if (locationsRaw) {
      const tempArray: any = Object.entries(locationsRaw.data);
      for (let i = 0; i < tempArray.length; i++) {
        locationsArray.push(tempArray[i][1]);
      }
      setLocations(locationsArray);
    }
  };

  useEffect(() => {
    setLong(props.long);
    setLat(props.lat);
    getLocations();
  }, [props.long, props.lat]);

  const selsectOption = (e: any) => {
    const selectedLocationObj: any = locations[e.target.value];
    const selectedLocationLong: any = selectedLocationObj.long;
    const selectedLocationLat: any = selectedLocationObj.lat;

    setLong(selectedLocationLong);
    setLat(selectedLocationLat);

    props.onLocation(selectedLocationLong, selectedLocationLat);
  };

  return (
    <Card className="geo-info">
      <h3 className="title">Geographical Information:</h3>
      <p className="long">longitude: {long}</p>
      <p className="lat">latitude: {lat}</p>
      <select onChange={selsectOption}>
        {locations.map((location: any, index) => (
          <option key={index} value={index}>
            {location.name}
          </option>
        ))}
      </select>
    </Card>
  );
};

export default GeoInfo;
