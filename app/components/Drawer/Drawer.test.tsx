import { render, screen, fireEvent } from '@testing-library/react';
import Drawer from './Drawer';

test('renders drawer content when open', () => {
  render(
    <Drawer isOpen={true} onClose={() => {}}>
      <div>Drawer Content</div>
    </Drawer>
  );
  expect(screen.getByText(/Drawer Content/i)).toBeInTheDocument();
});

test('does not render drawer content when closed', () => {
  render(
    <Drawer isOpen={false} onClose={() => {}}>
      <div>Drawer Content</div>
    </Drawer>
  );
  expect(screen.queryByText(/Drawer Content/i)).not.toBeInTheDocument();
});

test('closes drawer when clicking the close button', () => {
  const handleClose = jest.fn();
  render(
    <Drawer isOpen={true} onClose={handleClose}>
      <div>Drawer Content</div>
    </Drawer>
  );
  fireEvent.click(screen.getByRole('button'));
  expect(handleClose).toHaveBeenCalled();
});
