import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool, 
};

function InputField({form, name, label, disabled}) {
    const {formState: { touchedFields, errors }} = form;
    const hasError = touchedFields[name] && errors[name];
    return (
        <div>
            <Controller 
                name={name} 
                control={form.control}
                render={({field}) => 
                    <TextField 
                        {...field} 
                        fullWidth
                        label={label}
                        disabled={disabled} 
                        error={!!hasError}
                        helperText={errors[name]?.message}
                />}
            />
        </div>
    );
}

export default InputField;