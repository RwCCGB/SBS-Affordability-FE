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
          name:"loanAmount",
          value:0,
          type:"number",
          required:true,
          minAmount:1,
          maxAmount:10,
          labelText:"The loan amount £",
          labelSubtext:"Sub Text labe for loan amount",
          afterFieldText: "Somat else",
          isValid: true,
          errorMessage:'',
          validationGroup:0
        },
        {
          id:2,
          name:"purchasePrice",
          value:0,
          type:"number",
          required:true,
          minAmount:10000,
          maxAmount:1000000,
          labelText:"The purchase price £",
          labelSubtext:"Sub Text label for purchase price",
          afterFieldText: "monthly",
          isValid: true,
          errorMessage:'',
          validationGroup:0
        },
        {
          id:3,
          name:"applicantCount",
          value:0,
          type:"number",
          required:true,
          minAmount:1,
          maxAmount:4,
          labelText:"Number of applicants",
          labelSubtext:"Sub Text label for applicants",
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
          maxAmount:10000,
          labelText:"Region of property",
          labelSubtext:"Sub Text label for region of property",
          afterFieldText: "afterfield",
          isValid: true,
          errorMessage:'',
          validationGroup:0
        },
        {
            id:5,
            name:"firstTimeBuyer",
            value:0,
            type:"select",
            required:true,
            minAmount:1,
            maxAmount:0,
            labelText:"First Time buyer",
            labelSubtext:"Are you a first time buyer",
            afterFieldText: "Obvious question!",
            isValid: true,
            errorMessage:'',
            validationGroup:1
          }
      ]
      return formData;
    }
    
    export default {GetFormData}
  
       