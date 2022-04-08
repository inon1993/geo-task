import { useRef, useState } from "react";
import mapImg from "../../assets/map.jpg";
import cursorImg from "../../assets/cursor.png";
import "./Map.css";

const Map = (props: any) => {
  const [cursorX, setCursorX] = useState(0);
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
    console.log(x, y);

    props.onFindCorrds(x, y);
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
      {cursorX !== 0 && (
        <img
          src={cursorImg}
          alt="cursor"
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            left: `${cursorX}px`,
            top: `${cursorY}px`,
          }}
        />
      )}
    </div>
  );
};

export default Map;
