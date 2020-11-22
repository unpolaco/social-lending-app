import React from 'react';
import {Formik, Form} from 'formik';
import {Button, Typography, TextField} from '@material-ui/core';
import {FormWrapper} from './PaymentForm.styles';

export const PaymentForm: React.FC = () => {
    function handleSubmit(values: any) {}

    return (
        <>
            <Typography>Make payment</Typography>

            <Formik initialValues={{amount: 0}} onSubmit={handleSubmit}>
                {({handleSubmit, values, handleChange, handleBlur, errors, touched, isValid}) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <FormWrapper>
                                <Typography>Repayment amount:</Typography>
                                <TextField
                                    autoFocus
                                    name="amount"
                                    type="number"
                                    label={'Enter amount *'}
                                    value={values.amount}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.amount && errors.amount)}
                                    helperText={touched.amount && errors.amount}
                                />
                                <Button type="submit" disabled={!isValid}>
                                    Confirm payment
                                </Button>
                            </FormWrapper>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};
