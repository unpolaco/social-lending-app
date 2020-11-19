import {screen, waitFor} from '@testing-library/react';
import {Portfolio} from '../../../../../src/components/pages/LenderPage/Portfolio/Portfolio';
import React from 'react';
import userEvent from '@testing-library/user-event';
import {renderWithRouter} from '../../../../helpers/renderWithRouter';
import {mocked} from 'ts-jest/utils';
import {PortfolioOffers} from '../../../../../src/components/pages/LenderPage/Portfolio/PortfolioOffers';
import {PortfolioInvestments} from '../../../../../src/components/pages/LenderPage/Portfolio/PortfolioInvestments';

jest.mock('../../../../../src/components/pages/LenderPage/Portfolio/PortfolioOffers');
jest.mock('../../../../../src/components/pages/LenderPage/Portfolio/PortfolioInvestments');

describe('Portfolio', () => {
    beforeEach(() => {
        mocked(PortfolioOffers).mockReturnValue(<h2>PortfolioOffers</h2>);
        mocked(PortfolioInvestments).mockReturnValue(<h2>PortfolioInvestments</h2>);
    });

    it('renders tabs', async () => {
        const {getByRole} = renderWithRouter(<Portfolio />);
        expect(screen.getByRole('tab', {name: /My offers/i})).toBeInTheDocument();
        expect(screen.getByRole('tab', {name: /My investments/i})).toBeInTheDocument();
    });

    it('sets /lender/portfolio/user-offers url on click on Invest tab', async () => {
        const {history} = renderWithRouter(<Portfolio />);
        await userEvent.click(screen.getByRole('tab', {name: /My offers/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/lender/portfolio/user-offers');
    });
    it('sets /lender/portfolio/user-investments url on click on Portfolio button', async () => {
        const {history} = renderWithRouter(<Portfolio />);
        await userEvent.click(screen.getByRole('tab', {name: /My investments/i}));
        await waitFor(() => expect(history.entries).toHaveLength(2));
        expect(history.location.pathname).toEqual('/lender/portfolio/user-investments');
    });
});
