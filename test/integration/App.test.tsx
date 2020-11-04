import {render, screen} from '@testing-library/react';
import {App} from '../../src/components/App';
import React from 'react';

describe('<App/>', () => {
    test('renders welcome dummy text', () => {
        render(<App />);
        expect(screen.getByRole('heading')).toHaveTextContent('Social Lending Platform');
    });
});
