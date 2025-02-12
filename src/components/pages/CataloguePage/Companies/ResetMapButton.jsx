const ResetMapButton = ({ onReset }) => {
  return (
    <button
      className="mt-4 rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
      onClick={onReset}
    >
      Reset Map View
    </button>
  );
};

export default ResetMapButton;
