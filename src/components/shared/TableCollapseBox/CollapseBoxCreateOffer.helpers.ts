import {FormikErrors} from 'formik';

interface CollapseBoxCreateOfferValidatorProps {
    rate: number;
}

export const CollapseBoxCreateOfferValidator = (values: CollapseBoxCreateOfferValidatorProps) => {
    const errors: FormikErrors<CollapseBoxCreateOfferValidatorProps> = {};

    if (!values.rate) {
        errors.rate = 'Rate is required';
    }
    if (values.rate <= 0) {
        errors.rate = 'Enter correct rate';
    }
    if (values.rate > 20) {
        errors.rate = 'Such a big rate is not allowed';
    }
    return errors;
};
