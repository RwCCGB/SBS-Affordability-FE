
"use client";
import { useState,useEffect } from 'react'
import Header from "@/UIComponents/pageElements/header";

import ApplicationDetails from '@/UIComponents/Sections/applicationDetails';
import ApplicantDetails from '@/UIComponents/Sections/applicantInfo';
import IncomeSection from '@/UIComponents/Sections/income';
import ExpenditureISection from '@/UIComponents/Sections/expenditure';
import ResultSection from '@/UIComponents/Sections/result';


import ApplicationInfo from '@/app/appData/applicationInfo';
import UpdateField from '@/app/appMethods/updateData';
import ValidateField from '@/app/appMethods/validation';
import DataConversion from '@/app/appMethods/dataConversion';

import { getSectionById } from '@/app/appData/sectionInfo';

import ApplicantInfo from '@/app/appData/applicantInfo';

import type { IApplicant, IApplicantData } from "@/app/appData/applicantInfo"; 
import { GetApplicantData } from "@/app/appData/applicantInfo"; 

import type { formField } from "@/app/appData/applicationInfo"; 
import type { JSX } from "react";
import ApplicantIncome from "@/UIComponents/Sections/ApplicantSections/applicantIncome"; 
import { GetIncomeCategories, type IncomeCategory } from "@/lib/staticData";

export default function Home() {
  const [hasValidated,updateHasValidated] = useState(false);
  const [currentSection, updateCurrentSection] = useState(0);

  const activeSection = getSectionById(currentSection)!;

  const applicants = GetApplicantData();

  const [affordabilityApplication,
    updateAffordabilityApplication] = 
      useState(ApplicationInfo.GetFormData())
  
  
  const [applicantData,updateApplicantData] =
     useState<IApplicantData | null>(null);

  
  const fieldChange = (e : React.FormEvent<HTMLInputElement>) => {
    UpdateField(e,
      affordabilityApplication,
      updateAffordabilityApplication,
      applicantData,
      )
  }

  const pageValidate = (e : any) => {
    e.preventDefault();
    updateAffordabilityApplication(
      affordabilityApplication.map(
        function(field) { return ValidateField(field, currentSection); })
    )
    updateHasValidated(true);
    
    let appValCheck = affordabilityApplication.filter(
      f => f.validationGroup == currentSection)

    let isPageValid = true;
    appValCheck.forEach(fieldToCheck => {
      if(!fieldToCheck.isValid) {isPageValid = false}
    });

    if(isPageValid){
      let nextPage = currentSection + 1;
      updateCurrentSection(nextPage);
    }
  }

  const validateInput = (e : React.FormEvent<HTMLInputElement>) => 
  {
    e.preventDefault();
    if(hasValidated) {
      updateAffordabilityApplication(
        affordabilityApplication.map(
          function(field) { return ValidateField(field, currentSection); })
        )
    }
  }

  function convertToRequestObject(e : React.FormEvent<HTMLInputElement>){
    e.preventDefault();
    let requestObject = 
      DataConversion.ConvertToRequestObj(
        affordabilityApplication)
        console.log(requestObject)
  }
  
  function StepBack(e : any){
    console.log("goin in")
    e.preventDefault();
    let backPage = currentSection - 1;
      updateCurrentSection(backPage);
  }

  const sectionData = {
    application:affordabilityApplication,
    onchangeCall:fieldChange,
    onvalidateCall:validateInput
  }

  // START
  let incomeCats: IncomeCategory[] = [];
  for (let i = 0; i < 4; i++) { 
    const applicant: IApplicant = { 
      applicantId: i, 
      incomeData: [{
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
      }], 
      expenditureData: [],
    };
    applicantData?.applicants.push(applicant);
    if(applicantData?.applicants.length ===0){
    updateApplicantData(applicantData);
    }

    //if (Array.isArray(incomeCats) && incomeCats.length) { 
    //  for (let k = 0; k < incomeCats.length; k++) { 
    //    applicant.incomeData.push(incomeCats[k], k); 
    //  }
    //}

    
  }

  // STOP

  let SectionControls = [];
  SectionControls.push(
    <ApplicationDetails 
      sectionInfo={activeSection}
      dataAccess={sectionData}/>);

  SectionControls.push(
    <ApplicantDetails
      sectionInfo={activeSection}
      dataAccess={sectionData}
      applicantsInfo={applicantData?.applicants ?? []}/>)
  
    SectionControls.push(
      <IncomeSection 
        sectionInfo={activeSection}
        dataAccess={sectionData}
        applicantsInfo={applicantData?.applicants ?? []}
        updateApplicantData={updateApplicantData}/>
    )

    SectionControls.push(
      <ExpenditureISection 
        sectionInfo={activeSection}
        dataAccess={sectionData}
        applicantsInfo={applicantData?.applicants ?? []}/>)

    SectionControls.push(
      <ResultSection 
        sectionInfo={activeSection}
        dataAccess={sectionData}/>)
  
  return (
    <div>
      <header>
        <Header/>
      </header>
      <section>
        <form>
          {
            SectionControls[currentSection]
          } 
          <div className='grid'>
<p>
</p>
<p className='btnContainer'>
  <button 
    className={currentSection > 0 && currentSection < 4 ? 'display' : 'hidden'} 
    onClick={(e => StepBack(e))}
    id="btnBack" 
    name="btnBack">
    Back
  </button>
  <button 
    className={currentSection < 4 ? 'display' : 'hidden'} 
    onClick={(e => pageValidate(e))} 
    id="btnNext" 
    name="btnBack">
    Next
  </button>
</p>
<p>
</p>
</div>
        </form>
      </section>
    </div>
  )
}

