import React, { useId, useState } from 'react';
import { InputAccount } from './InputAccount';
import { Agreement } from './Agreement';

export const SignupForm = () => {
  const [checked, setChecked] = useState(false);
  const headingId = useId();

  return (
    <form aria-labelledby={headingId}>
      <h2 id={headingId}>Signup Account</h2>
      <InputAccount />
      <Agreement
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.currentTarget.checked);
        }}
      />
      <div>
        <button disabled={!checked}>Signup</button>
      </div>
    </form>
  );
};
