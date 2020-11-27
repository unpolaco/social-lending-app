import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {PaymentFormOnUserAccount} from '../../../../src/components/shared/PaymentForm/PaymentFormOnUserAccount';
import userEvent from '@testing-library/user-event';
describe('testing AuctionCreateForm component', () => {
    const fetchPaymentOnUserAccount: any = jest.fn();

    it('renders input', async () => {
        const {getByLabelText, getByTestId} = render(
            <PaymentFormOnUserAccount fetchPaymentOnUserAccount={fetchPaymentOnUserAccount} currentPage="lender" />,
        );
        expect(screen.getByLabelText('Enter amount *')).toBeInTheDocument();
        expect(screen.getByTestId('buttonPayment')).toBeInTheDocument();
    });

    it('make button disabled when "-1" is typed in amount input', async () => {
        const {getByLabelText, getByTestId} = render(
            <PaymentFormOnUserAccount fetchPaymentOnUserAccount={fetchPaymentOnUserAccount} currentPage="lender" />,
        );
        await userEvent.type(screen.getByLabelText('Enter amount *'), '-1');
        await waitFor(() => expect(screen.getByTestId('buttonPayment')).toBeDisabled());
    });
    it('make button disabled when "0" is typed in amount input', async () => {
        const {getByLabelText, getByTestId} = render(
            <PaymentFormOnUserAccount fetchPaymentOnUserAccount={fetchPaymentOnUserAccount} currentPage="lender" />,
        );
        await userEvent.type(screen.getByLabelText('Enter amount *'), '0');
        await waitFor(() => expect(screen.getByTestId('buttonPayment')).toBeDisabled());
    });
    it('make button enabled when input is filled with valid number', async () => {
        const {getByTestId} = render(
            <PaymentFormOnUserAccount fetchPaymentOnUserAccount={fetchPaymentOnUserAccount} currentPage="lender" />,
        );
        userEvent.type(screen.getByLabelText('Enter amount *'), '500');
        await waitFor(() => expect(screen.getByTestId('buttonPayment')).toBeEnabled());
    });
});
