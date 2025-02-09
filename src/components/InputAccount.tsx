export const InputAccount = () => {
  return (
    <fieldset>
      <legend>Input your information</legend>
      <div>
        <label>
          Mail Address
          <input type="email" placeholder="example@test.com" />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" placeholder="More than 8 characters" />
        </label>
      </div>
    </fieldset>
  );
};
