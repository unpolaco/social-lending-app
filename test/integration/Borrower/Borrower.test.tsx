import {screen} from '@testing-library/react';
import {Borrower} from '../../../src/components/page/BorrowerPage/Borrower';
import React from 'react';
import userEvent from '@testing-library/user-event';
import {renderWithRouter} from '../../helpers/renderWithRouter';

describe('Borrower', () => {
    it('renders buttons', async () => {
        const {getByRole} = renderWithRouter(<Borrower />);
        expect(screen.getByRole('button', {name: /All Auctions/i})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Loans & My auctions/i})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /My account/i})).toBeInTheDocument();
    });

    it('sets /borrower/auctions url on click on Invest button', () => {
        const {history} = renderWithRouter(<Borrower />);
        userEvent.click(screen.getByRole('button', {name: /All Auctions/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/borrower/auctions');
    });
    it('sets /borrower/commitments url on click on Portfolio button', () => {
        const {history} = renderWithRouter(<Borrower />);
        userEvent.click(screen.getByRole('button', {name: /Loans & My auctions/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/borrower/commitments/auctions');
    });
    it('sets /borrower/account url on click on My account button', () => {
        const {history} = renderWithRouter(<Borrower />);
        userEvent.click(screen.getByRole('button', {name: /My account/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/borrower/account');
    });
});
