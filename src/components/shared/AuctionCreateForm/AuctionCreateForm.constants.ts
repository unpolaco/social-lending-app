import {AuctionCreateFormValues} from './AuctionCreateForm.types';
import {FormikErrors} from 'formik';

export const initialValues: AuctionCreateFormValues = {amount: '', rate: '', loanDuration: 0, loanStartDate: ''};
export const marks = [
    {value: 1, label: '1'},
    {value: 24, label: '24'},
];

export const auctionCreateFormValidator = (values: AuctionCreateFormValues) => {
    const errors: FormikErrors<AuctionCreateFormValues> = {};

    if (!values.amount) {
        errors.amount = 'Amount is required';
    }
    if (values.amount <= 0 || values.amount === 'e') {
        errors.amount = 'Enter correct amount';
    }

    if (!values.rate) {
        errors.rate = 'Enter correct amount';
    }
    if (values.rate <= 0 || values.rate === 'e') {
        errors.rate = 'Enter correct rate';
    }
    if (values.rate > 20) {
        errors.rate = 'Such big rate is not allowed';
    }
    return errors;
};
