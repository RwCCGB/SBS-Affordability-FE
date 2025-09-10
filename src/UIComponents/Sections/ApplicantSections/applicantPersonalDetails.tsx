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

const applicantPersonalDetails : React.FC<Props>= ({
    sectionInfo, dataAccess,applicant
}) =>{
    
    let controlItems = []
    let cntIndex = 0;
    //console.log(applicant);
    
    // Horrid hack...
    let fields = []
    fields.push(applicant.applicantIsFirstTimeBuyer);
 /*   
    controlItems.push(<GenericTextField
        field={fields.filter(
            f => f.name == "applicantIsFirstTimeBuyer")}
        onchange={dataAccess.onchangeCall}
        onvalidate={dataAccess.onvalidateCall}
        applicantId={applicant.applicantId}/>)

    
    applicants.forEach(applicant => {
        if(dataAccess !== undefined)
        {
       /* controlItems.push(<GenericTextField
                field={applicant. incomeData.filter(
                    f => f.id == cntIndex)}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall}/>)
        }      */
        //console.log("GRAHAM")
        /*
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
                onvalidate={dataAccess.onvalidateCall}/>)
        }
        }
        cntIndex++;
        }
    })*/
    return (
        <div>
            <div>
        <h3>Applicant Income Info {applicant.applicantId}</h3>
        {controlItems}
        </div>

        </div>
) 

}

export default applicantPersonalDetails