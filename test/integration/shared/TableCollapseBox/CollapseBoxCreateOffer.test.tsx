import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {CollapseBoxCreateOffer} from '../../../../src/components/shared/TableCollapseBox/CollapseBoxCreateOffer';
import {Offer} from '../../../../src/helpers/types';
import userEvent from '@testing-library/user-event';
describe('Formik in CollapseBoxCreateOffer component', () => {
    const row: Offer = {
        amount: 100,
        offerId: 0,
        rate: 5,
        status: '',
        borrowerName: 'Jonny',
        lenderUserName: 'Jonny82',
        borrowerRating: 2,
        loanDuration: 3,
        risk: 3,
    };
    const handleSaveNewOffer: any = jest.fn();

    it('renders inputs component', async () => {
        const {getByTestId} = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        expect(screen.getByTestId('rateOfferCreate')).toBeInTheDocument();
        expect(screen.getByTestId('amountOfferCreate')).toBeInTheDocument();
        expect(screen.getByTestId('buttonOfferCreate')).toBeInTheDocument();
    });

    // it('make button disabled when "-1" is typed in rate input', async () => {
    //     const { getByTestId } = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />);
    //     userEvent.type(screen.getByTestId('rateOfferCreate'), '-1');
    //     userEvent.click(screen.getByTestId('amountOfferCreate'));
    //     await waitFor(() => expect(screen.getByTestId('buttonOfferCreate')).toBeDisabled());
    // });

    // it('make button disabled when "0" is typed in rate input', async () => {
    //     const { getByTestId } = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />);
    //     userEvent.type(screen.getByTestId('rateOfferCreate'), '0');
    //     console.log(screen.getByTestId('rateOfferCreate'));

    //     await waitFor(() => expect(screen.getByTestId('buttonOfferCreate')).toBeDisabled());
    // });

    // it('make button disabled when "21" is typed in rate input', async () => {
    //     const { getByTestId } = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />);
    //     userEvent.type(screen.getByTestId('rateOfferCreate'), '21');
    //     await waitFor(() => expect(screen.getByTestId('buttonOfferCreate')).toBeDisabled());
    // });

    it('make button enabled when all inputs are filled with valid numbers', async () => {
        const {getByTestId} = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        userEvent.type(screen.getByTestId('rateOfferCreate'), '5');
        fireEvent.change(screen.getByTestId('amountOfferCreate').querySelector('input')!, {target: {value: 50}});
        await waitFor(() => expect(screen.getByTestId('buttonOfferCreate')).toBeEnabled());
    });
});
