import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {AuctionCreateForm} from '../../../../src/components/shared/AuctionCreateForm/AuctionCreateForm';
import userEvent from '@testing-library/user-event';
describe('testing AuctionCreateForm component', () => {
    const handleSaveNewAuction: any = jest.fn();

    it('renders inputs', async () => {
        const {getByTestId} = render(<AuctionCreateForm handleSaveNewAuction={handleSaveNewAuction} />);
        expect(screen.getByTestId('amountAuctionCreate')).toBeInTheDocument();
        expect(screen.getByTestId('rateAuctionCreate')).toBeInTheDocument();
        expect(screen.getByTestId('sliderAuctionCreate')).toBeInTheDocument();
        expect(screen.getByTestId('buttonAuctionCreate')).toBeInTheDocument();
    });

    it('make button disabled when "-1" is typed in amount input', async () => {
        const {getByTestId} = render(<AuctionCreateForm handleSaveNewAuction={handleSaveNewAuction} />);
        userEvent.type(screen.getByTestId('amountAuctionCreate'), '-1');
        await waitFor(() => expect(screen.getByTestId('buttonAuctionCreate')).toBeDisabled());
    });
    it('make button disabled when "21" is typed in rate input', async () => {
        const {getByTestId} = render(<AuctionCreateForm handleSaveNewAuction={handleSaveNewAuction} />);
        userEvent.type(screen.getByTestId('rateAuctionCreate'), '21');
        await waitFor(() => expect(screen.getByTestId('buttonAuctionCreate')).toBeDisabled());
    });
    it('make button disabled when "0" is typed in amount input and others are valid', async () => {
        const {getByTestId} = render(<AuctionCreateForm handleSaveNewAuction={handleSaveNewAuction} />);
        userEvent.type(screen.getByTestId('amountAuctionCreate'), '0');
        userEvent.type(screen.getByTestId('rateAuctionCreate'), '5');
        fireEvent.change(screen.getByTestId('sliderAuctionCreate').querySelector('input')!, {target: {value: 5}});
        await waitFor(() => expect(screen.getByTestId('buttonAuctionCreate')).toBeDisabled());
    });

    it('make button enabled when all inputs are filled with valid numbers', async () => {
        const {getByTestId} = render(<AuctionCreateForm handleSaveNewAuction={handleSaveNewAuction} />);
        userEvent.type(screen.getByTestId('amountAuctionCreate'), '300');
        userEvent.type(screen.getByTestId('rateAuctionCreate'), '5');
        fireEvent.change(screen.getByTestId('sliderAuctionCreate').querySelector('input')!, {target: {value: 5}});
        await waitFor(() => expect(screen.getByTestId('buttonAuctionCreate')).toBeEnabled());
    });
});
