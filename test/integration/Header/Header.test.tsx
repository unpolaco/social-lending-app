import {render, screen} from '@testing-library/react';
import {Header} from '../../../src/components/Header/Header';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

describe('<Header/>', () => {
    test('renders welcome dummy text', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        );
        expect(screen.getByRole('heading')).toHaveTextContent('SOLID Lending Platform');
    });
});
