export interface IApplicant {
    applicantId:number;
    applicantIsFirstTimeBuyer:formField;
    incomeData:Array<formField>;
    expenditureData:Array<formField>
}
export interface IApplicantData {
    applicants:Array<IApplicant>
}
import type {formField} from "sbs-affordability-types/"
//import type { formField } from '@/app/appData/applicationInfo';

async function GetApplicantData(){
    let applicantData: Array<IApplicant> = [];
    
    for (let appCnt = 0; appCnt < 4; appCnt++){
        let applicant = {} as IApplicant;
        applicant.applicantId = appCnt;

        applicant.applicantIsFirstTimeBuyer = {
            id:1000,
            name:"isFirstTimeBuyer",
            value:0,
            type:"number",
            required:false,
            minAmount:0,
            maxAmount:1,
            labelText:"Is this applicant a first time buyer",
            labelSubtext:"Have they bought a house before?",
            afterFieldText: "",
            isValid: true,
            errorMessage:'',
            validationGroup:22
        }

        applicant.incomeData = [] as Array<formField>;
        applicant.expenditureData = [] as Array<formField>;

        // START HARD CODE INCOME
        
        
        let incomeTyoe = {
            id:555,
            name:"pension",
            value:0,
            type:"number",
            required:false,
            minAmount:0,
            maxAmount:10,
            labelText:"Pension Main Label",
            labelSubtext:"pension sub text",
            afterFieldText: "monthly",
            isValid: true,
            errorMessage:'',
            validationGroup:33
        } as formField;

        let incomeTyoe2 = {
            id:13,
            name:"taxEvasion",
            value:0,
            type:"number",
            required:false,
            minAmount:0,
            maxAmount:10,
            labelText:"FROM ASYNC tax evasion Main Label",
            labelSubtext:"tax evasion sub text",
            afterFieldText: "for life",
            isValid: true,
            errorMessage:'',
            validationGroup:33
        } as formField;
        
        applicant.incomeData.push(incomeTyoe);
        applicant.incomeData.push(incomeTyoe2);
        // END INCOME DATA HARDCODED 

        // Start hard coded expenditure items
        let expenditureItem = {
            id:33,
            name:"alcohol",
            value:0,
            type:"number",
            required:false,
            minAmount:0,
            maxAmount:100,
            labelText:"Cans of strong cider cost per dayr",
            labelSubtext:"This is a field to say how much you drink and how much it costs",
            afterFieldText: "daiiy",
            isValid: true,
            errorMessage:'',
            validationGroup:33
        } as formField;

        applicant.expenditureData.push(expenditureItem);
        // End hard coded expenditure items.

        applicantData.push(applicant);
    }

    return applicantData;
}

export default {GetApplicantData};