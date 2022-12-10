import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders heading with Welcome to Intergalactic Digital', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Welcome to Intergalactic Digital/i);
    expect(linkElement).toBeInTheDocument();
  });
})