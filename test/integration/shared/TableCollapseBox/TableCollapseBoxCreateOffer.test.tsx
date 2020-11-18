import React from 'react';
import {render, screen} from '@testing-library/react';
import {renderWithRouter} from '../../../helpers/renderWithRouter';
import {CollapseBoxCreateOffer} from '../../../../src/components/shared/TableCollapseBox/CollapseBoxCreateOffer';
import userEvent from '@testing-library/user-event';
import {OfferData} from '../../../../src/components/shared/Table/Table.types';
describe('Formik in CollapseBoxCreateOffer component', () => {
    const row: OfferData = {amount: 0, id: 0, rate: 0, status: ''};
    const handleSaveNewOffer: any = jest.fn();

    it('renders component', async () => {
        const {getByRole} = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        expect(screen.getByRole('spinbutton')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('show "required" error when todo is typed and then erased', async () => {
        const {getByRole} = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        await userEvent.type(screen.getByRole('spinbutton'), '1234');
        await userEvent.clear(screen.getByRole('spinbutton'));
        userEvent.click(screen.getByRole('button'));
        expect(await screen.findByText(/Rate is required/i)).toBeInTheDocument();
    });
});
