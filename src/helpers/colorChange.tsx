const colorChange = (values: any) => {
  let color = "rgb(31, 31, 31";
  if (values < 25) {
    return (color = "green");
  } else if (values < 50) {
    return (color = "#ffeb3b");
  } else if (values < 75) {
    return (color = "orange");
  } else {
    return (color = "red");
  }
};

export default colorChange;
