"use client";
import React from 'react';
import type {Section} from '@/app/appData/sectionInfo';
import type {formField} from '@/app/appData/applicationInfo';

import GenericTextField from '../formControls/GenericTextboxControl';
import GenericDropDownControl from '../formControls/GenericDropDownControl';
import GenericRadioButtons from '../formControls/GenericRadioButtons';
import ApplicantPersonalDetails from './ApplicantSections/applicantPersonalDetails';
import StaticData from '@/app/appMethods/StaticData';
import type { IApplicant } from '@/app/appData/applicantInfo';
import type { JSX } from 'react';

type DataAccess = {
    application : formField[];
    onchangeCall?: (...args: any[]) => void;
    onvalidateCall?: (...args: any[]) => void;
}
type Props = {
    sectionInfo : Section;
    dataAccess? : DataAccess;
    applicantsInfo? : IApplicant[] | null;
}


const applicantInfo: React.FC<Props> = ({
    sectionInfo, dataAccess,applicantsInfo
}) =>{
    if(!dataAccess || !Array.isArray(dataAccess.application)){
        return;
    }
    if(dataAccess !== undefined)
    {
    
    const list: IApplicant[] = Array.isArray(applicantsInfo) ? applicantsInfo : [];
    if(list.length ===0){
        return <div/>;
    }
    let ApplicantSections : JSX.Element[] = [];;
    for(let i=0; i<list.length; i++){
        const applicant = list[i];
        if(!applicant) continue;
        ApplicantSections.push(
            <ApplicantPersonalDetails
                key={`applicant-${applicant.applicantId}`}
                sectionInfo={sectionInfo}
                dataAccess={dataAccess}
                applicant={applicant}/>)
        }
    return (
         <div>
            <div className="grid">
                <h2>{sectionInfo.sectionTitle} <span className="progressText">Step 2 of 5</span></h2>
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

export default applicantInfo

    