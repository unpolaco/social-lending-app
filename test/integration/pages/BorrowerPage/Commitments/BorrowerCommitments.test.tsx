import React from 'react';
import {screen} from '@testing-library/react';
import {mocked} from 'ts-jest/utils';
import userEvent from '@testing-library/user-event';
import {renderWithRouter} from '../../../../helpers/renderWithRouter';
import {CommitmentsAuctions} from '../../../../../src/components/pages/BorrowerPage/Commitments/CommitmentsAuctions';
import {CommitmentsLoans} from '../../../../../src/components/pages/BorrowerPage/Commitments/CommitmentsLoans';
import {Commitments} from '../../../../../src/components/pages/BorrowerPage/Commitments/Commitments';

jest.mock('../../../../../src/components/pages/BorrowerPage/Commitments/CommitmentsLoans');
jest.mock('../../../../../src/components/pages/BorrowerPage/Commitments/CommitmentsAuctions');

describe('Commitments', () => {
    beforeEach(() => {
        mocked(CommitmentsAuctions).mockReturnValue(<h2>CommitmentsAuctions</h2>);
        mocked(CommitmentsLoans).mockReturnValue(<h2>CommitmentsLoans</h2>);
    });
    it('renders tabs', async () => {
        const {getByRole} = renderWithRouter(<Commitments />);
        expect(screen.getByRole('tab', {name: /My auctions/i})).toBeInTheDocument();
        expect(screen.getByRole('tab', {name: /My loans/i})).toBeInTheDocument();
    });

    it('sets /borrower/commitments/auctions url on click on My auctions tab', () => {
        const {history} = renderWithRouter(<Commitments />);
        userEvent.click(screen.getByRole('tab', {name: /My auctions/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/borrower/commitments/auctions');
    });
    it('sets /lender/portfolio/user-investments url on click on My loans tab', () => {
        const {history} = renderWithRouter(<Commitments />);
        userEvent.click(screen.getByRole('tab', {name: /My loans/i}));
        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/borrower/commitments/loans');
    });
});
