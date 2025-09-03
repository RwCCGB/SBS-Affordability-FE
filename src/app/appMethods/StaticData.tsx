import React from 'react';
import type {DropDownItem} from '@/app/appData/DropDownItem';

function GetRegions(){

    let Regions = [];
    
    Regions.push({key:0,value:0,text:"Please select a region"})
    Regions.push({key:1,value:1,text:"Yorkshire and Humber"})
    Regions.push({key:2,value:2,text:"Northern Ireland"})
    Regions.push({key:3,value:3,text:"Royal Berkshire"})
    Regions.push({key:4,value:4,text:"London"})

    return Regions;
}

export default {GetRegions}