import React from 'react';
import {Formik, Form} from 'formik';
import {Button, Typography, TextField, InputAdornment} from '@material-ui/core';
import {FormWrapper} from './PaymentForm.styles';
import {PaymentFormProps} from './PaymentForm.types';
import {PaymentFormValidator} from './PaymentForm.helpers';

export const PaymentFormOnPlatformAccount: React.FC<PaymentFormProps> = ({
    currentPage,
    fetchPaymentOnPlatformAccount,
    fetchAccountDetails,
}) => {
    async function handleSubmit(values: any) {
        const userName = currentPage === 'lender' ? 'Samwise_Gamgee' : 'Bilbo_Baggins';
        const paymentDetails = {amount: values.amount, userName: userName};
        await fetchPaymentOnPlatformAccount(paymentDetails);
        await fetchAccountDetails(userName);
    }
    return (
        <>
            <Formik initialValues={{amount: undefined}} validate={PaymentFormValidator} onSubmit={handleSubmit}>
                {({handleSubmit, values, handleChange, handleBlur, errors, touched, isValid}) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <FormWrapper>
                                <Typography>Make payment on your platform account</Typography>
                                <TextField
                                    name="amount"
                                    type="number"
                                    label={'Enter amount *'}
                                    value={values.amount ?? ''}
                                    id="amountPaymentOnPlatformAccount"
                                    InputProps={{endAdornment: <InputAdornment position="end">zł</InputAdornment>}}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.amount && errors.amount)}
                                    helperText={touched.amount && errors.amount}
                                />
                                <Button type="submit" data-testid="buttonPayment" disabled={!isValid} variant="outlined">
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
