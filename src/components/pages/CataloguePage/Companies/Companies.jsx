import React from "react";

import { CompanyProvider } from "@context/CompanyContext";

import CompanyList from "./CompanyList";
import CompanyMap from "./CompanyMap";

const Companies = () => {
  return (
    <CompanyProvider>
      <article className="mx-auto mb-24 flex max-w-[1280px] flex-col md:px-10 lg:flex-row">
        <CompanyList />
        <CompanyMap />
      </article>
    </CompanyProvider>
  );
};

export default Companies;
