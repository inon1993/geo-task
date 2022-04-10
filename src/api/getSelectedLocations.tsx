import axios from "axios";

const getSelectedLocations = async () => {
  const locationsRaw: any = await axios({
    url: "https://api.auroras.live/v1/?type=locations",
    method: "POST",
  });
  return locationsRaw;
};

export default getSelectedLocations;
