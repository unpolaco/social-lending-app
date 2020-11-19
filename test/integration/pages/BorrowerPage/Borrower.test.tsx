import React from 'react';
import {screen} from '@testing-library/react';
import {Borrower} from '../../../../src/components/pages/BorrowerPage/Borrower';
import userEvent from '@testing-library/user-event';
import {renderWithRouter} from '../../../helpers/renderWithRouter';
import {mocked} from 'ts-jest/utils';
import {Auctions} from '../../../../src/components/pages/BorrowerPage/Auctions/Auctions';
import {Account} from '../../../../src/components/pages/BorrowerPage/Account/Account';
import {Commitments} from '../../../../src/components/pages/BorrowerPage/Commitments/Commitments';

jest.mock('../../../../src/components/pages/BorrowerPage/Account/Account');
jest.mock('../../../../src/components/pages/BorrowerPage/Commitments/Commitments');
jest.mock('../../../../src/components/pages/BorrowerPage/Auctions/Auctions');

describe('Borrower', () => {
    beforeEach(() => {
        mocked(Auctions).mockReturnValue(<h2>Auctions</h2>);
        mocked(Commitments).mockReturnValue(<h2>Commitments</h2>);
        mocked(Account).mockReturnValue(<h2>Account</h2>);
    });
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
        expect(history.location.pathname).toEqual('/borrower/commitments');
    });
    it('sets /borrower/account url on click on My account button', () => {
        const {history} = renderWithRouter(<Borrower />);
        userEvent.click(screen.getByRole('button', {name: /My account/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/borrower/account');
    });
});
