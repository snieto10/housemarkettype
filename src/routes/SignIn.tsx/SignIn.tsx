import { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <div>
        <h1>Member Sign In</h1>
        <p>Dont have an account? Create free account</p>
        <input type='text' />
        <br />
        <input type='password' />
        <br />
        <button>Sign In</button>

        <p>or</p>

        <button>Google</button>
      </div>
    </>
  );
}

export default SignIn;
