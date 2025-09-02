const UpdateField = (
    e,
    affordabilityApplication,
    updateAffordabilityApplication
    ) => {

    const editCollection = [...affordabilityApplication];

    let foundIndex = 0;
    
    editCollection.forEach(field => {
      if(field.name == e.target.name){
        field.value = e.target.value;
      }
    });
    updateAffordabilityApplication(editCollection);
  } 

  export default UpdateField