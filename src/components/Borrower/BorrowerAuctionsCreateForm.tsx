import React from 'react';
import {Formik, Form} from 'formik';
import {Button, TextField, InputAdornment} from '@material-ui/core';
import {CreateAuctionCardWrapper} from './BorrowerAuctionsCreateForm.styles';

export const BorrowerAuctionsCreateForm = () => {
    function handleSubmit(values: any) {
        console.log(values);
    }

    return (
        <CreateAuctionCardWrapper>
            <Formik initialValues={{amount: '', rate: '', startDate: ''}} onSubmit={handleSubmit}>
                {({handleSubmit, values, handleChange, handleBlur, errors, touched}) => (
                    <Form onSubmit={handleSubmit}>
                        <TextField
                            autoFocus
                            label={'Enter amount *'}
                            name={'amount'}
                            type="number"
                            value={values.amount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.amount && errors.amount)}
                            helperText={touched.amount && errors.amount}
                        />
                        <TextField
                            label={'Enter expected rate *'}
                            InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}}
                            name={'rate'}
                            type="number"
                            value={values.rate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.rate && errors.rate)}
                            helperText={touched.rate && errors.rate}
                        />
                        <TextField
                            name={'startDate'}
                            type="date"
                            label="Start loan date"
                            InputLabelProps={{shrink: true}}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.startDate && errors.startDate)}
                            helperText={touched.startDate && errors.startDate}
                        />
                        <Button type="submit">Create auction</Button>
                    </Form>
                )}
            </Formik>
        </CreateAuctionCardWrapper>
    );
};
