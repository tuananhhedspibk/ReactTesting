import { render, screen } from '@testing-library/react';
import { Agreement } from '../components/Agreement';

test('The accessible name of fieldset is quote from legend', () => {
  render(<Agreement />);
  expect(screen.getByRole('group', { name: 'Agree With' })).toBeInTheDocument();
});
