import {screen} from '@testing-library/react';
import {Lender} from '../../../../src/components/pages/LenderPage/Lender';
import React from 'react';
import userEvent from '@testing-library/user-event';
import {renderWithRouter} from '../../../helpers/renderWithRouter';
import {mocked} from 'ts-jest/utils';
import {Invest} from '../../../../src/components/pages/LenderPage/Invest/Invest';
import {Portfolio} from '../../../../src/components/pages/LenderPage/Portfolio/Portfolio';
import {Account} from '../../../../src/components/pages/LenderPage/Account/Account';

jest.mock('../../../../src/components/pages/LenderPage/Invest/Invest');
jest.mock('../../../../src/components/pages/LenderPage/Portfolio/Portfolio');
jest.mock('../../../../src/components/pages/LenderPage/Account/Account');

describe('Lender', () => {
    beforeEach(() => {
        mocked(Invest).mockReturnValue(<h2>Invest</h2>);
        mocked(Portfolio).mockReturnValue(<h2>Portfolio</h2>);
        mocked(Account).mockReturnValue(<h2>Account</h2>);
    });

    it('renders buttons', async () => {
        const {getByRole} = renderWithRouter(<Lender />);
        expect(screen.getByRole('button', {name: /Invest/i})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Portfolio/i})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /My account/i})).toBeInTheDocument();
    });

    it('sets /lender/invest url on click on Invest button', () => {
        const {history} = renderWithRouter(<Lender />);
        userEvent.click(screen.getByRole('button', {name: /Invest/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/lender/invest');
    });
    it('sets /lender/portfolio url on click on Portfolio button', () => {
        const {history} = renderWithRouter(<Lender />);
        userEvent.click(screen.getByRole('button', {name: /Portfolio/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/lender/portfolio');
    });
    it('sets /lender/account url on click on My account button', () => {
        const {history} = renderWithRouter(<Lender />);
        userEvent.click(screen.getByRole('button', {name: /My account/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/lender/account');
    });
});
