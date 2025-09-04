export interface IApplicant {
    applicantId:number;
}
export interface IApplicantData {
    applicants:Array<IApplicant>
}


function GetApplicantData(){
    let applicantData: Array<IApplicant> = [];
    
    let applicant1 = {} as IApplicant;
    applicant1.applicantId = 1;

    let applicant2 = {} as IApplicant;
    applicant2.applicantId = 2;
    
    applicantData.push(applicant1);
    applicantData.push(applicant2);

    return applicantData;
}

export default {GetApplicantData};