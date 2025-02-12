const CompanyList = ({ companyData, setHoveredCompany, setActiveCompany }) => {
  return (
    <ul className="rounded-lg px-3 py-4 shadow-lg md:px-4">
      {companyData.map((company) => (
        <li
          key={company.id}
          className="cursor-pointer py-2 transition hover:bg-gray-200 md:px-2"
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
