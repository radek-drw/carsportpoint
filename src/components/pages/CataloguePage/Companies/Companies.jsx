import React from "react";

import { CompanyProvider } from "@context/CompanyContext";

import CompanyList from "./CompanyList";
import CompanyMap from "./CompanyMap";

const Companies = () => {
  return (
    <CompanyProvider>
      <article className="mx-auto mb-24 flex px-[3vw]">
        <CompanyList />
        <CompanyMap />
      </article>
    </CompanyProvider>
  );
};

export default Companies;
