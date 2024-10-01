import { InputIcon, Input, Label } from 'keep-react'

const IconInput = ({icon, placeholder, type, id, name, onChange, required, className, color, disabled, value}) => {
    return (
        <fieldset className="relative max-w-md">
            <Input value={value} disabled={disabled} className={className} onChange={onChange} required={required} placeholder={placeholder} type={type} id={id} name={name} color={color}/>
            <InputIcon>
                {icon}
            </InputIcon>
        </fieldset>
    );    
};

const LabelInput = ({onChange, placeholder, type, id, name, label}) => {
    return(
        <fieldset className="max-w-md space-y-1">
            <Label htmlFor={id}>{label}</Label>
            <Input onChange={onChange} id={id} name={name} placeholder={placeholder} type={type} color='primary'/>
        </fieldset>
    );
};

const DefaultInput = ({onChange, placeholder, type, id, name}) => {
    return <Input onChange={onChange} placeholder={placeholder} type={type} id={id} name={name}/>
};

export {DefaultInput, LabelInput, IconInput}