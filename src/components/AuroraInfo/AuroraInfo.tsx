import { useEffect, useState } from "react";
import "./AuroraInfo.css";

const AuroraInfo = (props: any) => {
  const [data, setData] = useState();
  const [bz, setBz] = useState();
  //   const probability: any = props.onData;

  useEffect(() => {
    setData(props.onData);
    if (data) {
      setBz(props.onData.ace.bz);
    }
    console.log(data);
  }, [props.onData, data]);
  return (
    <div className="aurora-info">
      <p>{bz}</p>
    </div>
  );
};

export default AuroraInfo;
