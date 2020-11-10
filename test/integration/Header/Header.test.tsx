import {render, screen} from '@testing-library/react';
import {Header} from '../../../src/components/Header/Header';
import React from 'react';

describe('<Header/>', () => {
    test('renders welcome dummy text', () => {
        render(<Header />);
        expect(screen.getByRole('heading')).toHaveTextContent('SOLID Lending Platform');
    });
});
