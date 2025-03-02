import React from "react";
import ResetMapButton from "./ResetMapButton";
import { useCompany } from "@context/CompanyMapContext";

const API_URL =
  "https://cr6hha4le3.execute-api.eu-west-1.amazonaws.com/getCompanies";

const CompanyList = () => {
  const {
    companies,
    setSelectedCompany,
    hoveredCompany,
    setHoveredCompany,
    mapRef,
  } = useCompany();

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="basis-1/2 md:pr-[1vw]">
      <ul className="rounded-lg shadow-lg">
        {companies.map((company) => (
          <li
            key={company.id}
            className={`cursor-pointer px-4 py-2 transition hover:bg-gray-200 ${
              hoveredCompany?.id === company.id
                ? "bg-gray-200"
                : "bg-transparent"
            }`}
            onMouseEnter={() => setHoveredCompany(company)}
            onMouseLeave={() => setHoveredCompany(null)}
            onClick={() => handleCompanyClick(company)}
          >
            <strong>{company.name}</strong>
            <p>{company.address}</p>
          </li>
        ))}
      </ul>
      <ResetMapButton />
    </div>
  );
};

export default CompanyList;
