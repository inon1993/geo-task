import { useRef, useState } from "react";
import mapImg from "../../assets/map.jpg";
import Cursor from "../UI/cursor";
import "./Map.css";

const Map = (props: any) => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState(0);

  const imgRef = useRef<HTMLImageElement>(null);

  const getPoints = (e: any) => {
    const clickX = e.nativeEvent.offsetX;
    const clickY = e.nativeEvent.offsetY;

    const originalX: any = imgRef.current?.clientWidth;
    const originalY: any = imgRef.current?.clientHeight;

    const ratioX = originalX / 360;
    const ratioY = originalY / 180;

    const x = clickX / ratioX - 180;
    const y = (clickY / ratioY - 90) * -1;

    setCursorX(clickX);
    setCursorY(clickY - 24);

    props.onFindCorrds(x.toFixed(5), y.toFixed(5));
  };

  return (
    <div className="map">
      <img
        className="map-img"
        src={mapImg}
        alt="Map is shown here."
        onClick={getPoints}
        ref={imgRef}
      />
      {cursorX && <Cursor cursorX={cursorX} cursorY={cursorY} />}
    </div>
  );
};

export default Map;
