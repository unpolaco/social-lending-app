import {FormikErrors} from 'formik';

interface CollapseBoxCreateOfferProps {
    amount: number;
    rate: number;
}

export const CollapseBoxCreateOfferValidator = (values: CollapseBoxCreateOfferProps) => {
    const errors: FormikErrors<CollapseBoxCreateOfferProps> = {};

    if (!values.rate) {
        errors.rate = 'Rate is required';
    }
    if (values.rate <= 0) {
        errors.rate = 'Enter correct rate';
    }
    if (values.rate > 20) {
        errors.rate = 'Such big rate is not allowed';
    }
    return errors;
};
