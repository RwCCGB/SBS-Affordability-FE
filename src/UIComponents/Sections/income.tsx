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

const income: React.FC<Props> = ({
    sectionInfo, dataAccess,
}) =>{
    if(dataAccess !== undefined)
    {
    return (
         <div>
            <div className="grid">
                <h2>{sectionInfo.sectionTitle} <span className="progressText">Step 3 of 5</span></h2>
            </div>
            <div className="grid">
                <p></p>
                <p><progress value={sectionInfo.percentageProgress} max="100" /></p>
                <p></p>
            </div>
         </div>
    )
    }
}

export default income

    