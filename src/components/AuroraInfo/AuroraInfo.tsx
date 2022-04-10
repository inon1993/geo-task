import { useEffect, useState } from "react";
import Card from "../UI/Card";
import calcAurora from "../../helpers/calcAurora";
import "./AuroraInfo.css";

const AuroraInfo = (props: any) => {
  const [data, setData] = useState();
  const [bz, setBz] = useState();
  const [speed, setSpeed] = useState();
  const [kp, setKp] = useState();
  const [den, setDen] = useState();
  const [probability, setProbability] = useState();

  useEffect(() => {
    setData(props.onData);

    if (data) {
      const ace = props.onData.ace;

      const values: any = calcAurora(data);

      setProbability(values);
      setBz(ace.bz);
      setKp(ace.kp);
      setSpeed(ace.speed);
      setDen(ace.density);
    }
  }, [props.onData, data]);
  return (
    <Card className="aurora-info">
      <div>
        <h3>Aurora Information:</h3>
        {!data && <p>Select location from the map or from location menu.</p>}
        {probability && <p>Probability is {probability}% to see the Aurora.</p>}
        {bz && <p>BZ: {bz}nT</p>}
        {kp && <p>KP: {kp}</p>}
        {speed && <p>Solar Speed: {speed}km/s</p>}
        {den && <p>Solar Density: {den}p/cm^3</p>}
      </div>

      {data && <p className="credit">Information via Auroras.live</p>}
    </Card>
  );
};

export default AuroraInfo;
