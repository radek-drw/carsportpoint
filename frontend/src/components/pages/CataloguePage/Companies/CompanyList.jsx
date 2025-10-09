import React from "react";
import { useCompany } from "@context/CompanyMapContext";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ResetMapButton from "./ResetMapButton";
import "react-loading-skeleton/dist/skeleton.css";

const CompanyList = () => {
  const {
    companies,
    isLoading,
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
        {isLoading
          ? [...Array(6)].map((_, index) => (
              <SkeletonTheme
                baseColor="#d1d5db"
                highlightColor="#f9fafb"
                key={index}
              >
                <li className="rounded-md px-4 py-2">
                  <Skeleton height={22} width="80%" duration={1} />
                  <Skeleton
                    height={15}
                    width="60%"
                    style={{ marginTop: 6 }}
                    duration={1}
                  />
                </li>
              </SkeletonTheme>
            ))
          : companies.map((company) => (
              <li key={company.id}>
                <button
                  type="button"
                  className={`w-full px-4 py-2 text-left transition hover:bg-gray-200 ${
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
                </button>
              </li>
            ))}
      </ul>
      <ResetMapButton />
    </div>
  );
};

export default CompanyList;
