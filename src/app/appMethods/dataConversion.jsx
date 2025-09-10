function ConvertToRequestObj(
  affordabilityApplication,
  applicantData){
    
    let applicationData = []
    let applicantsData = []

    affordabilityApplication.forEach(field => {
      applicationData.push({name:field.name,value:field.value})
    });

    applicantData.forEach(thisApplicant => {
      applicantsData.push({"applicantId":thisApplicant.applicantId})
    });

    let requestObject = {
      "applicationData":applicationData,
      "applicantData":applicantsData
    }
    
    return requestObject;
}

export default {ConvertToRequestObj}