import applicantInfo from "@/UIComponents/Sections/applicantInfo";
import ApplicationDetails from "@/UIComponents/Sections/applicationDetails";
//import formField from "sbs-affordability-types/"
/*export interface formField {
    id: number;
    name: string;
    value: number;
    type:string,
    required:boolean,
    minAmount:number,
    maxAmount:number,
    labelText:string,
    labelSubtext:string,
    afterFieldText: string,
    isValid: boolean,
    errorMessage:string,
    validationGroup:number
  }*/

function GetFormData(){
    const formData = 
    [
        {
          id:1,
          name:"numberOfApplicants",
          value:0,
          type:"number",
          required:true,
          minAmount:1,
          maxAmount:4,
          labelText:"Total number of applicants",
          labelSubtext:"",
          afterFieldText: "",
          isValid: true,
          errorMessage:'',
          validationGroup:0
        },
        {
          id:2,
          name:"adultDependancies",
          value:0,
          type:"number",
          required:true,
          minAmount:0,
          maxAmount:10,
          labelText:"Total number of adult dependants",
          labelSubtext:"The number of adults who are financially dependant on any of the applicants",
          afterFieldText: "",
          isValid: true,
          errorMessage:'',
          validationGroup:0
        },
        {
          id:3,
          name:"childDependancies",
          value:0,
          type:"number",
          required:true,
          minAmount:0,
          maxAmount:10,
          labelText:"Total number of child dependants",
          labelSubtext:"The number of children who are financially dependant on any of the applicants",
          afterFieldText: "",
          isValid: true,
          errorMessage:'',
          validationGroup:0,
        },
        {
          id:4,
          name:"region",
          value:0,
          type:"select",
          required:true,
          minAmount:1,
          maxAmount:10,
          labelText:"Region of property",
          labelSubtext:"",
          afterFieldText: "",
          isValid: true,
          errorMessage:'',
          validationGroup:0
        },
        {
          id:5,
          name:"propertyPrice",
          value:0,
          type:"number",
          required:true,
          minAmount:0,
          maxAmount:100000,
          labelText:"Property Price",
          labelSubtext:"For Shared Ownership input the share of the total property price",
          afterFieldText: "",
          isValid: true,
          errorMessage:'',
          validationGroup:0,
        },
        {
          id:5,
          name:"loanAmount",
          value:0,
          type:"number",
          required:true,
          minAmount:0,
          maxAmount:100000,
          labelText:"Loan amount",
          labelSubtext:"",
          afterFieldText: "",
          isValid: true,
          errorMessage:'',
          validationGroup:0,
        },
        {
          id:5,
          name:"interestRate",
          value:0,
          type:"number",
          required:true,
          minAmount:0,
          maxAmount:10,
          labelText:"Interest Rate",
          labelSubtext:"(if known)",
          afterFieldText: "",
          isValid: true,
          errorMessage:'',
          validationGroup:0,
        },
        {
          id:5,
          name:"isNewBuild",
          value:0,
          type:"number",
          required:true,
          minAmount:0,
          maxAmount:1,
          labelText:"Is the property a new build?",
          labelSubtext:"",
          afterFieldText: "",
          isValid: true,
          errorMessage:'',
          validationGroup:0,
        },
        {
          id:5,
          name:"longTermRequired",
          value:0,
          type:"number",
          required:true,
          minAmount:0,
          maxAmount:1,
          labelText:"Do the applicants wish to take out a long=term fixed rate mortgage? (5 years oir more)",
          labelSubtext:"",
          afterFieldText: "",
          isValid: true,
          errorMessage:'',
          validationGroup:0,
        }
      ]
      return formData;
    }

    export default {GetFormData}
  
       