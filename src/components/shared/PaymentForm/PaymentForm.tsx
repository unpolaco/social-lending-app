import React from 'react';
import {Formik, Form} from 'formik';
import {Button, Typography, TextField, CircularProgress} from '@material-ui/core';
import {FormWrapper} from './PaymentForm.styles';
import {usePaymentOnPlatformAccount} from '../../../hooks/usePaymentOnPlatformAccount';
import {usePaymentOnUserAccount} from '../../../hooks/usePaymentOnUserAccount';

export const PaymentForm: React.FC<any> = ({paymentType, accountBalance}) => {
    const {
        isFetchingPaymentOnPlatform,
        isErrorPaymentOnPlatform,
        fetchPaymentOnPlatformAccount,
        responsePaymentOnPlatform,
    } = usePaymentOnPlatformAccount();
    const {
        isFetchingPaymentOnUserAccount,
        isErrorPaymentOnUserAccount,
        fetchPaymentOnUserAccount,
        responsePaymentOnUserAccount,
    } = usePaymentOnUserAccount();

    if (isFetchingPaymentOnPlatform || isFetchingPaymentOnUserAccount) {
        return <CircularProgress />;
    }
    if (isErrorPaymentOnPlatform || isErrorPaymentOnUserAccount) {
        alert('Error');
    }

    function handleSubmit(values: any) {
        const paymentDetails = {amount: values.amount, userName: 'Bilbo_Baggins'};
        paymentType === 'paymentOnUserAccount' && fetchPaymentOnPlatformAccount(paymentDetails);
        paymentType === 'paymentOnPlatform' && fetchPaymentOnUserAccount(paymentDetails);
    }

    return (
        <>
            <Typography>Your platform account balance: {accountBalance} zł</Typography>

            <Formik initialValues={{amount: 0}} onSubmit={handleSubmit}>
                {({handleSubmit, values, handleChange, handleBlur, errors, touched, isValid}) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <FormWrapper>
                                {paymentType === 'paymentOnUserAccount' && <Typography>Make payment on your private account</Typography>}
                                {paymentType === 'paymentOnPlatform' && <Typography>Make payment on your platform account</Typography>}
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
