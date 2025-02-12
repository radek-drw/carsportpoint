const ResetMapButton = ({ onReset }) => {
  return (
    <button className="blue-btn btn transition" onClick={onReset}>
      Reset Map View
    </button>
  );
};

export default ResetMapButton;
