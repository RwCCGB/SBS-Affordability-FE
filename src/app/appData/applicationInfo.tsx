export interface formField {
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
  }

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
        }
      ]
      return formData;
    }
    
    export default {GetFormData}
  
       