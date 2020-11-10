import React from 'react';
import {StyledBox} from './CollapseBoxLender.styles';
import {Formik, Form} from 'formik';
import {Button, Typography, TextField, Slider, InputAdornment} from '@material-ui/core';

export const CollapseBoxLender: React.FC<any> = ({borrowerAmount, borrowerRate, handleSaveNewOffer, auctionId}) => {
    const marks = [
        {value: 0, label: '0 zł'},
        {value: borrowerAmount, label: `${borrowerAmount} zł`},
    ];
    function handleSubmit(values: any) {
        values.auctionId = auctionId;
        handleSaveNewOffer(values);
    }

    return (
        <StyledBox>
            <Typography>Create an offer for this auction</Typography>
            <Formik initialValues={{amount: borrowerAmount, rate: borrowerRate}} onSubmit={handleSubmit}>
                {({handleSubmit, values, handleChange, handleBlur, errors, touched, setFieldValue}) => (
                    <Form onSubmit={handleSubmit}>
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
                        <Typography>Your amount</Typography>
                        <Slider
                            name="amount"
                            valueLabelDisplay="auto"
                            min={0}
                            max={borrowerAmount}
                            marks={marks}
                            value={values.amount}
                            onChange={(e, value) => setFieldValue('amount', value)}
                        />
                        <Button type="submit">Create offer</Button>
                    </Form>
                )}
            </Formik>
        </StyledBox>
    );
};
