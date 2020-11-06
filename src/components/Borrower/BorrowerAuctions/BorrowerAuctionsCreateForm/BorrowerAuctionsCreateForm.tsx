import React from 'react';
import {Formik, Form} from 'formik';
import {Button, Typography, TextField, Slider, InputAdornment, AccordionSummary, AccordionDetails} from '@material-ui/core';
import {CreateAuctionCardWrapper, StyledAccordion} from './BorrowerAuctionsCreateForm.styles';
import {initialValues, marks} from './BorrowerAuctionsCreateForm.constants';
import {AuctionCreateFormValues} from './BorrowerAuctionsCreateForm.types';
import AddIcon from '@material-ui/icons/Add';

export const BorrowerAuctionsCreateForm = () => {
    function handleSubmit(values: AuctionCreateFormValues) {
        console.log(values);
    }
    return (
        <StyledAccordion>
            <AccordionSummary expandIcon={<AddIcon />}>
                <Typography variant="h6">Create new auction</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <CreateAuctionCardWrapper>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        {({handleSubmit, values, handleChange, handleBlur, errors, touched, setFieldValue}) => (
                            <Form onSubmit={handleSubmit}>
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
                                <TextField
                                    name="startDate"
                                    type="date"
                                    label="Start loan date"
                                    InputLabelProps={{shrink: true}}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.startDate && errors.startDate)}
                                    helperText={touched.startDate && errors.startDate}
                                />
                                <Typography>Duration of a loan in months</Typography>
                                <Slider
                                    name="loanDuration"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={0}
                                    max={36}
                                    marks={marks}
                                    value={values.loanDuration}
                                    onChange={(e, value) => setFieldValue('loanDuration', value)}
                                />
                                <Button type="submit">Create auction</Button>
                            </Form>
                        )}
                    </Formik>
                </CreateAuctionCardWrapper>
            </AccordionDetails>
        </StyledAccordion>
    );
};

//     );
// };
