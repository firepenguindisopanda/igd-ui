import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
const renderWithRouter = (component) => {

  return{
    ...render(<BrowserRouter>{component}</BrowserRouter>)
  }
}
describe('NavBar Component', () => {
  test('renders heading with Intergalactic Digital', () => {
    const { container, getByTestId } = renderWithRouter(<NavBar />);
    expect(container.innerHTML).toMatch('IGD');
  });
});