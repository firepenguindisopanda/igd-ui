import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddBlog from './AddBlog';

// Mock BlogDataService to avoid actual API calls
jest.mock('../../services/blog.service', () => ({
  create: jest.fn().mockResolvedValue({ data: { id: 1, title: 'Test Blog' } })
}));

describe('AddBlog Component', () => {
  test('renders the blog form', () => {
    render(<AddBlog />);

    // Check that form fields are present
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/URL/i)).toBeInTheDocument();
  });
});
