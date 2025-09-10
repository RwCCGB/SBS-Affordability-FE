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
    maxPermittedLoanAmount : number
}

const result: React.FC<Props> = ({
    sectionInfo,dataAccess,maxPermittedLoanAmount
}) =>{
    if(dataAccess !== undefined)
    {
    return (
         <div>
            <div className="grid">
                <h2>{sectionInfo.sectionTitle} <span className="progressText">Step 4 of 4</span></h2>
            </div>
            <div className="grid">
                <p></p>
                <p><progress value={sectionInfo.percentageProgress} max="100" /></p>
                <p></p>
            </div>

            <div className='grid'>
                <div className="halfPanelLeft">
                    <p className='resultPanel'>
                        Maximum loan amount: £<strong>{maxPermittedLoanAmount}</strong>
                    </p>
                    <p><button>Reset Calculator</button></p>
                    <p>Please see the table below for the max LTV for your loan amount.</p>
                    <h3>Maximum LTV</h3>
                    <table className='resultTable'>
                        <tbody>
                            <tr className='alternateRow'>
                                <td>Up to £600,000</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>£600,001 - £800,000</td>
                                <td>85%</td>
                            </tr>
                            <tr className={'alternateRow'}>
                                <td>£800,001 - £1,000,000</td>
                                <td>80%</td>
                            </tr>
                            <tr>
                                <td>£1,000,000+</td>
                                <td>75%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               
                <div className='halfPanelRight'>
                <h2>What's next?</h2>
                    <p>Print a summary</p>
                    <button>Print</button>
                    <p>Log in to eMortgages by logging in or signing up</p>
                    <p><button>Login / Signup</button></p>
                </div>
            </div>
         </div>
    )
    }
}

export default result

    