import { useState } from 'react';
import google from '../../assets/images/google.png';
import './signIn.css';

interface Props {
  signInOpen: boolean;
  openSignIn: () => void;
  signInToCreateUser: () => void;
}

function SignIn({ signInOpen, openSignIn, signInToCreateUser }: Props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <div className={signInOpen ? 'SIbackground' : 'SIbackground-none'}>
        <div className='SIbox'>
          <div className='SIx'>
            <span onClick={openSignIn}>X</span>
          </div>
          <h1 className='SItitle'>Member Sign In</h1>
          <p className='SIpara'>
            Dont have an account?{' '}
            <span onClick={signInToCreateUser} className='SIspan'>
              Create free account
            </span>
          </p>
          <div className='SIwidth'>
            <form>
              <label className='SIlabel' htmlFor='email'>
                Email:
              </label>
              <input className='SIinput1' name='email' id='email' type='text' />
              <br />
              <label className='SIlabel' htmlFor='password'>
                Password:
              </label>
              <input
                name='password'
                id='password'
                className='SIinput2'
                type='password'
              />
            </form>
          </div>
          <br />
          <div className='SIcenter'>
            <button className='btn SIsignin-btn'>Sign In</button>
          </div>

          <p className='SIor'>or</p>
          <div className='SIcenter'>
            <button className='btn SIgoogle-btn SIcenter'>
              <img className='SIimage' src={google} alt='' />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
