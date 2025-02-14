import { useCompany } from "@context/CompanyContext";

const ResetMapButton = () => {
  const { setActiveCompany } = useCompany();

  return (
    <div className="mb-10 mt-4">
      <button className="btn blue-btn" onClick={() => setActiveCompany(null)}>
        Reset Map View
      </button>
    </div>
  );
};

export default ResetMapButton;
