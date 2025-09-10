"use client";

import React, { useEffect, useState } from "react";
import type { JSX } from "react";
import type { Section } from "@/app/appData/sectionInfo";
import type { formField } from "@/app/appData/applicationInfo";
import type { IApplicant } from "@/app/appData/applicantInfo";

import ApplicantExpenditure from "./ApplicantSections/applicantExpenditure"; 
import { StaticData } from "@/lib/staticData"; 
import type { ExpenditureType } from "@/lib/staticData"; 

type DataAccess = {
  application: formField[];
  onchangeCall?: (...args: any[]) => void;
  onvalidateCall?: (...args: any[]) => void;
};

type Props = {
  sectionInfo: Section;
  dataAccess?: DataAccess;
  applicantsInfo: Array<IApplicant>;
};

const Expenditure: React.FC<Props> = ({ sectionInfo, dataAccess, applicantsInfo }) => {
  const [expTypes, setExpTypes] = useState<ExpenditureType[] | null>(null); 

  useEffect(() => { 
    let alive = true;
    (async () => {
      try {
        const types = await StaticData.GetExpenditureTypes();
        if (alive) setExpTypes(types);
      } catch {
        if (alive) setExpTypes([]);
      }
    })();
    return () => { alive = false; };
  }, []);

  if (!dataAccess) return null;

  const ApplicantSections: JSX.Element[] = [];
  for (let i = 0; i < applicantsInfo.length; i++) {
    const applicant = applicantsInfo[i];
    ApplicantSections.push(
      <ApplicantExpenditure
        key={`exp-sec-${applicant.applicantId}`}
        sectionInfo={sectionInfo}
        dataAccess={dataAccess}
        applicant={applicant}
        expenditureTypes={expTypes ?? []}
      />
    );
  }

  return (
    <div>
      <div className="grid">
        <h2>
          {sectionInfo.sectionTitle} <span className="progressText">Step 4 of 5</span>
        </h2>
      </div>
      <div className="grid">
        <p></p>
        <p><progress value={sectionInfo.percentageProgress} max="100" /></p>
      </div>
      {ApplicantSections}
    </div>
  );
};

export default Expenditure;