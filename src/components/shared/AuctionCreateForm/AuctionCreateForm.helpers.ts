import {FormikErrors} from 'formik';
import {AuctionCreateFormValues} from './AuctionCreateForm.types';

export const AuctionCreateFormValidator = (values: AuctionCreateFormValues) => {
    const errors: FormikErrors<AuctionCreateFormValues> = {};

    if (!values.amount) {
        errors.amount = 'Amount is required';
    } else if (values.amount <= 0) {
        errors.amount = 'Enter correct amount';
    }

    if (!values.rate) {
        errors.rate = 'Enter correct rate';
    } else if (values.rate <= 0) {
        errors.rate = 'Enter correct rate';
    } else if (values.rate > 20) {
        errors.rate = 'Such a big rate is not allowed';
    }
    return errors;
};
