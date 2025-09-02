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

const applicantInfo: React.FC<Props> = ({
    sectionInfo, dataAccess,
}) =>{
    if(dataAccess !== undefined)
    {
    return (
         <div>
            <div className="grid">
                <p></p>
                <h2>{sectionInfo.sectionTitle} <span className="progressText">Step 2 of 5</span></h2>
                <p></p>
            </div>
            <div className="grid">
                <p></p>
                <p><progress value={sectionInfo.percentageProgress} max="100" /></p>
                <p></p>
            </div>

            <GenericTextField
                field={dataAccess.application.filter(
                    f => f.name == "purchasePrice")}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall}
            />

         </div>
    )
    }
}

export default applicantInfo

    