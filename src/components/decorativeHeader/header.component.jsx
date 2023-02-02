import "./header.style.css";
const Title = (props) => {
  return (
    <div className="heading">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
