import { FormGroup, Input, Label } from "reactstrap";

const MyInput = ({ label, name, type, id, placeholder }) => {
    return (
        <FormGroup>
            <Label for={id}>{label}</Label>
            <Input id={id} name={name} placeholder={placeholder} type={type} />
        </FormGroup>
    );
};

export default MyInput;
