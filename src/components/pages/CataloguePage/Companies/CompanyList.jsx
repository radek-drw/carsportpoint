import { useCompany } from "@context/CompanyContext";

const CompanyList = ({ companyData }) => {
  const { setActiveCompany, setHoveredCompany } = useCompany();

  return (
    <ul className="rounded-lg shadow-lg">
      {companyData.map((company) => (
        <li
          key={company.id}
          className="cursor-pointer px-4 py-2 transition hover:bg-gray-200"
          onMouseEnter={() => setHoveredCompany(company)}
          onMouseLeave={() => setHoveredCompany(null)}
          onClick={() => setActiveCompany(company)}
        >
          <strong>{company.name}</strong>
          <p>{company.address}</p>
        </li>
      ))}
    </ul>
  );
};

export default CompanyList;
