import { formField } from "@/app/appData/applicationInfo"
import { DropDownItem } from "@/app/appData/DropDownItem";

type Props = {
    field:formField[];
    onchange?: (...args: any[]) => void;
    onvalidate?: (...args: any[]) => void;
    selectableOptions:DropDownItem[]
}

const GenericDropDownControl  : React.FC<Props> = ({
    field,
    onchange,
    onvalidate,
    selectableOptions}) => 
    {
        let reqAsterixClass = "hidden";
        if(field[0].required){
            reqAsterixClass = "requiredAsterix";
        }

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
            <label 
                className="formLabel"
                htmlFor={"ddl" + field[0].name}>
                <span className={reqAsterixClass}>*</span>
                {field[0].labelText}
                <br/><span className="labelSubtext">
                    {field[0].labelSubtext}
                </span>
            </label>
                <select 
                    onChange={onchange} 
                    value={field[0].value}
                    onBlur={onvalidate} 
                    name={field[0].name}
                    id={"ddl" + field[0].name}>
                    {selectableOptions.map((e, key) => {
                        return <option value={e.value} key={key}>{e.text}</option>
                    })} 
                </select>
                <span className="postAppendField">
                    {field[0].afterFieldText}
                </span>
            </div>   
            </div>
        )
    }
export default GenericDropDownControl