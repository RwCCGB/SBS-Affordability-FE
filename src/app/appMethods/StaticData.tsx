import React from 'react';
import type {DropDownItem} from '@/app/appData/DropDownItem';

import StaticDataLib from "@/lib/staticData";
import expenditure from '@/UIComponents/Sections/expenditure';

async function GetRegions() : Promise<DropDownItem[]>{
    const regions = await StaticDataLib.GetRegions();

    return regions.map((region) => ({
            key: region.id,
            value: region.id,
            text: region.name,
        }));
}

async function GetExpenditureTypes() : Promise<T[]>{
    const expenditureTypes = await StaticDataLib.GetExpenditureTypes();

    return expenditureTypes.map((expenditure) => ({
        id: expenditure.id,
        type: expenditure.Type,
        text: expenditure.Text,
        subtext: expenditure.SubText,
    }));
}

async function GetIncomeTypes(): Promise<T[]>{
    const incomeTypes = await StaticDataLib.GetIncomeTypes();

    return incomeTypes.map((income) => ({
        id: income.id,
        type: income.Type,
        text: income.Text,
        subtext: income.SubText,
    }));
}

const StaticData = {GetRegions, GetIncomeTypes, GetExpenditureTypes};
export default StaticData;