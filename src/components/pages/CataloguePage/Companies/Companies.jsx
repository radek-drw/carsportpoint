import React from "react";

import { CompanyProvider } from "@context/CompanyContext";

import companyData from "./companyData.json";
import ResetMapButton from "./ResetMapButton";
import CompanyList from "./CompanyList";
import CompanyMap from "./CompanyMap";

const Companies = () => {
  return (
    <CompanyProvider>
      <article className="mx-auto mb-24 flex px-[3vw]">
        <div className="basis-2/5 pr-[1vw]">
          <CompanyList companyData={companyData} />
          <div className="mb-10 mt-4">
            <ResetMapButton />
          </div>
        </div>
        <div className="flex-grow">
          <CompanyMap companyData={companyData} />
        </div>
      </article>
    </CompanyProvider>
  );
};

export default Companies;
