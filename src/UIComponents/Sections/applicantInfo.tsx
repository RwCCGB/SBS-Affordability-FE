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


const applicantInfo: React.FC<Props> = ({
    sectionInfo, dataAccess,applicantsInfo
}) =>{
    if(dataAccess !== undefined)
    {
 
    let ApplicantSections = [];
    for(let i=0; i<4; i++){
        ApplicantSections.push(
            <ApplicantPersonalDetails
                sectionInfo={sectionInfo}
                dataAccess={dataAccess}
                applicant={applicantsInfo[i]}/>)
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

    