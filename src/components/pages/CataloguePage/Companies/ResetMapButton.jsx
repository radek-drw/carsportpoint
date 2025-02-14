import { useCompany } from "@context/CompanyContext";

const ResetMapButton = () => {
  const { setActiveCompany } = useCompany();

  return (
    <button className="btn blue-btn" onClick={() => setActiveCompany(null)}>
      Reset Map View
    </button>
  );
};

export default ResetMapButton;
