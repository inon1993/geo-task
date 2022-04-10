import cursorImg from "../../assets/cursor.png";

const Cursor = (props: any) => {
  return (
    <img
      src={cursorImg}
      alt="cursor"
      style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        left: `${props.cursorX}px`,
        top: `${props.cursorY}px`,
      }}
    />
  );
};

export default Cursor;
