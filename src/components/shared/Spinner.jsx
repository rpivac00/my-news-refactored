import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <div className="spinner-container">
      <img width={60} className="spinner" src={spinner} alt="Loading..." />
    </div>
  );
}

export default Spinner;
