import {screen} from '@testing-library/react';
import {Portfolio} from '../../../../src/components/pages/LenderPage/Portfolio/Portfolio';
import React from 'react';
import userEvent from '@testing-library/user-event';
import {renderWithRouter} from '../../../helpers/renderWithRouter';

describe('Portfolio', () => {
    it('renders tabs', async () => {
        const {getByRole} = renderWithRouter(<Portfolio />);
        expect(screen.getByRole('tab', {name: /My offers/i})).toBeInTheDocument();
        expect(screen.getByRole('tab', {name: /My investments/i})).toBeInTheDocument();
    });

    it('sets /lender/portfolio/user-offers url on click on Invest tab', () => {
        const {history} = renderWithRouter(<Portfolio />);
        userEvent.click(screen.getByRole('tab', {name: /My offers/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/lender/portfolio/user-offers');
    });
    it('sets /lender/portfolio/user-investments url on click on Portfolio button', () => {
        const {history} = renderWithRouter(<Portfolio />);
        userEvent.click(screen.getByRole('tab', {name: /My investments/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/lender/portfolio/user-investments');
    });
});
