import Map from "../Map/Map";
import GeoInfo from "../GeoInfo/GeoInfo";
import AuroraInfo from "../AuroraInfo/AuroraInfo";
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Map />
      <AuroraInfo />
      <GeoInfo />
    </div>
  );
};

export default Layout;
