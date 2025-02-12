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
    <article className="mx-auto mb-24 md:max-w-[692px] md:px-14 lg:max-w-[968px] lg:px-20 xl:max-w-[1224px] xl:px-24">
      <div>
        <CompanyList
          companyData={companyData}
          setHoveredCompany={setHoveredCompany}
          setActiveCompany={setActiveCompany}
        />
        <div className="mb-10 mt-10">
          <ResetMapButton onReset={handleResetMap} />
        </div>
      </div>
      <div>
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
