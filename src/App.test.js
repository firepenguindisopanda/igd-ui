import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading with Intergalactic Digital', () => {
  render(<App />);
  const linkElement = screen.getByText(/Intergalactic Digital/i);
  expect(linkElement).toBeInTheDocument();
});
