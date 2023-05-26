import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './index';

describe('LoginForm', () => {
  it('should validate the email input', () => {
    render(<App />);
    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(screen.getByText('Please enter an email.')).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(
      screen.queryByText('Please enter an email.')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('Please enter a valid email.')
    ).not.toBeInTheDocument();
  });

  it('should validate the password input', () => {
    render(<App />);
    const passwordInput = screen.getByLabelText('Password:');
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(screen.getByText('Please enter a password.')).toBeInTheDocument();
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(
      screen.queryByText('Please enter a password.')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('Password must be at least 6 characters')
    ).not.toBeInTheDocument();
  });
});
