import type { formField } from "@/app/appData/applicationInfo"; 
import { GetIncomeCategories, type IncomeCategory } from "@/lib/staticData";


export interface IApplicant {
  applicantId: number;
  applicantIsFirstTimeBuyer: formField; 
  incomeData: Array<formField>;
  expenditureData: Array<formField>;
}

export interface IApplicantData {
  applicants: Array<IApplicant>;
}

export async function GetApplicantData(): Promise<IApplicantData> {
  const applicants: IApplicant[] = [];

  let incomeCats: IncomeCategory[] = [];
  try {
    incomeCats = await GetIncomeCategories(); 
    console.log('Income Categories [applicantInfo] ', incomeCats);
  } catch (e) {
    console.error("[GetApplicantData] failed to load income categories", e);
  }

  for (let i = 0; i < 4; i++) { 
    const applicant: IApplicant = { 
      applicantId: i, 
      applicantIsFirstTimeBuyer: {
        id: 1000 + i,
        name: "isFirstTimeBuyer",
        value: false,
        type: "boolean",
        required: false,
        minAmount: 0,
        maxAmount: 0,
        labelText: "First-time buyer?",
        labelSubText: "",
        afterFieldText: "",
        isValid: true,
        errorMessage: "",
        validationGroup: 0,
      } as formField, 
      incomeData: [], 
      expenditureData: [], 
    };

    const toFormField = (dto: IncomeCategory, idx: number): formField => ({
      id: dto.id, 
      name: dto.name.replace(/\s+/g, ""), 
      value: 0, 
      type: "number", 
      required: false, 
      minAmount: 0, 
      maxAmount: 1_000_000_000, 
      labelText: dto.name, 
      labelSubText: dto.description ?? "", 
      afterFieldText: "monthly", 
      isValid: true, 
      errorMessage: "", 
      validationGroup: 33, 
    } as formField);

    if (Array.isArray(incomeCats) && incomeCats.length) { 
      for (let k = 0; k < incomeCats.length; k++) { 
        applicant.incomeData.push(toFormField(incomeCats[k], k)); 
      }
    }

    applicants.push(applicant); 
  }

  return { applicants }; 
}