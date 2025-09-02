"use client";
import React from 'react';
import type {Section} from '@/app/appData/sectionInfo';

type DataAccess = {
    application : unknown;
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
    return (
        <section>
            <h2>{sectionInfo.sectionTitle}</h2>
        </section>
    )
}

export default ApplicationDetails

    