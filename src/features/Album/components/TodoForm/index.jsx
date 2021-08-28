import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm({onSubmit}) {
    const schema = yup.object().shape({
        title: yup.string()
        .required("Please enter!!")
        .min(5,"Too short"),
    });
    const form = useForm({
        defaultValues: {
            title: "",
        },
        resolver: yupResolver(schema),
    })

    const handSubmit = (values) => {
        onSubmit(values)
        form.reset();
    }
    return (
        <form onSubmit={form.handleSubmit(handSubmit)}>
            Todo Form
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;