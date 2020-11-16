import {screen} from '@testing-library/react';
import {MainPage} from '../../../src/components/pages/MainPage/MainPage';
import React from 'react';
import userEvent from '@testing-library/user-event';
import {renderWithRouter} from '../../helpers/renderWithRouter';

describe('MainPage', () => {
    it('renders buttons', () => {
        const {getByRole} = renderWithRouter(<MainPage />);
        expect(screen.getByRole('button', {name: /Enter as Borrower/i})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Enter as Lender/i})).toBeInTheDocument();
    });

    it('sets /borrower url on click on Enter as Borrower button', () => {
        const {history} = renderWithRouter(<MainPage />);
        userEvent.click(screen.getByRole('button', {name: /Enter as Borrower/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/borrower');
    });

    it('sets /lender url on click on Enter as Lender button', () => {
        const {history} = renderWithRouter(<MainPage />);
        userEvent.click(screen.getByRole('button', {name: /Enter as Lender/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/lender');
    });
});
