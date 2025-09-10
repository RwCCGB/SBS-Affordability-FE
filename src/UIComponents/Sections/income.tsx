"use client";
import React from 'react';
import type {Section} from '@/app/appData/sectionInfo';
import type { formField } from '@/app/appData/applicationInfo';

import ApplicantInfoSection from '@/UIComponents/Sections/ApplicantSections/applicantIncome'
import type { IApplicant } from '@/app/appData/applicantInfo';

type DataAccess = {
    application : formField[];
    onchangeCall?: (...args: any[]) => void;
    onvalidateCall?: (...args: any[]) => void;
}
type Props = {
    sectionInfo : Section;
    dataAccess? : DataAccess;
    applicantsInfo : Array<IApplicant>;
}

const income: React.FC<Props> = ({
    sectionInfo, dataAccess,applicantsInfo
}) =>{
    let ApplicantSections = [];
    
    for(let i=0; i<4; i++){
        
        ApplicantSections.push(
            <ApplicantInfoSection
                sectionInfo={sectionInfo}
                dataAccess={dataAccess}
                applicant={applicantsInfo[i]}/>)
    }

    if(dataAccess !== undefined)
    {
    return (
         <div>
            <div className="grid">
                <h2>{sectionInfo.sectionTitle} <span className="progressText">Step 2 of 4</span></h2>
            </div>
            <div className="grid">
                <p></p>
                <p><progress value={sectionInfo.percentageProgress} max="100" /></p>
                <p></p>
            </div>

            {ApplicantSections}
         </div>
    )
    }
}

export default income

    