import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header component', () => {
    it('should render with title "Tickers App"', () => {
        const { getByText } = render(<Header />);
        expect(getByText('Tickers App')).toBeInTheDocument();
    });
});
