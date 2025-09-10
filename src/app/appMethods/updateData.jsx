const UpdateField = (
    e,
    affordabilityApplication,
    updateAffordabilityApplication,
    applicantData,
    updateApplicantData
    ) => {

    const editCollection = [...affordabilityApplication];
    const editApplicants = [...applicantData];

    if(e.target.name.includes("_")){
      let applicantIndex = parseInt(e.target.name.charAt(0));
      let fieldName = e.target.name.slice(2);

      editApplicants.forEach(applicant => {
        if(applicantIndex == applicant.applicantId){
          applicant.incomeData.forEach(item => {
            if(fieldName == item.name){
              item.value = e.target.value;
            }
          })
          applicant.expenditureData.forEach(item => {
            if(fieldName == item.name){
              item.value = e.target.value;
            }
          })
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