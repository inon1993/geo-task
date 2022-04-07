import { useRef } from "react";
import mapImg from "../../assets/map.jpg";
import "./Map.css";

const Map = () => {
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

    return { x, y };
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
    </div>
  );
};

export default Map;
