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

const applicantExpenditure : React.FC<Props>= ({
    sectionInfo, dataAccess,applicant
}) =>{
console.log(applicant);
    let controlItems = []
    let cntIndex = 0;
    applicant.expenditureData.forEach(expenditureItem => {
        // Hack.. not time to fix proper.
        expenditureItem.id = cntIndex;
        if(expenditureItem !== undefined)
        {
            if(dataAccess !== undefined){
            controlItems.push(
            <GenericTextField
                field={applicant.expenditureData.filter(
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
        <h3 className={'appHead'}>Applicant {applicant.applicantId + 1} Expenditure</h3>
        {controlItems}
        </div>
) 

}

export default applicantExpenditure