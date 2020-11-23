import React from 'react';
import {render, screen} from '@testing-library/react';
import {AuctionCreateForm} from '../../../../src/components/shared/AuctionCreateForm/AuctionCreateForm';
import {AuctionCreateFormValues} from '../../../../src/components/shared/AuctionCreateForm/AuctionCreateForm.types';
import userEvent from '@testing-library/user-event';
describe('testing AuctionCreateForm component', () => {
    const handleSaveNewAuction: any = jest.fn();

    it('renders inputs', async () => {
        const {getByText, findByRole} = render(<AuctionCreateForm handleSaveNewAuction={handleSaveNewAuction} />);
        expect(screen.getByText(/Enter amount */)).toBeInTheDocument();
        expect(screen.getByText(/Enter expected rate */)).toBeInTheDocument();
        expect(screen.getByText(/Create auction/)).toBeInTheDocument();
        expect(await screen.findByRole('slider')).toBeInTheDocument();
    });

    it('make button disabled when "0" is typed', async () => {
        const {getByRole, findByText} = render(<AuctionCreateForm handleSaveNewAuction={handleSaveNewAuction} />);

        userEvent.type(screen.getByText(/Enter amount */), '0');
        userEvent.click(screen.getByRole('button', {name: /Create offer/i}));
        expect(await screen.findByText(/Create auction/)).toBeDisabled();
    });
});
