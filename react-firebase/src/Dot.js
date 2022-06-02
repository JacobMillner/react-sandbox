const Dot = ({ color }) => {
  const dotStyle = {
    height: 25,
    width: 25,
    margin: "0px 10px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block",
  };
  return <span style={dotStyle}></span>;
};

export default Dot;
