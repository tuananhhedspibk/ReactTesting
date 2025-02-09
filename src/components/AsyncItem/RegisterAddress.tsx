import { useState } from 'react';
import { ItemBuyForm } from '../ItemBuy/ItemBuyForm';
import { handleSubmit } from './handleSumit';
import { checkPhoneNumber, ValidationError } from './validations';
import { postMyAddress } from './fetchers';

export const RegisterAddress = () => {
  const [postResult, setPostResult] = useState('');

  return (
    <div>
      <ItemBuyForm
        onSubmit={handleSubmit((values) => {
          try {
            checkPhoneNumber(values.phoneNumber);
            postMyAddress(values)
              .then(() => setPostResult('登録しました'))
              .catch(() => {
                setPostResult('登録に失敗しました');
              });
          } catch (err) {
            if (err instanceof ValidationError) {
              setPostResult('不正な入力値が含まれています');
              return;
            }
            setPostResult('不明なエラーが発生しました');
          }
        })}
      />
      {postResult && <p>{postResult}</p>}
    </div>
  );
};
