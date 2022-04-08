import { useEffect, useState } from "react";
import "./GeoInfo.css";

const GeoInfo = (props: any) => {
  const [point, setPoint] = useState({});
  const [long, setLong] = useState();
  const [lat, setLat] = useState();

  useEffect(() => {
    setPoint({ long: props.long, lat: props.lat });
    if (point) {
      setLong(props.long);
      setLat(props.lat);
    }
  }, [props.long, props.lat, long, lat]);

  return (
    <div className="geo-info">
      <h2 className="title">Geographical Information:</h2>
      <p className="long">longitude: {long}</p>
      <p className="lat">latitude: {lat}</p>
    </div>
  );
};

export default GeoInfo;
