import {FormikErrors} from 'formik';
import {OfferCreateValidatorProps} from './OfferCreate.types';

export const OfferCreateValidator = (values: OfferCreateValidatorProps) => {
    const errors: FormikErrors<OfferCreateValidatorProps> = {};

    if (!values.rate) {
        errors.rate = 'Rate is required';
    }
    if (values.rate! <= 0) {
        errors.rate = 'Enter correct rate';
    }
    if (values.rate! > 20) {
        errors.rate = 'Such a big rate is not allowed';
    }
    return errors;
};
