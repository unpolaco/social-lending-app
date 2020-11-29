import React from 'react';
import {CreateOfferWrapper, FormikWrapper, FieldWrapper, FieldTitleTypography, Text} from './OfferCreate.styles';
import {Formik, Form} from 'formik';
import {Button, Typography, TextField, Slider, InputAdornment} from '@material-ui/core';
import {OfferCreateValidator, generateProfitAmountDisplay} from './OfferCreate.helpers';
import {OfferCreateProps, OfferCreateValidatorProps} from './OfferCreate.types';

export const OfferCreate: React.FC<OfferCreateProps> = ({row, handleSaveNewOffer}) => {
    const {amount, id, rate} = row;
    const marks = [
        {value: 0, label: '0 zł'},
        {value: amount, label: `${amount} zł`},
    ];

    function handleSubmit(values: OfferCreateValidatorProps) {
        values.auctionId = id;
        handleSaveNewOffer(values);
    }

    return (
        <>
            <CreateOfferWrapper>
                {row.status === 'ARCHIVED' ? (
                    <Typography>This auction is archived. You can't create offers for archived auctions</Typography>
                ) : (
                    <>
                        <Typography>Create an offer for this auction</Typography>
                        <Formik initialValues={{amount: amount, rate: rate}} validate={OfferCreateValidator} onSubmit={handleSubmit}>
                            {({handleSubmit, values, handleChange, handleBlur, errors, touched, setFieldValue, isValid}) => {
                                const profitAmountDisplay = generateProfitAmountDisplay(values, isValid);
                                return (
                                    <Form onSubmit={handleSubmit}>
                                        <FormikWrapper>
                                            <Text>Your profit will be: {profitAmountDisplay}</Text>
                                            <FieldWrapper>
                                                <FieldTitleTypography>Your rate offer is {values.rate}%</FieldTitleTypography>
                                                <TextField
                                                    name="rate"
                                                    type="number"
                                                    data-testid="rateOfferCreate"
                                                    id="rate"
                                                    label={'Enter expected rate *'}
                                                    InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}}
                                                    value={values.rate ?? ''}
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
                                                    data-testid="amountOfferCreate"
                                                    valueLabelDisplay="auto"
                                                    min={1}
                                                    max={amount}
                                                    marks={marks}
                                                    value={values.amount}
                                                    onChange={(e, value) => setFieldValue('amount', value)}
                                                />
                                                <FieldTitleTypography>
                                                    Do you know that your offer amount could be divided?
                                                </FieldTitleTypography>
                                            </FieldWrapper>
                                            <Button type="submit" data-testid="buttonOfferCreate" disabled={!isValid} variant="outlined">
                                                Create offer
                                            </Button>
                                        </FormikWrapper>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </>
                )}
            </CreateOfferWrapper>
        </>
    );
};
