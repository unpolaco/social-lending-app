import React from 'react';
import {Formik, Form} from 'formik';
import {Button, Typography, TextField, Slider, InputAdornment, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
import {CreateAuctionCardWrapper, FormWrapper, AccordionWrapper, Text, TextWrapper, TextBold} from './AuctionCreateForm.styles';
import {initialValues, marks} from './AuctionCreateForm.constants';
import {AuctionCreateFormValidator} from './AuctionCreateForm.helpers';
import {AuctionCreateFormValues, AuctionCreateFormProps} from './AuctionCreateForm.types';
import AddIcon from '@material-ui/icons/Add';
import {RateReview} from '@material-ui/icons';

export const AuctionCreateForm: React.FC<AuctionCreateFormProps> = ({handleSaveNewAuction}) => {
    function handleSubmitForm(values: AuctionCreateFormValues) {
        handleSaveNewAuction(values);
    }
    return (
        <Accordion>
            <AccordionWrapper>
                <AccordionSummary expandIcon={<AddIcon />} data-testid="createNewAuctionBtn">
                    <Typography variant="h6">Create new auction</Typography>
                </AccordionSummary>
            </AccordionWrapper>
            <AccordionDetails>
                <AccordionWrapper>
                    <CreateAuctionCardWrapper>
                        <Formik initialValues={initialValues} validate={AuctionCreateFormValidator} onSubmit={handleSubmitForm}>
                            {({handleSubmit, values, handleChange, handleBlur, errors, touched, setFieldValue, isValid}) => {
                                const amount = values.amount! || 0;
                                const rate = values.rate! || 0;
                                const loanAmount: number =
                                    amount && RateReview && isValid ? +(amount + amount * (rate / 100)).toFixed(2) : 0;
                                const loanRepayment = loanAmount && isValid ? +(loanAmount / values.loanDuration!).toFixed(2) : 0;

                                return (
                                    <Form onSubmit={handleSubmit}>
                                        <FormWrapper>
                                            <TextWrapper>
                                                <Text>Total amount to pay: </Text>
                                                <TextBold>{loanAmount || '0'} zł</TextBold>
                                            </TextWrapper>
                                            <TextWrapper>
                                                <Text>Repayment amount: </Text>
                                                <TextBold>{loanRepayment || '0'} zł</TextBold>
                                            </TextWrapper>
                                            <TextField
                                                autoFocus
                                                name="amount"
                                                type="number"
                                                data-testid="amountAuctionCreate"
                                                label={'Enter amount *'}
                                                InputProps={{endAdornment: <InputAdornment position="end">zł</InputAdornment>}}
                                                value={values.amount ?? ''}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(touched.amount && errors.amount)}
                                                helperText={touched.amount && errors.amount}
                                            />
                                            <TextField
                                                name="rate"
                                                type="number"
                                                data-testid="rateAuctionCreate"
                                                label={'Enter expected rate *'}
                                                InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}}
                                                value={values.rate ?? ''}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(touched.rate && errors.rate)}
                                                helperText={touched.rate && errors.rate}
                                            />
                                            <Text>Duration of a loan in months</Text>
                                            <Slider
                                                name="loanDuration"
                                                data-testid="sliderAuctionCreate"
                                                valueLabelDisplay="auto"
                                                step={1}
                                                min={1}
                                                max={24}
                                                marks={marks}
                                                value={values.loanDuration}
                                                onChange={(e, value) => setFieldValue('loanDuration', value)}
                                            />

                                            <Button type="submit" disabled={!isValid} data-testid="buttonAuctionCreate" variant="outlined">
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
