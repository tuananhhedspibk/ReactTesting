import { render, screen } from '@testing-library/react';
import { ItemBuyForm } from '../components/ItemBuy/ItemBuyForm';
import {
  inputContactNumber,
  inputDeliveryAddress,
  clickSubmit,
} from './testingUtils';

function mockHandleSubmit() {
  const mockFn = jest.fn();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: { [k: string]: unknown } = {};
    formData.forEach((value, key) => (data[key] = value));
    mockFn(data);
  };

  return [mockFn, onSubmit] as const;
}

describe('過去のお届け先がない場合', () => {
  test('お届け先入力欄がある', () => {
    render(<ItemBuyForm />);

    expect(screen.getByRole('group', { name: '連絡先' })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: 'お届け先' })).toBeInTheDocument();
  });

  test('入力・送信すると、入力内容が送信される', async () => {
    const [mockFn, onSubmit] = mockHandleSubmit();
    render(<ItemBuyForm onSubmit={onSubmit} />);
    const contactNumber = await inputContactNumber();
    const deliveryAddress = await inputDeliveryAddress();

    await clickSubmit();

    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining({ ...contactNumber, ...deliveryAddress })
    );
  });
});
