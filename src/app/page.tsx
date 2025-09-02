
"use client";
import { useState,useEffect } from 'react'
import Header from "@/UIComponents/pageElements/header";

import ApplicationDetails from '@/UIComponents/Sections/applicationDetails';
import sectionApplicantInfo from '@/UIComponents/Sections/applicantInfo';
import sectionIncome from '@/UIComponents/Sections/income';
import sectionExpenditure from '@/UIComponents/Sections/expenditure';
import sectionResult from '@/UIComponents/Sections/result';

import SectionInfo from '@/app/appData/sectionInfo';
import FormData from '@/app/appData/applicationInfo';
import UpdateField from '@/app/appMethods/updateData';
import ValidateField from '@/app/appMethods/validation';
import DataConversion from '@/app/appMethods/dataConversion';

import { getSectionById } from '@/app/appData/sectionInfo';

export default function Home() {
  const [hasValidated,updateHasValidated] = useState(false);
  const [currentSection, updateCurrentSection] = useState(0);

  const section0 = getSectionById(0)!;

  const [affordabilityApplication,
    updateAffordabilityApplication] = 
      useState(FormData.GetFormData())
  
  const fieldChange = (e : React.FormEvent<HTMLInputElement>) => {
    UpdateField(e,
      affordabilityApplication,
      updateAffordabilityApplication)
  }

  const pageValidate = (e : React.FormEvent<HTMLInputElement>) => {
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
    if(hasValidated) {
    e.preventDefault();
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
  
  function StepBack(e : React.FormEvent<HTMLInputElement>){
    console.log("goin in")
    e.preventDefault();
    let backPage = currentSection - 1;
      updateCurrentSection(backPage);
  }

  let sectionsArray = [];
  const sectionData = {
    application:affordabilityApplication,
    onchangeCall:fieldChange,
    onvalidateCall:validateInput
  }

  return (
    <div>
      <Header/>
      
     <p>Hello Graham</p>
     <ApplicationDetails sectionInfo={section0}/>

    </div>
  );
}
