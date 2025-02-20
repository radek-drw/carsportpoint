import React from "react";

import companyData from "./companyData.json";

import ResetMapButton from "./ResetMapButton";

import { useCompany } from "@context/CompanyContext";

const CompanyList = () => {
  const { setSelectedCompany, hoveredCompany, setHoveredCompany, mapRef } =
    useCompany();

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="basis-1/2 md:pr-[1vw]">
      <ul className="rounded-lg shadow-lg">
        {companyData.map((company) => (
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
