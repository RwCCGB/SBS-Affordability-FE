"use client";
import React from 'react';
import type {Section} from '@/app/appData/sectionInfo';
import type { formField } from '@/app/appData/applicationInfo';

import GenericTextField from '../formControls/GenericTextboxControl';
import GenericDropDownControl from '../formControls/GenericDropDownControl';
import GenericRadioButtons from '../formControls/GenericRadioButtons';

import StaticData from '@/app/appMethods/StaticData';

// We need to use state, previous version didn't
import {useEffect, useState} from "react";
import { DropDownItem } from '@/app/appData/DropDownItem';

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
    const [regions, setRegions] = useState<DropDownItem[]>([
        {key: 0, value: 0, text: "Please select a region"}
    ])
    useEffect(() =>{
        let cancelled = false;
        (async ()=>{
            const regionsList = await StaticData.GetRegions();
            if(!cancelled){
                setRegions([{key: 0, value:0, text: "Please select a region"}, ...regionsList])
            }
        })();
        return () => {
            cancelled=true;
        }
    }, [dataAccess]);

    if(dataAccess !== undefined)
    {
            let NumberOfApplicantsOptions = [];
            NumberOfApplicantsOptions.push({
                key:1,value:1,text:"1"
            })
            NumberOfApplicantsOptions.push({
                key:2,value:2,text:"2"
            })
            NumberOfApplicantsOptions.push({
                key:3,value:3,text:"3"
            })
            NumberOfApplicantsOptions.push({
                key:4,value:4,text:"4"
            })
    return (
         <div>
            <div className="grid">
                
                <h2>{sectionInfo.sectionTitle} <span className="progressText">Step 1 of 5</span></h2>
               
            </div>
            <div className="grid">
                <p></p>
                <p><progress value={sectionInfo.percentageProgress} max="100" /></p>
                <p></p>
            </div>

            <GenericRadioButtons
                field={dataAccess.application.filter(
                f => f.name == "numberOfApplicants")}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall}
                orientation="horizontal"
                options={NumberOfApplicantsOptions}
            />

            <GenericTextField
                field={dataAccess.application.filter(
                    f => f.name == "adultDependancies")}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall
                }
            />

            <GenericTextField
                field={dataAccess.application.filter(
                    f => f.name == "childDependancies")}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall}
            />  

            <GenericTextField
                field={dataAccess.application.filter(
                    f => f.name == "propertyPrice")}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall}
            />  

            <GenericTextField
                field={dataAccess.application.filter(
                    f => f.name == "loanAmount")}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall}
            />  

            <GenericTextField
                field={dataAccess.application.filter(
                    f => f.name == "interestRate")}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall}
            />  

            <GenericDropDownControl
                field={dataAccess.application.filter(
                f => f.name == "region")}
                onchange={dataAccess.onchangeCall}
                onvalidate={dataAccess.onvalidateCall}
                selectableOptions={regions}
            />            
         </div>
    )
    }
}

export default ApplicationDetails

    