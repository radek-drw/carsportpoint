import React, { useState } from "react";

import companyData from "./companyData.json";
import ResetMapButton from "./ResetMapButton";
import CompanyList from "./CompanyList";
import CompanyMap from "./CompanyMap";

const Companies = () => {
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [activeCompany, setActiveCompany] = useState(null);

  const handleResetMap = () => {
    setActiveCompany(null);
  };

  return (
    <article className="flex flex-col">
      <div className="space-y-4">
        <CompanyList
          companyData={companyData}
          setHoveredCompany={setHoveredCompany}
          setActiveCompany={setActiveCompany}
        />

        <ResetMapButton onReset={handleResetMap} />
      </div>
      <CompanyMap
        companyData={companyData}
        hoveredCompany={hoveredCompany}
        activeCompany={activeCompany}
      />
    </article>
  );
};

export default Companies;
