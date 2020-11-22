import React from 'react';
import {Formik, Form} from 'formik';
import {Button, Typography, TextField} from '@material-ui/core';
import {FormWrapper} from './PaymentForm.styles';

export const PaymentFormOnUserAccount: React.FC<any> = ({currentPage, fetchPaymentOnUserAccount}) => {
    function handleSubmit(values: any) {
        const userName = currentPage === 'lender' ? 'Samwise_Gamgee' : 'Bilbo_Baggins';
        const paymentDetails = {amount: values.amount, userName: userName};
        fetchPaymentOnUserAccount(paymentDetails);
    }
    return (
        <>
            <Formik initialValues={{amount: 0}} onSubmit={handleSubmit}>
                {({handleSubmit, values, handleChange, handleBlur, errors, touched, isValid}) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <FormWrapper>
                                <Typography>Make payment on your private account</Typography>
                                <TextField
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
