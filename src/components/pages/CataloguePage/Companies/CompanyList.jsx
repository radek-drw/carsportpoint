const CompanyList = ({ companyData, setHoveredCompany, setActiveCompany }) => {
  return (
    <ul className="rounded-lg p-4 shadow-lg">
      {companyData.map((company) => (
        <li
          key={company.id}
          className="cursor-pointer p-2 transition hover:bg-gray-200"
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
