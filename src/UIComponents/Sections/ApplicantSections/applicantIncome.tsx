import React from "react"; 
import type { Section } from "@/app/appData/sectionInfo"; 
import type { formField } from "@/app/appData/applicationInfo";
import type { IApplicant } from "@/app/appData/applicantInfo"; 
import GenericTextField from "@/UIComponents/formControls/GenericTextboxControl"; 


type DataAccess = {
  application: formField[];
  onchangeCall?: (...args: any[]) => void;
  onvalidateCall?: (...args: any[]) => void;
};


type Props = {
  sectionInfo: Section;
  dataAccess: DataAccess;
  applicant: IApplicant;
};


const ApplicantIncome: React.FC<Props> = ({ sectionInfo, dataAccess, applicant }) => {
  if (!dataAccess || !Array.isArray(dataAccess.application)) return null; 
  if (!applicant || !Array.isArray(applicant.incomeData)) return null; 
 
  console.log("[ApplicantIncome]", "applicantId=", applicant.applicantId, "incomeData length=", Array.isArray(applicant.incomeData) ? applicant.incomeData.length : "not array", applicant.incomeData);
  const incomeFields: formField[] = Array.isArray(applicant.incomeData) ? applicant.incomeData : [];
  return (
    <div style={{ marginBottom: 24 }}> {}
      <h3>Applicant Income Info {applicant.applicantId}</h3> {}

      {applicant.incomeData.map((field, i) => ( 
        <div key={`inc-${applicant.applicantId}-${field.id ?? i}`} style={{ marginBottom: 12 }}>
          <GenericTextField
            field={[field]} 
            applicantId={applicant.applicantId} 
            onchange={dataAccess.onchangeCall} 
            onvalidate={dataAccess.onvalidateCall} 
          />
        </div>
      ))}
    </div>
  );
};

export default ApplicantIncome; 