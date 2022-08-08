import React from 'react'
import { FormInputlabel, Input, Group } from './FormInput.styles';

const FormInput = ({ label, inputOptions }) => {
    return (
        <Group>
            <Input {...inputOptions} />
            {
                label &&
                (
                    <FormInputlabel shrink={inputOptions.value.length}>
                        {label}
                    </FormInputlabel>
                )
            }
        </Group>
    )
}

export default FormInput;