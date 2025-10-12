import { useCompany } from '@context/CompanyMapContext';

const ResetMapButton = () => {
  const { setSelectedCompany } = useCompany();

  return (
    <div className="mb-10 mt-4">
      <button className="btn blue-btn" onClick={() => setSelectedCompany(null)}>
        Reset Map View
      </button>
    </div>
  );
};

export default ResetMapButton;
