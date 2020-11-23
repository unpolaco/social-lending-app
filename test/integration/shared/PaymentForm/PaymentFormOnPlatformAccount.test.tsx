import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {PaymentFormOnPlatformAccount} from '../../../../src/components/shared/PaymentForm/PaymentFormOnPlatformAccount';
import userEvent from '@testing-library/user-event';
describe('testing AuctionCreateForm component', () => {
    const fetchPaymentOnUserAccount: any = jest.fn();

    it('renders input', async () => {
        const {getByTestId} = render(
            <PaymentFormOnPlatformAccount fetchPaymentOnUserAccount={fetchPaymentOnUserAccount} currentPage="lender" />,
        );
        expect(screen.getByTestId('amountPayment')).toBeInTheDocument();
        expect(screen.getByTestId('buttonPayment')).toBeInTheDocument();
    });

    // it('make button disabled when "-1" is typed in amount input', async () => {
    //     const {getByTestId} = render(<PaymentFormOnPlatformAccount fetchPaymentOnUserAccount={fetchPaymentOnUserAccount} currentPage = 'lender'/>);
    //     userEvent.type(screen.getByTestId('amountPayment'), '-1');
    //     await waitFor(() => expect(screen.getByTestId('buttonPayment')).toBeDisabled());
    // });
    it('make button enabled when input is filled with valid number', async () => {
        const {getByTestId} = render(
            <PaymentFormOnPlatformAccount fetchPaymentOnUserAccount={fetchPaymentOnUserAccount} currentPage="lender" />,
        );
        userEvent.type(screen.getByTestId('amountPayment'), '500');
        await waitFor(() => expect(screen.getByTestId('buttonPayment')).toBeEnabled());
    });
});
