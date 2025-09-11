import React from 'react';
import type {Section} from '@/app/appData/sectionInfo';
import type {formField} from '@/app/appData/applicationInfo';
import type { IApplicant } from '@/app/appData/applicantInfo';

import GenericTextField from '@/UIComponents/formControls/GenericTextboxControl';
import expenditure from '../expenditure';

type DataAccess = {
    application : formField[];
    onchangeCall?: (...args: any[]) => void;
    onvalidateCall?: (...args: any[]) => void;
}
type Props = {
    sectionInfo : Section;
    dataAccess? : DataAccess;
    applicant : IApplicant;
}

const applicantIncome : React.FC<Props>= ({
    sectionInfo, dataAccess,applicant
}) =>{

    let controlItems = []
    let cntIndex = 0;
    applicant.incomeData.forEach(incomeItem => {
        // Hack.. not time to fix proper.
        incomeItem.id = cntIndex;
        if(incomeItem !== undefined)
        {
            if(dataAccess !== undefined){
            controlItems.push(
            <GenericTextField
                field={applicant.incomeData.filter(
                    f => f.id == cntIndex)}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall}
                applicantId={applicant.applicantId}/>)
        }
        }
        cntIndex++;
    })
    return (
        <div>
        <h3 className={'appHead'}>Applicant {applicant.applicantId + 1} Income</h3>
        {controlItems}
        </div>
) 

}

export default applicantIncome