import { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./AuroraInfo.css";

const AuroraInfo = (props: any) => {
  const [data, setData] = useState();
  const [bz, setBz] = useState();
  const [speed, setSpeed] = useState();
  const [kp, setKp] = useState();
  const [den, setDen] = useState();
  const [probability, setProbability] = useState();

  //   const probability: any = props.onData;

  useEffect(() => {
    setData(props.onData);
    let bzv: any = 0;
    let kpv: any = 0;
    let speedv: any = 0;
    let denv: any = 0;
    if (data) {
      const ace = props.onData.ace;

      bzv = 100 - ((+ace.bz + 40) * 100) / 80;
      kpv = (+ace.kp * 100) / 9;
      speedv = ((+ace.speed + 250) * 100) / 2250;
      denv = +ace.density;
      const probabilityVal: any =
        bzv * 0.25 + kpv * 0.25 + speedv * 0.25 + denv * 0.25;
      setProbability(probabilityVal.toFixed(2));
      setBz(ace.bz);
      setKp(ace.kp);
      setSpeed(ace.speed);
      setDen(ace.density);
    }
    console.log(data);
  }, [props.onData, data]);
  return (
    <Card className="aurora-info">
      <h3>Aurora Information:</h3>
      {!data && <p>Select location from the map or from location menu.</p>}
      {probability && <p>Probability is {probability}% to see the Aurora.</p>}
      {bz && <p>BZ: {bz}nT</p>}
      {kp && <p>KP: {kp}</p>}
      {speed && <p>Solar Speed: {speed}km/s</p>}
      {den && <p>Solar Density: {den}p/cm^3</p>}
    </Card>
  );
};

export default AuroraInfo;
