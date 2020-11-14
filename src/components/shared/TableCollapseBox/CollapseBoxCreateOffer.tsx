import React from 'react';
import {CreateOfferWrapper, FormikWrapper, FieldWrapper, FieldTitleTypography} from './CollapseBox.styles';
import {Formik, Form} from 'formik';
import {Button, Typography, TextField, Slider, InputAdornment} from '@material-ui/core';
import {OfferData} from '../Table/Table.types';

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
                <Formik initialValues={{amount: amount, rate: rate}} onSubmit={handleSubmit}>
                    {({handleSubmit, values, handleChange, handleBlur, errors, touched, setFieldValue}) => (
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
                                        min={0}
                                        max={amount}
                                        marks={marks}
                                        value={values.amount}
                                        onChange={(e, value) => setFieldValue('amount', value)}
                                    />
                                </FieldWrapper>
                                <Button type="submit" variant="outlined">
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
