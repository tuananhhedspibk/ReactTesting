import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputAccount } from '../components/InputAccount';

const user = userEvent.setup();

test('Mail Address input', async () => {
  render(<InputAccount />);

  const mailTextbox = screen.getByRole('textbox', { name: 'Mail Address' });
  const mailValue = 'test@mail.com';

  await user.type(mailTextbox, mailValue);

  expect(screen.getByDisplayValue(mailValue)).toBeInTheDocument();

  expect(() => screen.getByRole('textbox', { name: 'Password' })).toThrow();
  expect(() =>
    screen.getByPlaceholderText('More than 8 characters')
  ).not.toThrow();
});
