import { formField } from "@/app/appData/applicationInfo"
import { DropDownItem } from "@/app/appData/DropDownItem";

type Props = {
    field:formField[];
    onchange?: (...args: any[]) => void;
    onvalidate?: (...args: any[]) => void;
    orientation:string;
    options:DropDownItem[]
}

const GenericRadioButtons : React.FC<Props> = ({
    field,
    onchange,
    onvalidate,
    orientation,
    options}) => 
    {
        console.log(field)
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
                <label htmlFor={"txt" + field[0].name} 
                    className="formLabel">
                    <span className={reqAsterixClass}>*</span>
                    {field[0].labelText}
                    <br/><span className="labelSubtext">
                        {field[0].labelSubtext}
                    </span>
                </label>
                <div>
                {options.map((e, key) => {
                        if(orientation == 'horizontal')
                        {
                            return (
                            <span key={key}>
                                 <input 
                                    type="radio"
                                    value={e.value} 
                                    name={field[0].name}
                                    onChange={onchange} 
                                    onBlur={onvalidate}/>
                                 <label>{e.text}</label> &nbsp;
                            </span>
                        )
                        }
                        if(orientation == 'vertical'){                        
                        return (
                            <label key={key}>
                            <input 
                                    type="radio"
                                    value={e.value} 
                                    name={field[0].name}
                                    onChange={onchange} 
                                    onBlur={onvalidate}/>
                                    {e.text}
                            </label>
                        )
                    }
                    })}

  </div>
                <span className="postAppendField">
                    {field[0].afterFieldText}
                </span>
            </div>


</div>
    )
}
export default GenericRadioButtons