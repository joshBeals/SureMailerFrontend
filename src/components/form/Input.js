import { FormGroup, Input, Label } from "reactstrap";
import { Controller, useForm, useFormContext } from "react-hook-form";
import findInputError from "../../helpers/findInputError";
import isFormInvalid from "../../helpers/isFormInvalid";

const MyInput = ({ label, name, type, id, placeholder }) => {
    const {
        formState: { errors },
        control,
    } = useFormContext({
        defaultValues: {
            name: "",
        },
    });

    const inputError = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputError);

    return (
        <FormGroup>
            <Label for={id}>{label}</Label>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <Input
                        {...field}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        type={type}
                        invalid={errors[name] ? true : false}
                    />
                )}
            />
            {errors[name]?.type === "required" && (
                <p className="text-danger">{label} is required</p>
            )}
        </FormGroup>
    );
};

export default MyInput;
