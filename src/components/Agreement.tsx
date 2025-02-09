type Props = {
  onChange: (event: any) => void;
};

export const Agreement = ({ onChange }: Props) => {
  return (
    <fieldset>
      <legend>Agree With</legend>
      <label>
        <input type="checkbox" onChange={onChange} />
        <a href="google.com">Terms</a>
      </label>
    </fieldset>
  );
};
