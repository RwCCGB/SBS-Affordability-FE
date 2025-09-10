"use client";

import React, { useEffect, useState } from "react"; 
import type { Section } from "@/app/appData/sectionInfo";
import type { formField } from "@/app/appData/applicationInfo";
import type { IApplicantData, IApplicant } from "@/app/appData/applicantInfo";
import ApplicantIncome from "@/UIComponents/Sections/ApplicantSections/applicantIncome";
import { GetApplicantData } from "@/app/appData/applicantInfo"; 

type DataAccess = {
  application: formField[];
  onchangeCall?: (...args: any[]) => void;
  onvalidateCall?: (...args: any[]) => void;
};

type Props = {
  sectionInfo: Section;
  dataAccess: DataAccess;
  applicantsInfo?: IApplicant[]; 
};

const Income: React.FC<Props> = ({ sectionInfo, dataAccess, applicantsInfo }) => {

  const [localApplicants, setLocalApplicants] = useState<IApplicant[] | null>(null); 
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => { 
    let alive = true;
    (async () => {
      try {
        const data: IApplicantData = await GetApplicantData();
        console.log("[income.tsx] fetched applicants:", data);
        if (!alive) return;
        setLocalApplicants(data.applicants ?? []);
      } catch (e) {
        console.error("[income.tsx] GetApplicantData failed:", e);
        if (!alive) return;
        setLocalApplicants([]);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  if (!dataAccess) return null; 

  const sourceApplicants: IApplicant[] =
    applicantsInfo && applicantsInfo.length > 0
      ? applicantsInfo
      : localApplicants ?? []; 

  console.log(
    "[income.tsx] sourceApplicants length =",
    sourceApplicants.length
  ); 

  const ApplicantSections: JSX.Element[] = [];
  for (let i = 0; i < 1; i++) { 
    const applicant = sourceApplicants[i];
    console.log("[income.tsx] applicantId:", applicant?.applicantId); 

    ApplicantSections.push(
      <ApplicantIncome
        key={`inc-sec-${applicant.applicantId}`} 
        sectionInfo={sectionInfo}
        dataAccess={dataAccess}
        applicant={applicant}
      />
    );
  }

  return (
    <div>
      <div className="grid">
        <h2>
          {sectionInfo.sectionTitle} <span className="progressText">Step 3 of 5</span>
        </h2>
      </div>

      <div className="grid">
        <p><strong>[Income debug]</strong>{" "}
          applicants={sourceApplicants.length}
        </p> {}
        {loading && <p>Loading applicants…</p>} {}
        {!loading && sourceApplicants.length === 0 && (
          <p>No applicants to render.</p> 
        )}
      </div>

      <div className="grid">
        <p />
        <p />
        <progress value={sectionInfo.percentageProgress} max="100" />
      </div>

      {ApplicantSections }
    </div>
  );
};

export default Income;