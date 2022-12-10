import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

const renderWithRouter = (component) => {

  return{
    ...render(<BrowserRouter>{component}</BrowserRouter>)
  }
}

describe('App Component', () => {
  test('renders heading with Intergalactic Digital', () => {
    const { container, getByTestId } = renderWithRouter(<App />);
    
    // const linkElement = screen.getByText(/Intergalactic Digital/i);
    expect(container.innerHTML).toMatch('Intergalactic Digital');
  });
})
