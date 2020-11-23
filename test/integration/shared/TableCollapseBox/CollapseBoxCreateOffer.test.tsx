import React from 'react';
import {render, screen} from '@testing-library/react';
import {CollapseBoxCreateOffer} from '../../../../src/components/shared/TableCollapseBox/CollapseBoxCreateOffer';
import {OfferData} from '../../../../src/components/shared/Table/Table.types';
import userEvent from '@testing-library/user-event';
describe('Formik in CollapseBoxCreateOffer component', () => {
    const row: OfferData = {amount: 0, id: 0, rate: 0, status: ''};
    const handleSaveNewOffer: any = jest.fn();

    it('renders component', async () => {
        const {getByRole} = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        expect(screen.getByRole('spinbutton')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    // it('show "Such a big rate is not allowed" error when "21" is typed', async () => {
    //     const {getByRole, findByText} = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer}/>);
    //     userEvent.clear(screen.getByRole('spinbutton'));
    //     userEvent.type(screen.getByRole('spinbutton'), '21');
    //     userEvent.click(screen.getByRole('button', {name: /Create offer/i}))
    //     expect(await screen.findByText('Such a big rate is not allowed')).toBeInTheDocument();
    // });
    it('show "Enter correct rate" error when "-1" is typed', async () => {
        const {getByRole, findByText} = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        userEvent.clear(screen.getByRole('spinbutton'));
        userEvent.type(screen.getByRole('spinbutton'), '-1');
        userEvent.click(screen.getByRole('button', {name: /Create offer/i}));
        expect(await screen.findByText('Enter correct rate')).toBeInTheDocument();
    });

    it('show "Enter correct rate" error when "0" is typed', async () => {
        const {getByRole, findByText} = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer} />);
        userEvent.clear(screen.getByRole('spinbutton'));
        userEvent.type(screen.getByRole('spinbutton'), '0');
        userEvent.click(screen.getByRole('button', {name: /Create offer/i}));
        expect(await screen.findByText('Enter correct rate')).toBeInTheDocument();
    });
    // it('make button disabled when "0" is typed', async () => {
    //     const {getByRole, findByText} = render(<CollapseBoxCreateOffer row={row} handleSaveNewOffer={handleSaveNewOffer}/>);

    //     userEvent.clear(screen.getByRole('spinbutton'));
    //     userEvent.type(screen.getByRole('spinbutton'), '0');
    //     userEvent.click(screen.getByRole('button', {name: /Create offer/i}))
    //     expect(screen.getByRole('button', {name: /Create offer/i})).toBeDisabled()
    // });
});
