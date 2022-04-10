import { useEffect, useState } from "react";
import Card from "../UI/Card";
import calcAurora from "../../helpers/calcAurora";
import "./AuroraInfo.css";
import colorChange from "../../helpers/colorChange";

const AuroraInfo = (props: any) => {
  const [data, setData] = useState();
  const [dataObj, setDataObj] = useState({
    bz: "",
    kp: "",
    speed: "",
    den: "",
  });
  const [probability, setProbability] = useState();
  const [color, setColor] = useState("rgb(31, 31, 31)");

  useEffect(() => {
    setData(props.onData);

    if (data) {
      const ace = props.onData.ace;

      const values: any = calcAurora(data);

      setProbability(values);

      setDataObj((prevState: any) => {
        return {
          ...prevState,
          bz: ace.bz,
        };
      });
      setDataObj((prevState: any) => {
        return {
          ...prevState,
          kp: ace.kp,
        };
      });
      setDataObj((prevState: any) => {
        return {
          ...prevState,
          speed: ace.speed,
        };
      });
      setDataObj((prevState: any) => {
        return {
          ...prevState,
          den: ace.density,
        };
      });

      setColor(colorChange(values));
    }
  }, [props.onData, data]);
  return (
    <Card className="aurora-info">
      <div>
        <h3>Aurora Information:</h3>
        {!data && <p>Select location from the map or from location menu.</p>}
        {probability && (
          <p>
            Probability is{" "}
            <span style={{ color: `${color}` }}>{probability}%</span> to see the
            Aurora.
          </p>
        )}
        {dataObj.bz !== "" && <p>BZ: {dataObj.bz}nT</p>}
        {dataObj.kp !== "" && <p>KP: {dataObj.kp}</p>}
        {dataObj.speed !== "" && <p>Solar Speed: {dataObj.speed}km/s</p>}
        {dataObj.den !== "" && <p>Solar Density: {dataObj.den}p/cm^3</p>}
      </div>

      {data && <p className="credit">Information via Auroras.live</p>}
    </Card>
  );
};

export default AuroraInfo;
