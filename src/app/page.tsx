
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

export default function Home() {
  const [hasValidated,updateHasValidated] = useState(false);
  const [currentSection, updateCurrentSection] = useState(0);

  const activeSection = getSectionById(currentSection)!;

  const [affordabilityApplication,
    updateAffordabilityApplication] = 
      useState(ApplicationInfo.GetFormData())
  
  
  const [applicantData,updateApplicantData] =
      useState(ApplicantInfo.GetApplicantData())

  
  const fieldChange = (e : React.FormEvent<HTMLInputElement>) => {
    UpdateField(e,
      affordabilityApplication,
      updateAffordabilityApplication,
      applicantData,
      updateApplicantData)
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

  let SectionControls = [];
  SectionControls.push(
    <ApplicationDetails 
      sectionInfo={activeSection}
      dataAccess={sectionData}/>);

  SectionControls.push(
    <ApplicantDetails
      sectionInfo={activeSection}
      dataAccess={sectionData}
      applicantsInfo={applicantData}/>)
  
    SectionControls.push(
      <IncomeSection 
        sectionInfo={activeSection}
        dataAccess={sectionData}
        applicantsInfo={applicantData}/>
    )

    SectionControls.push(
      <ExpenditureISection 
        sectionInfo={activeSection}
        dataAccess={sectionData}
        applicantsInfo={applicantData}/>)

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
