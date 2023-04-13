import { useState } from 'react';
import './signIn.css';

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <div className=' SIbackground'>
        <div className='SIbox'>
          <div className='SIx'>X</div>
          <h1 className='SItitle'>Member Sign In</h1>
          <p className='SIpara'>Dont have an account? Create free account</p>
          <div className='SIwidth'>
            <form>
              <label htmlFor='email'>Email:</label>
              <input className='SIinput1' name='email' id='email' type='text' />
              <br />
              <label htmlFor='password'>Password:</label>
              <input
                name='password'
                id='password'
                className='SIinput2'
                type='password'
              />
            </form>
          </div>
          <br />
          <button>Sign In</button>

          <p>or</p>

          <button>Google</button>
        </div>
      </div>
    </>
  );
}

export default SignIn;
