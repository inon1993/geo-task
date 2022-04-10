import axios from "axios";
const getData = async (x: any, y: any) => {
  const data: any = await axios({
    url:
      "https://api.auroras.live/v1/?type=all&lat=" +
      x +
      "&long=" +
      y +
      "&forecast=false&threeday=false",
    method: "POST",
  });
  return data;
};

export default getData;
