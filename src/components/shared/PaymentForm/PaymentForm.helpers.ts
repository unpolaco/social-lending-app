import {FormikErrors} from 'formik';
import {PaymentFormValidatorProps} from './PaymentForm.types';

export const PaymentFormValidator = (values: PaymentFormValidatorProps) => {
    const errors: FormikErrors<PaymentFormValidatorProps> = {};

    if (!values.amount) {
        errors.amount = 'Amount is required';
    }
    if (values.amount! <= 0) {
        errors.amount = 'Enter correct amount';
    }
    return errors;
};
