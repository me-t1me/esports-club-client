import "./AnimationTextStyles.css";

const AnimationText = () => {
  const displayArray = "Duality".split("");

  //   return <h1 className="animated-content">Duality</h1>;
  return (
    <h1 className="animated-content">
      {displayArray.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </h1>
  );
};

export default AnimationText;
