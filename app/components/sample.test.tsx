import { render, screen } from '@testing-library/react';
import React from 'react';

test('renders a simple message', () => {
  render(<div>Hello, Jest!</div>);
  const message = screen.getByText(/Hello, Jest!/i);
  expect(message).toBeInTheDocument();
});
