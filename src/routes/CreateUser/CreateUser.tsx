import './createUser.css';
import logo from '../../assets/images/google.png';

interface Props {
  createUserOpen: boolean;
  openCreateUser: () => void;
  createUserToSignIn: () => void;
}

function CreateUser({
  openCreateUser,
  createUserOpen,
  createUserToSignIn,
}: Props) {
  return (
    <>
      <div className={createUserOpen ? 'SIbackground' : 'SIbackground-none'}>
        <div className='SIbox'>
          <div className='SIx'>
            <span onClick={openCreateUser}>X</span>
          </div>
          <h1 className='SItitle'>Create Free Account</h1>
          <p className='SIpara'>
            Already have an account ?{' '}
            <span className='SIspan' onClick={createUserToSignIn}>
              Sign in
            </span>
          </p>
          <div className='SIwidth'>
            <form>
              <label className='SIlabel' htmlFor='email1'>
                Email:
              </label>
              <input
                className='SIinput1'
                name='email1'
                id='email1'
                type='text'
              />
              <br />
              <label className='SIlabel' htmlFor='password1'>
                Password:
              </label>
              <input
                name='password1'
                id='password1'
                className='SIinput2'
                type='password'
              />
              <label className='SIlabel' htmlFor='password'>
                First Name
              </label>
              <input
                name='firstName'
                id='firstName'
                className='SIinput2'
                type='text'
              />
              <label className='SIlabel' htmlFor='password'>
                Last Name
              </label>
              <input
                name='lastName'
                id='palastNamessword'
                className='SIinput2'
                type='text'
              />
            </form>
          </div>
          <br />
          <div className='SIcenter'>
            <button className='btn SIsignin-btn'>Create Account</button>
          </div>

          <p className='SIor'>or</p>
          <div className='SIcenter'>
            <button className='btn SIgoogle-btn SIcenter'>
              <img className='SIimage' src={logo} alt='' />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
