"use client";
import React from 'react';
import type {Section} from '@/app/appData/sectionInfo';
import type { formField } from '@/app/appData/applicationInfo';

import GenericTextField from '../formControls/GenericTextboxControl';

type DataAccess = {
    application : formField[];
    onchangeCall?: (...args: any[]) => void;
    onvalidateCall?: (...args: any[]) => void;
}
type Props = {
    sectionInfo : Section;
    dataAccess? : DataAccess;
}

const ApplicationDetails: React.FC<Props> = ({
    sectionInfo, dataAccess,
}) =>{
    if(dataAccess !== undefined)
    {
    return (
         <div>
            <div className="grid">
                <p></p>
                <h2>{sectionInfo.sectionTitle} <span className="progressText">Step 1 of 5</span></h2>
                <p></p>
            </div>
            <div className="grid">
                <p></p>
                <p><progress value={sectionInfo.percentageProgress} max="100" /></p>
                <p></p>
            </div>

            <GenericTextField
                field={dataAccess.application.filter(
                    f => f.name == "loanAmount")}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall}
            />

            <GenericTextField
                field={dataAccess.application.filter(
                    f => f.name == "region")}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall}
            />

         </div>
    )
    }
}

export default ApplicationDetails

    