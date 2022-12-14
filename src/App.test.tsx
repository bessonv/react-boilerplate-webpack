import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Init", () => {
    test('should render Hello World', () => {
        render(<App />);
        const helloWorldElement = screen.getByText(/Hello World/i);
        expect(helloWorldElement).toBeInTheDocument();
    });
})
