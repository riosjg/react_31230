const Test = ({ theme, size }) => {
  return (
    <h1
      className={`
      ${theme === "light" ? "bg-info text-dark" : "bg-dark text-white"}
      ${size || ""}
      `}
    >
      Test
    </h1>
    // <h1
    //   style={{
    //     backgroundColor: theme === "dark" ? "black" : "cyan",
    //     color: theme === "dark" ? "white" : "black",
    //   }}
    // >
    //   Test
    // </h1>
  );
};

export default Test;
