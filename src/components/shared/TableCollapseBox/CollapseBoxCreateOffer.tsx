import React from 'react';
import {CreateOfferWrapper, FormikWrapper, FieldWrapper, FieldTitleTypography} from './CollapseBox.styles';
import {Formik, Form} from 'formik';
import {Button, Typography, TextField, Slider, InputAdornment} from '@material-ui/core';
import {OfferData} from '../Table/Table.types';
import {CollapseBoxCreateOfferValidator} from './CollapseBoxCreateOffer.helpers';

interface CollapseBoxCreateOfferProps {
    row: OfferData;
    handleSaveNewOffer: any;
}

export const CollapseBoxCreateOffer: React.FC<CollapseBoxCreateOfferProps> = ({row, handleSaveNewOffer}) => {
    const {amount, id, rate} = row;
    const marks = [
        {value: 0, label: '0 zł'},
        {value: amount, label: `${amount} zł`},
    ];
    function handleSubmit(values: any) {
        values.auctionId = id;
        handleSaveNewOffer(values);
    }

    return (
        <>
            <CreateOfferWrapper>
                <Typography>Create an offer for this auction</Typography>
                <Formik
                    initialValues={{
                        amount: amount,
                        rate: rate,

                        // temporary hide - waiting for server update
                        // allowDivision: true
                    }}
                    validate={CollapseBoxCreateOfferValidator}
                    onSubmit={handleSubmit}
                >
                    {({handleSubmit, values, handleChange, handleBlur, errors, touched, setFieldValue, isValid}) => (
                        <Form onSubmit={handleSubmit}>
                            <FormikWrapper>
                                <FieldWrapper>
                                    <FieldTitleTypography>Your rate offer is {values.rate}%</FieldTitleTypography>
                                    <TextField
                                        name="rate"
                                        type="number"
                                        label={'Enter expected rate *'}
                                        InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}}
                                        value={values.rate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(touched.rate && errors.rate)}
                                        helperText={touched.rate && errors.rate}
                                    />
                                </FieldWrapper>
                                <FieldWrapper>
                                    <FieldTitleTypography>Your offer amount is {values.amount}zł</FieldTitleTypography>
                                    <Slider
                                        name="amount"
                                        valueLabelDisplay="auto"
                                        min={1}
                                        max={amount}
                                        marks={marks}
                                        value={values.amount}
                                        onChange={(e, value) => setFieldValue('amount', value)}
                                    />

                                    {/* temporary hide button - waiting for server update */}

                                    {/* <FieldTitleTypography>Do you want to allow automatically division of your offer? </FieldTitleTypography>
                                    <Switch color="primary" checked={values.allowDivision} onChange={handleChange} name="allowDivision" /> */}
                                </FieldWrapper>
                                <Button type="submit" variant="outlined" disabled={!isValid}>
                                    Create offer
                                </Button>
                            </FormikWrapper>
                        </Form>
                    )}
                </Formik>
            </CreateOfferWrapper>
        </>
    );
};
