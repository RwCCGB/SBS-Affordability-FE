"use client";

import React from "react";
import type { Section } from "@/app/appData/sectionInfo";
import type { formField } from "@/app/appData/applicationInfo";
import type { IApplicant } from "@/app/appData/applicantInfo";

import GenericTextField from "@/UIComponents/formControls/GenericTextboxControl";
import type { ExpenditureType } from "@/lib/staticData"; 

type DataAccess = {
  application: formField[];
  onchangeCall?: (...args: any[]) => void;
  onvalidateCall?: (...args: any[]) => void;
};

type Props = {
  sectionInfo: Section;
  dataAccess?: DataAccess;
  applicant: IApplicant; t
  expenditureTypes: ExpenditureType[]; 
};

const ApplicantExpenditure: React.FC<Props> = ({
  sectionInfo,
  dataAccess,
  applicant,
  expenditureTypes,
}) => {
  if (!dataAccess) return null; // guard


  const controls = (expenditureTypes ?? []).map((t, idx) => {
    const label = t.Text ?? t.Type; 
    if (!label) return null;

    const field = dataAccess.application.find((f) => f.name === label);
    if (!field) return null; 

    return (
      <GenericTextField
        key={`exp-${applicant.applicantId}-${idx}`} 
        field={field} 
        applicantId={applicant.applicantId} 
        onchange={dataAccess.onchangeCall}
        onvalidate={dataAccess.onvalidateCall}
      />
    );
  });

  return (
    <div>
      {controls}
    </div>
  );
};

export default ApplicantExpenditure;