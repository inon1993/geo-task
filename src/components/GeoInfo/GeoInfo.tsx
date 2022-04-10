import { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./GeoInfo.css";

const GeoInfo = (props: any) => {
  const [locations, setLocations] = useState([]);
  const [long, setLong] = useState(props.long);
  const [lat, setLat] = useState(props.lat);

  useEffect(() => {
    setLocations(props.locations);
    setLong(props.long);
    setLat(props.lat);
  }, [props.long, props.lat, props.locations]);

  const selsectOption = (e: any) => {
    const selectedLocationObj: any = props.locations[e.target.value];
    const selectedLocationLong: any = selectedLocationObj.long;
    const selectedLocationLat: any = selectedLocationObj.lat;

    setLong(selectedLocationLong);
    setLat(selectedLocationLat);

    props.onLocation(selectedLocationLong, selectedLocationLat);
  };

  return (
    <Card className="geo-info">
      <div className="long-lat-info">
        <h3 className="long-lat-info__title">Geographical Information:</h3>
        <p className="long">longitude: {long}</p>
        <p className="lat">latitude: {lat}</p>
      </div>

      <div className="select-location">
        <h3 className="select-location__title">Select location:</h3>
        <select onChange={selsectOption}>
          {locations.map((location: any, index: any) => (
            <option key={index} value={index}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
    </Card>
  );
};

export default GeoInfo;
