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
    <article className="mx-auto mb-24 flex px-[3vw]">
      <div className="basis-2/5 pr-[1vw]">
        <CompanyList
          companyData={companyData}
          setHoveredCompany={setHoveredCompany}
          setActiveCompany={setActiveCompany}
        />
        <div className="mb-10 mt-4">
          <ResetMapButton onReset={handleResetMap} />
        </div>
      </div>
      <div className="flex-grow">
        <CompanyMap
          companyData={companyData}
          hoveredCompany={hoveredCompany}
          activeCompany={activeCompany}
        />
      </div>
    </article>
  );
};

export default Companies;
