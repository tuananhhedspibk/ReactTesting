import { render, screen } from '@testing-library/react';
import { mockPostMyAddress } from '../components/AsyncItem/fetchers/mock';
import {
  inputContactNumber,
  inputDeliveryAddress,
  clickSubmit,
} from './testingUtils';
import { RegisterAddress } from '../components/AsyncItem/RegisterAddress';

// jest.mock('../src/components/AsyncItem/fetchers');

async function fillValuesAndSubmit() {
  const contactNumber = await inputContactNumber();
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
}

async function fillInvalidValuesAndSubmit() {
  const contactNumber = await inputContactNumber({
    name: '田中 太郎',
    phoneNumber: 'abc-defg-hijkl',
  });
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
}

beforeEach(() => {
  jest.resetAllMocks();
});

test('成功時「登録しました」が表示される', async () => {
  const mockFn = mockPostMyAddress();
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText('登録しました')).toBeInTheDocument();
});

test('失敗時「登録に失敗しました」が表示される', async () => {
  const mockFn = mockPostMyAddress(500);
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText('登録に失敗しました')).toBeInTheDocument();
});
