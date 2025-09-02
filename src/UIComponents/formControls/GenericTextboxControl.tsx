import { formField } from "@/app/appData/applicationInfo"

type Props = {
    field:formField[];
    onchange?: (...args: any[]) => void;
    onvalidate?: (...args: any[]) => void;
}

const GenericTextField : React.FC<Props> = ({
    field,
    onchange,
    onvalidate}) => 
    {
        let reqAsterixClass = "hidden";
        if(field[0].required){
            reqAsterixClass = "requiredAsterix";
        }

        let inputType = 'text';
        if(field[0].type == "number"){ inputType="number"}
        
        return (
            <div>
                <div className="grid">
                    <p></p>
                    <small className="errorFieldText" id="invalid-helper">
                        {field[0].errorMessage}
                    </small> 
                    <p></p>    
                </div>   
                <div className="grid">
                    <label htmlFor={"txt" + field[0].name} 
                        className="formLabel">
                        <span className={reqAsterixClass}>*</span>
                        {field[0].labelText}
                        <br/><span className="labelSubtext">
                            {field[0].labelSubtext}
                        </span>
                    </label>
                    <input
                        value={field[0].value}
                        id={"txt" + field[0].name}
                        className="inputField"
                        onChange={onchange} 
                        onBlur={onvalidate}
                        name={field[0].name} 
                        type={inputType}
                        aria-invalid={!field[0].isValid}
                        aria-describedby="invalid-helper">    
                    </input>
                    <span className="postAppendField">
                        {field[0].afterFieldText}
                    </span>
                </div>
            </div>
        )
            
    }
export default GenericTextField