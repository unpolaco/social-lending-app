import React from 'react';
import {render, screen} from '@testing-library/react';
import {CollapseBoxCreateOffer} from '../../../../src/components/shared/TableCollapseBox/CollapseBoxCreateOffer';
import {OfferData} from '../../../../src/components/shared/Table/Table.types';
describe('Formik in CollapseBoxCreateOffer component', () => {
    const row: OfferData = {amount: 0, id: 0, rate: 0, status: ''};
    const handleSaveNewOffer: any = jest.fn();

    it('renders component', async () => {
        const {getByRole} = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        expect(screen.getByRole('spinbutton')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
