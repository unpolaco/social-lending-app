export interface PaymentFormProps {
    currentPage: string;
    fetchPaymentOnUserAccount?: any;
    fetchPaymentOnPlatformAccount?: any;
    fetchAccountDetails?: any;
}

export interface PaymentFormValidatorProps {
    amount: number | undefined;
}
