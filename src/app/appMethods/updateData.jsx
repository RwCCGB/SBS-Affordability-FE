const UpdateField = (
    e,
    affordabilityApplication,
    updateAffordabilityApplication,
    applicantData,
    updateApplicantData
    ) => {

    const editCollection = Array.isArray(affordabilityApplication) ? [...affordabilityApplication] : { ...affordabilityApplication};
    const editApplicants = Array.isArray(applicantData) ? [applicantData] : applicantData ? [{...applicantData}] : [];

    if(e.target.name.includes("_")){
      let applicantIndex = parseInt(e.target.name.charAt(0));
      let fieldName = e.target.name.slice(2);

      let appIndex = 0;
      editApplicants.forEach(applicant => {
        //console.log("gannin" + appIndex + " = " + applicantIndex)
        if(appIndex == applicantIndex){
          applicant.incomeData.forEach(item => {
            if(fieldName == item.name){
              item.value = e.target.value;
            }
            appIndex = appIndex + 1;
        });
      }
      updateApplicantData(editApplicants)
      });
    }
    else{
    let foundIndex = 0;
      console.log("ITS AN APP ONE")
    editCollection.forEach(field => {
      if(field.name == e.target.name){
        field.value = e.target.value;
      }
    });
    updateAffordabilityApplication(editCollection);
  }
  } 

  export default UpdateField