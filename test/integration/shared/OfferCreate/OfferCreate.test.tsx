import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {OfferCreate} from '../../../../src/components/shared/OfferCreate/OfferCreate';
import {OfferDto} from '../../../../src/api/api.types';
import userEvent from '@testing-library/user-event';
describe('OfferCreate', () => {
    const row: OfferDto = {
        amount: 100,
        offerId: 0,
        rate: 5,
        id: 3,
        status: '',
        borrowerName: 'Jonny',
        lenderUserName: 'Jonny82',
        borrowerRating: 2,
        loanDuration: 3,
        risk: 3,
    };
    const handleSaveNewOffer: any = jest.fn();

    it('renders inputs component', async () => {
        const {getByLabelText} = render(<OfferCreate row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        expect(screen.getByLabelText('Enter expected rate *')).toBeInTheDocument();
        expect(screen.getByTestId('amountOfferCreate')).toBeInTheDocument();
        expect(screen.getByTestId('buttonOfferCreate')).toBeInTheDocument();
    });

    it('make button disabled when "-1" is typed in rate input', async () => {
        const {getByLabelText} = render(<OfferCreate row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        userEvent.type(screen.getByLabelText('Enter expected rate *'), '-1');
        await waitFor(() => expect(screen.getByTestId('buttonOfferCreate')).toBeDisabled());
    });

    it('make button disabled when "0" is typed in rate input', async () => {
        const {getByLabelText} = render(<OfferCreate row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        userEvent.type(screen.getByLabelText('Enter expected rate *'), '0');
        await waitFor(() => expect(screen.getByTestId('buttonOfferCreate')).toBeDisabled());
    });

    it('make button disabled when "21" is typed in rate input', async () => {
        const {getByLabelText} = render(<OfferCreate row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        userEvent.type(screen.getByLabelText('Enter expected rate *'), '21');
        await waitFor(() => expect(screen.getByTestId('buttonOfferCreate')).toBeDisabled());
    });

    it('make button enabled when all inputs are filled with valid numbers', async () => {
        const {getByTestId, getByLabelText} = render(<OfferCreate row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        userEvent.type(screen.getByLabelText('Enter expected rate *'), '5');
        fireEvent.change(screen.getByTestId('amountOfferCreate').querySelector('input')!, {target: {value: 50}});
        await waitFor(() => expect(screen.getByTestId('buttonOfferCreate')).toBeEnabled());
    });
});
