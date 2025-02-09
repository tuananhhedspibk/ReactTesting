import { render, screen } from '@testing-library/react';
import { SignupForm } from '../components/SignupForm';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

test('Disable Signup Button', () => {
  render(<SignupForm />);
  expect(screen.getByRole('button', { name: 'Signup' })).toBeDisabled();
});

test('When check [Agree With Terms], Signup button will be enabled', async () => {
  render(<SignupForm />);

  await user.click(screen.getByRole('checkbox'));

  expect(screen.getByRole('button', { name: 'Signup' })).toBeEnabled();
});
