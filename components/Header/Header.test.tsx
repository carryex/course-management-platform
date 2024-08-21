import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the logo with a link to the homepage', () => {
    render(<Header />);
    const logo = screen.getByAltText(/course management platform logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders the navigation links', () => {
    render(<Header />);
    const navLinks = screen.getAllByRole('link', {
      name: /courses|about/i,
    });
    expect(navLinks.length).toBeGreaterThan(1);
  });

  it('renders a search bar', () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('renders the authentication button', () => {
    render(<Header />);
    const authButton = screen.getByRole('button', { name: /login|logout/i });
    expect(authButton).toBeInTheDocument();
  });
});
