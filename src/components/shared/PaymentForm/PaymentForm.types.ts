export interface PaymentFormProps {
    currentPage: string;
    fetchPaymentOnUserAccount?: any;
    fetchPaymentOnPlatformAccount?: any;
}

export interface PaymentFormValidatorProps {
    amount: number | undefined;
}
