function ConvertToRequestObj(affordabilityApplication){
    // MATT REPLACE WITH WHAT WANT! 
    
    let requestObject = {
        fields:[]
      }
    
      affordabilityApplication.forEach(field => {
        requestObject.fields.push({name:field.name,value:field.value})
      });
      return requestObject;
}

export default {ConvertToRequestObj}