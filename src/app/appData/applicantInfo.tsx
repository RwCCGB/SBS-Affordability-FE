export interface IApplicant {
    applicantId:number;
    applicantIsFirstTimeBuyer:formField;
    incomeData:Array<formField>;
    expenditureData:Array<formField>
}
export interface IApplicantData {
    applicants:Array<IApplicant>
}
import type {formField} from "sbs-affordability-types"
import { GetIncomeCategories, type IncomeCategory } from "@/lib/staticData";

function mapIncomeToFormField(dto: IncomeCategory, idx: number): formField{
    return {
        id: dto.id,
        name: dto.name,
        value: 0,
        type: "number",
        required: false,
        minAmount:0,
        maxAmount:10,
        labelText:dto.name,
        labelSubtext: dto.description?? "",
        afterFieldText: "",
        isValid: true,
        errorMessage:'',
        validationGroup:33
    } as formField;
}

async function GetApplicantData() : Promise<IApplicant>{
    let applicantData: Array<IApplicant> = [];
    const applicants: IApplicant[] = [];
    let incomeCats: IncomeCategory[] = [];
    try{
        incomeCats = await GetIncomeCategories();
    }
    catch(err){
        console.log("Error GetApplicationData failed ", err);
        incomeCats = [];
    }
   
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

        applicant.incomeData = [];
        applicant.expenditureData = [];

        // START HARD CODE INCOME
        for (let i = 0; i < incomeCats.length; i++){
            applicant.incomeData.push(mapIncomeToFormField(incomeCats[i],i));
        }

        // END INCOME DATA HARDCODED 

        // Start hard coded expenditure items
        let expenditureItem = {
            id:33,
            name:"33",
            value:0,
            type:"number",
            required:false,
            minAmount:0,
            maxAmount:100,
            labelText:"Maintenance/Child Support",
            labelSubtext:"",
            afterFieldText: "monthly",
            isValid: true,
            errorMessage:'',
            validationGroup:33
        } as formField;

        let expenditureItem2 = {
            id:33,
            name:"33",
            value:0,
            type:"number",
            required:false,
            minAmount:0,
            maxAmount:100,
            labelText:"Nursery/Child Care Costs",
            labelSubtext:"Total child care costs including child care vouchers",
            afterFieldText: "monthly",
            isValid: true,
            errorMessage:'',
            validationGroup:33
        } as formField;

        let expenditureItem3 = {
            id:33,
            name:"33",
            value:0,
            type:"number",
            required:false,
            minAmount:0,
            maxAmount:100,
            labelText:"Tuition Fees",
            labelSubtext:"",
            afterFieldText: "monthly",
            isValid: true,
            errorMessage:'',
            validationGroup:33
        } as formField;

        applicant.expenditureData.push(expenditureItem);
        applicant.expenditureData.push(expenditureItem2);
        applicant.expenditureData.push(expenditureItem3);
        // End hard coded expenditure items.

        applicantData.push(applicant);
    }

    return applicantData;
}

export default {GetApplicantData};