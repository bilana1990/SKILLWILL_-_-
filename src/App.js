import React, { useId } from 'react';

function EmailForm() {
  // უნიკალური id-ების გენერაცია useId-ის მეშვეობით
  const emailInputId = useId();

  return (
    <form>
      <label htmlFor={emailInputId}>Email:</label>
      <input id={emailInputId} type="email" placeholder="Enter your email" />
    </form>
  );
}

function App() {
  return (
    <div>
      <h1>Email Forms</h1>

      <h2>Form 1</h2>
      <EmailForm />

      <h2>Form 2</h2>
      <EmailForm />

      <h2>Form 3</h2>
      <EmailForm />
    </div>
  );
}

export default App;
