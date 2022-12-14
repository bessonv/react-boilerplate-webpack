import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe("Init", () => {
    test('should render component correctly', () => {
        render(<Input />);

        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    });
})
