import React from 'react';
import type {DropDownItem} from '@/app/appData/DropDownItem';
import StaticDataLib from "@/lib/staticData";

async function GetRegions() : Promise<DropDownItem[]>{
    const regions = await StaticDataLib.GetRegions();

    return regions.map((region) => ({
            key: region.id,
            value: region.id,
            text: region.name,
        }));
}

const StaticData = {GetRegions};
export default StaticData;