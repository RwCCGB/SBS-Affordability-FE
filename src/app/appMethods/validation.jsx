function ValidateField(affordabilityField,sectionIndex){

    if(sectionIndex == affordabilityField.validationGroup){
    if(affordabilityField.value < affordabilityField.minAmount || 
      affordabilityField.value >= affordabilityField.maxAmount
    ){
      affordabilityField.errorMessage = "Should be between " + 
      affordabilityField.minAmount.toString() + " and " + 
      affordabilityField.maxAmount.toString(); 
      affordabilityField.isValid = false;
      return affordabilityField;
    }
    else{
      affordabilityField.isValid = true
      affordabilityField.errorMessage = "";
    }
  }
    return affordabilityField;
  }

  export default ValidateField