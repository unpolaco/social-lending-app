import React from 'react';
import {Formik, Form} from 'formik';
import {Button, Typography, TextField, Slider, InputAdornment, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
import {CreateAuctionCardWrapper, FormWrapper, AccordionWrapper} from './AuctionCreateForm.styles';
import {initialValues, marks} from './AuctionCreateForm.constants';
import {AuctionCreateFormValidator} from './AuctionCreateForm.helpers';
import {AuctionCreateFormValues} from './AuctionCreateForm.types';
import AddIcon from '@material-ui/icons/Add';

export const AuctionCreateForm: React.FC<any> = ({handleSaveNewAuction}) => {
    function handleSubmit(values: AuctionCreateFormValues) {
        handleSaveNewAuction(values);
    }

    return (
        <Accordion>
            <AccordionWrapper>
                <AccordionSummary expandIcon={<AddIcon />}>
                    <Typography variant="h6">Create new auction</Typography>
                </AccordionSummary>
            </AccordionWrapper>
            <AccordionDetails>
                <AccordionWrapper>
                    <CreateAuctionCardWrapper>
                        <Formik initialValues={initialValues} validate={AuctionCreateFormValidator} onSubmit={handleSubmit}>
                            {({handleSubmit, values, handleChange, handleBlur, errors, touched, setFieldValue, isValid}) => {
                                const loanAmount: number = +(values.amount! + values.amount! * (values.rate! / 100)).toFixed(2);
                                const loanRepayment = (loanAmount / values.loanDuration).toFixed(2);
                                const loanAmountDisplay = !Number.isNaN(Number(loanAmount)) && isValid ? ` ${loanAmount} zł` : ' 0 zł';
                                const loanRepaymentDisplay =
                                    !Number.isNaN(Number(loanRepayment)) && isValid ? ` ${loanRepayment} zł` : ' 0 zł';
                                return (
                                    <Form onSubmit={handleSubmit}>
                                        <FormWrapper>
                                            <Typography>Total amount to pay: {loanAmountDisplay}</Typography>
                                            <Typography>Repayment amount: {loanRepaymentDisplay}</Typography>
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
                                            <Typography>Duration of a loan in months</Typography>
                                            <Slider
                                                name="loanDuration"
                                                valueLabelDisplay="auto"
                                                step={1}
                                                min={1}
                                                max={24}
                                                marks={marks}
                                                value={values.loanDuration}
                                                onChange={(e, value) => setFieldValue('loanDuration', value)}
                                            />

                                            <Button type="submit" disabled={!isValid}>
                                                Create auction
                                            </Button>
                                        </FormWrapper>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </CreateAuctionCardWrapper>
                </AccordionWrapper>
            </AccordionDetails>
        </Accordion>
    );
};
